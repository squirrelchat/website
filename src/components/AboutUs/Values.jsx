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

import PageSection from '@components/PageSection'

import style from '@styles/about_us.scss'

// eslint-disable-next-line react/display-name
const value = text => <span>We value <em>{text}</em></span>

const Values = () => (
  <section className={style.container}>
    <h2>Squirrel is built on top of 4 values</h2>
    <PageSection icon='MessageCircle' title={value('freedom of speech')} noWrap>
      Any opinion is worth speaking, wether people agree with it or not. This is a fundamental right and is necessary
      for a healthy environment. Censorship is an extremely dangerous practice and should be fought as much as
      possible.
    </PageSection>
    <blockquote>
      <p>
        Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions
        without interference and to seek, receive and impart information and ideas through any media and
        regardless of frontiers.
      </p>
      <footer>
        <cite>
          —Article 19 of the <a href='https://un.org/en/documents/udhr' rel='noreferrer' target='_blank'>Universal
          Declaration of Human Rights</a>
        </cite>
      </footer>
    </blockquote>

    <PageSection icon='Shield' title={value('the right of privacy')}>
      Privacy is a major concern over Internet and people are being more and more aware and concerned by the risks
      of having their activity closely monitored. We do our best to follow the principles of least privilege and we
      make sure to secure your private data from wild eyes, for example through <Link to='/features#encryption'>End to
      End Encryption</Link>.
    </PageSection>
    <PageSection icon='Award' title={value('transparency and honesty')}>
      Having people's trust is a privilege, and it should be treated as such. If we do oopsies and for example a
      security issue is found within Squirrel, it's your right to be informed about what happened. It's completely
      unnecessary to lie and hide things, and would just end up blowing back and cause deception.
    </PageSection>
    <PageSection icon='Smile' title={value('community participation')}>
      A platform is nothing without its community and the community is one of the strongest forces when it comes to
      finding ideas, bugs, or even helping out with tasks we're unable to do.
    </PageSection>
  </section>
)

Values.displayName = 'Values'
export default React.memo(Values)
