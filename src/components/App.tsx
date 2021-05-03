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

import { h, Fragment } from 'preact'
import { useCallback } from 'preact/hooks'
import Router from 'preact-router'

import Header from './Header'
import Footer from './Footer'

import Homepage from './Homepage'
import Security from './Security'
import AboutUs from './AboutUs'
import Branding from './Branding'
import Legal from './Legal'

type AppProps = { url: string }

export default function App (props: null | AppProps) {
  const change = useCallback(() => typeof document !== 'undefined' && document.getElementById('app')?.scrollTo(0, 0), [])

  return (
    <>
      <Header/>
      <Router url={props?.url} onChange={change}>
        <Homepage path='/'/>
        <main path='/features'>Soon!</main>
        <main path='/for-enterprises'>Soon!</main>
        <main path='/download'>Soon!</main>
        <main path='/blog'>Soon!</main>
        <Security path='/security'/>
        <AboutUs path='/about-us'/>
        <Branding path='/branding'/>
        <Legal path='/legal'/>
        <main default>404</main>
      </Router>
      <Footer/>
    </>
  )
}
