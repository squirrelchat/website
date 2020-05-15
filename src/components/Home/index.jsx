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
import { Link } from 'react-router-dom'

import Section from './Section'

import style from '@styles/home.scss'

const Home = () => (
  <>
    <div className={style.header}>
      <div className={style.container}>
        <div>
          <h1>Next-gen, open-source and enterprise-ready chat platform</h1>
          <p>
            Respectful of your privacy, Squirrel is the way to go to either chill with some friends in voice chat
            playing Rocket League, or to flex about your new suit and tie with colleagues in video calls while your boss
            isn't looking.
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div className={style.container}>
      <Section title='Simple, yet powerful'>
        A straightforward UI, simple to understand and get used to. A UI doesn't have to be exessively complex and
        require hours of work as well as a PhD to get something done (Looking at you, TeamSpeak!). Squirrel's UI is
        intuitive and requires minimum amount of work while still packing <Link to='/features'>a lot of features</Link>.
      </Section>
      <Section title='Privacy, done right'>
        Squirrel uses by default strong military-grade encryption on all private conversations to prevent any
        intruders to see what you've sent to other people. Text, voice and video conversations as well as attachments
        are all <Link to='/features#encryption'>kept secure</Link>.
      </Section>
      <Section title='Open-Source, for the better'>
        All of the components used in the Squirrel Stack are open-sourced and available on GitHub under the
        BSD-3-Clause license. A lot more transparency, and eyes to spot bugs in the wild. Also a lot more eyes
        to keep track of potential <Link to='/security'>security issues</Link>.
      </Section>
      <Section title='Try it now!'>
        Get youself a Squirrel account now and start chatting with your friends! <a href="/login">Try Squirrel</a>
      </Section>
    </div>
  </>
)

Home.displayName = 'Home'
export default React.memo(Home)
