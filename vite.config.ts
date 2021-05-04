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

import type { Plugin, ESBuildOptions } from 'vite'

import { defineConfig } from 'vite'
import { rename } from 'fs/promises'
import { join } from 'path'
import preact from '@preact/preset-vite'
import magicalSvg from 'vite-plugin-magical-svg'
import brandPlugin from './build/brand.js'
import fontLicenses from './build/licenses.js'

function noJsxInject (): Plugin {
  return {
    name: 'no-jsx-inject',
    config: (c) => void ((c.esbuild as ESBuildOptions).jsxInject = '')
  }
}

function moveIndex (): Plugin {
  return {
    name: 'move-index',
    async closeBundle () {
      if (process.argv.includes('--ssr')) {
        await rename(join(__dirname, 'dist', 'index.html'), join(__dirname, 'server', 'index.html'))
      }
    }
  }
}

export default defineConfig({
  css: { modules: { localsConvention: 'camelCase' } },
  publicDir: process.argv.includes('--ssr') ? '_' : 'public',
  build: { outDir: process.argv.includes('--ssr') ? 'server' : 'dist' },
  plugins: [
    preact(),
    noJsxInject(),
    brandPlugin(),
    fontLicenses(),
    magicalSvg({ target: 'preact' }),
    moveIndex()
  ]
})
