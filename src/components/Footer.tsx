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

import { h, Fragment } from 'preact'
import { useMemo } from 'preact/hooks'

import style from './footer.module.css'

import logo from '../assets/logo.svg?file'

const comments = [
  'Squirrels are cute 🧡',
  'Powered by squirrels!',
  'The ability to run it on Windows is purely a byproduct',
  <>Strong concentration of C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub> ahead</>
]

function Brand () {
  const comment = useMemo(() => Math.floor(Math.random() * comments.length), [])

  return (
    <section className={style.section}>
      <svg className={style.header}>
        <use href={`${logo}#wordmark`}/>
      </svg>

      <div className={style.item}>&copy; {new Date().getFullYear()} Squirrel Chat</div>
      <div className={`${style.item} ${style.comment}`}>{comments[comment]}</div>
    </section>
  )
}

function Project () {
  return (
    <section className={style.section}>
      <div className={style.header}>Project</div>

      <div className={style.item}>
        <a href='/login'>Try Squirrel</a>
      </div>
      <div className={style.item}>
        <a href='/features'>Features</a>
      </div>
      <div className={style.item}>
        <a href='/for-enterprises'>For Enterprises</a>
      </div>
      <div className={style.item}>
        <a href='/download'>Download</a>
      </div>
    </section>
  )
}

function Resources () {
  return (
    <section className={style.section}>
      <div className={style.header}>Resources</div>

      <div className={style.item}>
        <a href='/blog'>Blog</a>
      </div>
      <div className={style.item}>
        <a href='/security'>Security</a>
      </div>
      <div className={style.item}>
        <a href='/branding'>Branding</a>
      </div>
      <div className={style.item}>
        <a href='/developers'>Developers</a>
      </div>
    </section>
  )
}

function OpenSource () {
  return (
    <section className={style.section}>
      <div className={style.header}>Open Source</div>

      <div className={style.item}>
        <a href='https://github.com/squirrelchat' rel='noreferrer'>GitHub</a>
      </div>
      <div className={style.item}>
        <a href='https://github.com/squirrelchat/squirrel' rel='noreferrer'>Squirrel Core</a>
      </div>
      <div className={style.item}>
        <a href='https://github.com/squirrelchat/website' rel='noreferrer'>Website Source</a>
      </div>
    </section>
  )
}

function More () {
  return (
    <section className={style.section}>
      <div className={style.header}>More</div>

      <div className={style.item}>
        <a href='/about-us'>About Us</a>
      </div>
      <div className={style.item}>
        <a href='https://discord.gg/qAPpZDr' rel='noreferrer'>Discord</a>
      </div>
      <div className={style.item}>
        <a href='/legal'>Legal Notice</a>
      </div>
    </section>
  )
}

export default function Footer () {
  return (
    <footer className={style.container}>
      <div className={style.contents}>
        <Brand/>
        <Project/>
        <Resources/>
        <OpenSource/>
        <More/>
      </div>
    </footer>
  )
}
