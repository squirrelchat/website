/*
 * Copyright (c) 2020 Squirrel Chat, All rights reserved.
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

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { WordMark } from './Icons'

import style from '@styles/footer.scss'

const squirrels = [
  'Squirrels are cute 🧡',
  'Powered by squirrels!',
  <a rel='noreferrer' href='https://en.wikipedia.org/wiki/Squirrel' target='_blank'>"Squirrel" Wikipedia article</a>
]

const Footer = () => {
  // Random squirrel comment
  const random = React.useMemo(() => {
    const saved = typeof document !== 'undefined' ? document.body.dataset['rng-footer'] : null
    return saved || Math.floor(Math.random() * squirrels.length)
  }, [])

  // Rendering
  return (
    <footer className={style.container}>
      <div className={style.contents}>
        <section className={style.section}>
          <div>
            <WordMark className={style.title}/>
          </div>
          <div className={style.item}>&copy; {new Date().getFullYear()} Squirrel Chat</div>
          <div className={style.item}>
            <a href='https://github.com/squirrelchat/website/blob/master/LICENSE' rel='noreferrer' target='_blank'>License</a> -
            BSD-3-Clause
          </div>
          <div className={[ style.item, style.spaced ].join(' ')}>{squirrels[random]}</div>
        </section>
        <section className={style.section}>
          <div className={style.title}>Project</div>
          <div className={style.item}>
            <a href='/login'>Try Squirrel</a>
          </div>
          <div className={style.item}>
            <Link to='/features'>Features</Link>
          </div>
          <div className={style.item}>
            <Link to='/download'>Download</Link>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.title}>Resources</div>
          <div className={style.item}>
            <Link to='/blog'>Blog</Link>
          </div>
          <div className={style.item}>
            <Link to='/security'>Security</Link>
          </div>
          <div className={style.item}>
            <Link to='/branding'>Branding</Link>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.title}>Open Source</div>
          <div className={style.item}>
            <a rel="noreferrer" target='_blank' href='https://github.com/squirrelchat'>GitHub</a>
          </div>
          <div className={style.item}>
            <a rel="noreferrer" target='_blank' href='https://github.com/squirrelchat/website'>Source Code</a>
          </div>
          <div className={style.item}>
            <a rel="noreferrer" target='_blank' href='https://github.com/squirrelchat/squirrel'>Squirrel Core</a>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.title}>More</div>
          <div className={style.item}>
            <a rel="noreferrer" target='_blank' href='https://discord.gg/zhxhCzN'>Discord</a>
          </div>
          <div className={style.item}>
            <a target='_blank' href='mailto:hi@squirrel.chat'>Email</a>
          </div>
        </section>
      </div>
      <Helmet>
        <body data-rng-footer={random}/>
      </Helmet>
    </footer>
  )
}

Footer.displayName = 'Footer'
export default React.memo(Footer)
