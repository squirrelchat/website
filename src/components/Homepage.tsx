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

import FeatherIcon from 'feather-icons/dist/icons/feather.svg'
import ShieldIcon from 'feather-icons/dist/icons/shield.svg'
import NavigationIcon from 'feather-icons/dist/icons/navigation.svg'
import BriefcaseIcon from 'feather-icons/dist/icons/briefcase.svg'
import GitPrIcon from 'feather-icons/dist/icons/git-pull-request.svg'

import style from './homepage.module.css'

function Hero () {
  return (
    <div className={style.heroWrapper}>
      <div className={style.hero}>
        <div>
          <h1>Next-gen, open-source and enterprise-ready chat platform</h1>
          <p>
            Respectful of your privacy, Squirrel is the way to go to either chill with some friends in voice chat
            playing some games, or to flex about your new suit and tie with colleagues in video calls while your
            boss isn't looking.
          </p>
        </div>
        {/* todo: add an illustration */}
      </div>
    </div>
  )
}

export default function Homepage (_: RoutableProps) {
  return (
    <div className={style.container}>
      <Hero/>
      <main>
        <div className={style.highlights}>
          <section className={style.highlight}>
            <div className={style.title}>
              <FeatherIcon className={style.icon}/>
              <h2>Simple, yet powerful</h2>
            </div>
            <p>
              A straightforward UI, simple to understand and get used to. A UI doesn't have to be excessively complex
              to be powerful (Looking at you, TeamSpeak!). Squirrel's UI is intuitive and easy on the eyes, while
              packing a lot of features. Don't want to be bothered by a feature you don't use? Disable it. Simple!
            </p>
          </section>
          <section className={style.highlight}>
            <div className={style.title}>
              <ShieldIcon className={style.icon}/>
              <h2>Privacy, done right</h2>
            </div>
            <p>
              Encryption is not an option. It's how private conversations work. All of your private conversations are
              end-to-end encrypted, with robust encryption to ensure nobody can look at that super secret meme you
              sent to your friend. Private voice &amp; video calls are also end-to-end encrypted.
            </p>
          </section>
          <section className={style.highlight}>
            <div className={style.title}>
              <BriefcaseIcon className={style.icon}/>
              <h2>Suitable for enterprise needs</h2>
            </div>
            <p>
              Squirrel packs all of the core communication features an enterprise would need, plus useful tools making
              it perfect for this purpose. Plan, organize and do meetings with ease. You can even self-host Squirrel
              inside a private network, for even more security.
            </p>
          </section>
          <section className={style.highlight}>
            <div className={style.title}>
              <GitPrIcon className={style.icon}/>
              <h2>Open-Source, for real</h2>
            </div>
            <p>
              Open-Source is not a commercial argument. Squirrel's core infrastructure, micro-services and apps are all
              freely available on GitHub. And unlike some others, the repositories don't lag behind. You can see what
              we're working on, and easily contribute on the latest version of the code.
            </p>
          </section>
        </div>
        <section className={style.highlight}>
          <div className={style.title}>
            <NavigationIcon className={style.icon}/>
            <h2>Try it now!</h2>
          </div>
          <p>
            Don't waste another second. Get yourself an account, and start enjoying a 0-compromise chatting
            experience. <a href='/login'>Try Squirrel</a>
          </p>
        </section>
      </main>
    </div>
  )
}
