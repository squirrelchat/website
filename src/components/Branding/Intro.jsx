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

import { BrandingMark } from '@components/Icons'

const Intro = () => (
  <>
    <BrandingMark height={70}/>
    <section>
      <p>
        We've gathered all of our visual beauty here for you to admire, or eventually use it to link back to us. We
        don't take ourselves too seriously, but we want to keep things quality so if you're unsure about your use of
        our assets you can <a target='_blank' href='mailto:hi@squirrel.chat'>send it our way for approval</a>. If
        it's beautiful enough you might even earn a virtual cookie!
      </p>
      <p>
        The Squirrel logo has been designed by <a rel='noreferrer' target='_blank' href='https://ellieportfolio.webflow.io'>Elias Rokhaug</a>,
        and the font used in our wordmark is "Grand Hotel", licensed under the <a rel='noreferrer' target='_blank' href='https://fontsquirrel.com/license/grand-hotel'>SIL Open Font License 1.1</a>.
      </p>
    </section>
  </>
)

Intro.displayName = 'BrandingIntro'
export default React.memo(Intro)
