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

import Asset from './Asset'

import style from '@styles/branding.scss'

const Logo = () => (
  <section className={style.assets}>
    <h2>Our Logo</h2>
    <section className={style.big}>
      <Asset
        name={'logo-orange'}
        svg={require('@assets/brand/logo-orange.svg').default}
        png={require('@assets/brand/logo-orange.png').default}
      />
    </section>
    <section className={style.normal}>
      <Asset
        name={'logo-black'}
        svg={require('@assets/brand/logo-black.svg').default}
        png={require('@assets/brand/logo-black.png').default}
      />
      <Asset
        name={'logo-white'}
        svg={require('@assets/brand/logo-white.svg').default}
        png={require('@assets/brand/logo-white.png').default}
      />
    </section>
    <section className={style.small}>
      <Asset
        name={'squirrel-orange'}
        svg={require('@assets/brand/squirrel-orange.svg').default}
        png={require('@assets/brand/squirrel-orange.png').default}
      />
      <Asset
        name={'squirrel-black'}
        svg={require('@assets/brand/squirrel-black.svg').default}
        png={require('@assets/brand/squirrel-black.png').default}
      />
      <Asset
        name={'squirrel-white'}
        svg={require('@assets/brand/squirrel-white.svg').default}
        png={require('@assets/brand/squirrel-white.png').default}
      />
      <Asset
        name={'wordmark-orange'}
        svg={require('@assets/brand/wordmark-orange.svg').default}
        png={require('@assets/brand/wordmark-orange.png').default}
      />
      <Asset
        name={'wordmark-black'}
        svg={require('@assets/brand/wordmark-black.svg').default}
        png={require('@assets/brand/wordmark-black.png').default}
      />
      <Asset
        name={'wordmark-white'}
        svg={require('@assets/brand/wordmark-white.svg').default}
        png={require('@assets/brand/wordmark-white.png').default}
      />
    </section>
  </section>
)

Logo.displayName = 'BrandingLogo'
export default React.memo(Logo)
