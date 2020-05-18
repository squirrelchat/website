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
import { Link, NavLink } from 'react-router-dom'

import { Logo } from './Icons'

import style from '@styles/header.scss'

const Header = () => {
  // Hooks
  const [ opened, setOpened ] = React.useState(false)
  const toggle = React.useCallback(() => setOpened(!opened), [ opened ])
  React.useEffect(() => {
    if (opened) {
      window.addEventListener('click', toggle)
      return () => window.removeEventListener('click', toggle)
    }
  }, [ opened ])

  // Render
  return (
    <header className={[ style.container, opened && style.opened ].filter(Boolean).join(' ')}>
      <div className={style.contents}>
        <Link to='/' className={style.logo} aria-label='Squirrel Chat'>
          <Logo/>
        </Link>
        <nav>
          <NavLink activeClassName={style.current} to='/features'>Features</NavLink>
          <NavLink activeClassName={style.current} to='/download'>Download</NavLink>
          <NavLink activeClassName={style.current} to='/blog'>Blog</NavLink>
          <a rel='noreferrer' href='https://github.com/squirrelchat' target='_blank'>GitHub</a>
          <a rel='noreferrer' href='https://discord.gg/zhxhCzN' target='_blank'>Discord</a>
          <a className={style.button} href='/login'>Try Squirrel</a>
        </nav>
        <div className={style.hamburger} onClick={toggle}>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export default React.memo(Header)
