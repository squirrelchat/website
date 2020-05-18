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

import Values from './Values'
import FromToulouse from './FromToulouse'
import MeetTheTeam from './MeetTheTeam'

import style from '@styles/about_us.scss'

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us</title>
      <meta property='og:title' content='About Us'/>
      <meta name='description' content='Learn more about who we are and what we do'/>
      <meta property='og:description' content='Learn more about who we are and what we do'/>
    </Helmet>
    <section className={style.colored}>
      <div className={style.container}>
        <h2>Empowering online relationships</h2>
        <p>
          The ecosystem of online chatting went a long way. From old forum full of gifs (pronounced /ɡɪf/) it
          eventually evolved to IRC channels, Skype groups, <s>cracked</s> TeamSpeak servers and nowadays Discord
          servers.
        </p>
        <p>
          We want this ecosystem to keep going forward. Either if you're a group of friends, a Warcraft guild, a
          family, or even a company, Squirrel provides you the right tools to hang out.
        </p>
      </div>
    </section>
    <Values/>
    <FromToulouse/>
    <MeetTheTeam/>
  </>
)

AboutUs.displayName = 'AboutUs'
export default React.memo(AboutUs)
