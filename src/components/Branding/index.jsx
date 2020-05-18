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

import BasicContainer from '@components/BasicContainer'
import Intro from './Intro'
import Logo from './Logo'
import Colors from './Colors'

const Branding = () => (
  <BasicContainer>
    <Helmet>
      <title>Branding</title>
      <meta property='og:title' content='Branding'/>
      <meta name='description' content={'Squirrel\'s branding assets and guidelines'}/>
      <meta property='og:description' content={'Squirrel\'s branding assets and guidelines'}/>
    </Helmet>
    <Intro/>
    <Logo/>
    <Colors/>
    <section>
      <h2>Guidelines</h2>
      <ul>
        <li>Keep the logos in their original shape and proportions</li>
        <li>Use the appropriate color to ensure the logos are visible</li>
        <li>Please do not recolor the logos and use one of the three variants available</li>
        <li>You are not allowed to use our art or name to imply any form of endorsement from the Squirrel team</li>
        <li>You are not allowed to use our art for your own logo or icons</li>
        <li>You are not allowed to sell our art</li>
      </ul>
      <p>
        If you're unsure if your use is compliant, or you simply want to share the art you've made for us you
        can <a target='_blank' href='mailto:hi@squirrel.chat'>reach out by email</a>! We can't wait to see what
        you'll create.
      </p>
    </section>
  </BasicContainer>
)

Branding.displayName = 'Branding'
export default React.memo(Branding)
