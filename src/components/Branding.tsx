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

import type { RoutableProps } from 'preact-router'
import { h } from 'preact'

import logo from '../assets/logo.svg?file'
import frenchSquirrel from '../assets/french.svg?file'
import prideSquirrels from '../assets/pride/collection.svg?file'
import logos from '@squirrel/logos/downloads'

import style from './branding.module.css'

type LogoProps = {
  name: string
  src: string
  srcUse?: boolean
  children?: string
  download: string
  file: string
}

function Logo (props: LogoProps) {
  return (
    <div className={style.logo}>
      <h3>{props.name}</h3>
      <div className={style.logoContents}>
        {props.srcUse
          ? <svg><use href={props.src}/></svg>
          : <img src={props.src} alt={props.name}/>}
        {props.children && <p>{props.children}</p>}
      </div>
      <div className={style.download}>
        <a href={props.download} download={props.file}>Download ZIP</a>
      </div>
    </div>
  )
}

export default function Branding (_: RoutableProps) {
  return (
    <main>
      <h1 aria-label='Squirrel Branding'>
        <svg height={70}><use href={`${logo}#branding`}/></svg>
      </h1>
      <p>
        Looking for logos to represent us? You came to the right place! You can find here all of the official logos
        you can use to represent Squirrel Chat.
      </p>
      <div className={style.logoContainer}>
        <Logo name='Logo' src={`${logo}#logo`} srcUse download={logos.logo} file='logo.zip'/>
      </div>
      <div className={style.logoParts}>
        <Logo name='Squirrel' src={`${logo}#squirrel`} srcUse download={logos.squirrel} file='squirrel.zip'/>
        <Logo name='Wordmark' src={`${logo}#wordmark`} srcUse download={logos.wordmark} file='wordmark.zip'/>
      </div>

      <h2>Alternative logos</h2>
      <p>
        Those logos are a collection of logos we made for special occasions. While we use (or used) them for special
        occasions, they are only listed here as a reference and are not meant to be used as a way to connect back to
        us.
      </p>
      <div className={style.alternates}>
        <Logo name='French Squirrel' src={frenchSquirrel} download={logos.french} file='french.zip'>
          Squirrel is a product made in France, and to honor our colors we made this special variant of the logo,
          using the official colors of the French Republic. We use it on the website to celebrate Bastille Day,
          every July 14.
        </Logo>
        <Logo name='Pride Squirrels' src={prideSquirrels} download={logos.pride} file='pride.zip'>
          A bunch of squirrels, living the life that best fit them and makes them happier!
        </Logo>
      </div>
    </main>
  )
}
