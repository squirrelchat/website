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

/*
 * I did this originally for the /security page and later figured the results were not that great
 * but let's keep this here just in case because it's kinda fun
 */

import React from 'react'

import squirrelArt from './squirrel.txt'

import style from '@styles/neofetch.scss'

const Uptime = () => {
  const [ time, setTime ] = React.useState(0)
  React.useEffect(() => {
    const delta = time < 60 ? 1 : 60
    const timeout = setTimeout(() => setTime(time + delta), delta * 1e3)
    return () => clearTimeout(timeout)
  }, [ time ])

  let seconds = time
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  return [
    hours && `${hours} hour${hours !== 1 ? 's' : ''}`,
    minutes && `${minutes} minute${minutes !== 1 ? 's' : ''}`,
    !minutes && `${seconds} second${seconds !== 1 ? 's' : ''}`
  ].filter(Boolean).join(', ')
}

Uptime.displayName = 'Uptime'
const MemoUptime = React.memo(Uptime)

const Neofetch = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        {squirrelArt}
      </div>
      <div className={style.properties}>
        <span><b>guest</b>@<b>squirrel.chat</b></span>
        <span>-------------------</span>
        <span><b>OS</b>: {navigator.platform}</span>
        <span><b>Host</b>: Web Browser</span>
        <span><b>Uptime</b>: <MemoUptime/></span>
        <span><b>Shell</b>: JavaScript</span>
        <span><b>Resolution</b>: {screen.width}x{screen.height}</span>
        <span><b>WM</b>: Browser Tabs</span>
        <span><b>Terminal</b>: DevTools</span>
        <span><b>Email</b>: <a target='_blank' href='mailto:hi@squirrel.chat'>hi@squirrel.chat</a></span>
        <span><b>PGP Key</b>: <a target='_blank' href='/pgp-key.txt'>https://squirrel.chat/pgp-key.txt</a></span>
      </div>
    </div>
  )
}

Neofetch.displayName = 'Neofetch'
export default React.memo(Neofetch)
