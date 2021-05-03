/*
 * Copyright (c) 2020-2021 Squirrel Chat, All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import type { Plugin } from 'vite'
import { createHash } from 'crypto'
import { readFile, writeFile } from 'fs/promises'
import { basename, join } from 'path'
import { tmpdir } from 'os'
import sharp from 'sharp'
import AdmZip from 'adm-zip'

async function convertPng (svg: Buffer): Promise<Buffer> {
  return sharp(svg, { density: 1024 }).png()
    .resize(null, 1024)
    .toBuffer()
}

async function makeArchive (files: string[], recolor: boolean = false): Promise<Buffer> {
  const zip = new AdmZip()

  for (const file of files) {
    const svg = await readFile(file)
    const png = await convertPng(svg)
    const name = basename(file, '.svg')
    zip.addFile(`${name}.svg`, svg)
    zip.addFile(`${name}.png`, png)

    if (recolor) {
      const xml = svg.toString()
      const blackSvg = Buffer.from(xml.replace(/#ff7b1c/g, 'black'), 'utf8')
      const whiteSvg = Buffer.from(xml.replace(/#ff7b1c/g, 'white'), 'utf8')
      const blackPng = await convertPng(blackSvg)
      const whitePng = await convertPng(whiteSvg)

      zip.addFile(`${name}-black.svg`, blackSvg)
      zip.addFile(`${name}-white.svg`, whiteSvg)
      zip.addFile(`${name}-black.png`, blackPng)
      zip.addFile(`${name}-white.png`, whitePng)
    }
  }

  return zip.toBuffer()
}

const archives = {
  logo: {
    files: [ 'src/assets/brand/logo.svg' ],
    recolor: true
  },
  squirrel: {
    files: [ 'src/assets/brand/squirrel.svg' ],
    recolor: true
  },
  wordmark: {
    files: [ 'src/assets/brand/wordmark.svg' ],
    recolor: true
  },
  french: {
    files: [ 'src/assets/french.svg' ],
    recolor: false
  },
  pride: {
    files: [
      'src/assets/pride/pride.svg',
      'src/assets/pride/lesbian.svg',
      'src/assets/pride/bi.svg',
      'src/assets/pride/transgender.svg',
      'src/assets/pride/enby.svg',
      'src/assets/pride/asexual.svg',
      'src/assets/pride/agender.svg',
      'src/assets/pride/pan.svg',
      'src/assets/pride/genderqueer.svg'
    ],
    recolor: false
  }
}

const zip = new Map<string, Buffer>()
const names = new Map<string, string>()

async function generateArchive (ssr?: boolean) {
  const file = join(tmpdir(), 'squirrel-web-brand-assets.json')
  if (ssr) {
    const json = await readFile(file, 'utf8')
    JSON.parse(json).forEach(([ a, b ]: string[]) => names.set(a, b))
    return
  }

  let archive: keyof typeof archives
  for (archive in archives) {
    const zipFile = await makeArchive(archives[archive].files, archives[archive].recolor)
    zip.set(archive, zipFile)
    names.set(archive, `assets/${archive}.${createHash('sha256').update(zipFile).digest('hex').slice(0, 8)}.zip`)
  }

  const json = JSON.stringify(Array.from(names.entries()))
  await writeFile(file, json, 'utf8')
}

export default function (): Plugin {
  let build = true

  return {
    name: 'brand-plugin',
    configResolved: (cfg) => build = cfg.command === 'build',
    resolveId: (id) => id === '@squirrel/logos/downloads' ? id : null,
    async load (id, ssr) {
      if (id === '@squirrel/logos/downloads') {
        if (build && zip.size === 0) {
          await generateArchive(ssr)
        }

        const res: Record<string, string> = {}
        let archive: keyof typeof archives
        for (archive in archives) res[archive] = names.has(archive) ? `/${names.get(archive)}` : '#'
        return `export default ${JSON.stringify(res)}`
      }
    },
    generateBundle () {
      for (const [ archive, file ] of zip) {
        this.emitFile({
          type: 'asset',
          fileName: names.get(archive)!,
          source: file
        })
      }
    }
  }
}
