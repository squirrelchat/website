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
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Branding from './Branding'
import AboutUs from './AboutUs'
import BlogRouter from './Blog/Router'
import ComingSoon from './ComingSoon'

const Router = () => (
  <Switch>
    <Route path='/' exact>
      <Home/>
    </Route>
    <Route path='/features' exact>
      <ComingSoon/>
    </Route>
    <Route path='/for-enterprises' exact>
      <ComingSoon/>
    </Route>
    <Route path='/download' exact>
      <ComingSoon/>
    </Route>
    <Route path='/security' exact>
      <ComingSoon/>
    </Route>
    <Route path='/branding' exact>
      <Branding/>
    </Route>
    <Route path='/about-us' exact>
      <AboutUs/>
    </Route>
    <Route path='/blog'>
      <BlogRouter/>
    </Route>
    <Route>
      404
    </Route>
  </Switch>
)

Router.displayName = 'SquirrelRouterSSR'
export default React.memo(Router)
