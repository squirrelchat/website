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

import { h } from 'preact'
import { useMemo, useState, useCallback, useEffect } from 'preact/hooks'
import { Link } from 'preact-router/match'

import style from './header.module.css'

import logo from '../assets/logo.svg?file'

export default function Header () {
  // Hooks
  const [ opened, setOpened ] = useState(false)
  const toggle = useCallback(() => setOpened(o => !o), [])
  const open = useCallback(() => setOpened(o => o ? o : true), [])
  const isBastilleDay = useMemo(() => {
    const date = new Date()
    return date.getUTCMonth() === 6 && date.getUTCDate() === 14
  }, [])

  useEffect(() => {
    if (opened) {
      window.addEventListener('click', toggle)
      return () => window.removeEventListener('click', toggle)
    }
  }, [ opened ])

  // Render
  return (
    <header className={`${style.container}${opened ? ` ${style.opened}` : ''}`}>
      <div className={style.contents}>
        <a className={style.logo} href='/' aria-label='Squirrel Chat'>
          <svg viewBox='0 0 386.90 100' style={{ color: 'var(--brand)' }}>
            <use href={`${logo}#${isBastilleDay ? 'logo-fr' : 'logo'}`}/>
          </svg>
        </a>

        <nav className={style.navbar}>
          <Link className={style.link} activeClassName={style.current} href='/features'>Features</Link>
          <Link className={style.link} activeClassName={style.current} href='/download'>Download</Link>
          <Link className={style.link} activeClassName={style.current} href='/blog'>Blog</Link>
          <a className={style.link} rel='noreferrer' href='https://github.com/squirrelchat' target='_blank'>GitHub</a>
          <a className={style.link} rel='noreferrer' href='https://discord.gg/qAPpZDr' target='_blank'>Discord</a>
          <a className={`${style.link} ${style.button}`} href='/login'>Try Squirrel</a>
        </nav>

        <div className={style.hamburger} onClick={open}>
          <span/><span/><span/>
        </div>
      </div>
    </header>
  )
}
