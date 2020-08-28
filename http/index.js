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

// Node
const { existsSync, createReadStream } = require('fs')
const { join } = require('path')
const mime = require('mime-types')

// React
const React = require('react')
const ReactDOMServer = require('react-dom/server')

// Component
const { Helmet } = require('react-helmet')
const { StaticRouter } = require('react-router')

// Others
// noinspection JSFileReferences
const manifest = require('./dist/manifest.json')

const textFiles = [
  [ /^\/robots\.txt(?:[#?].*)?$/, join(__dirname, 'files/robots.txt') ],
  [ /^\/pgp-key\.txt(?:[#?].*)?$/, join(__dirname, 'files/pgp-key.txt') ],
  [ /^\/\.well-known\/security\.txt(?:[#?].*)?$/, join(__dirname, 'files/security.txt') ]
]

require('http')
  .createServer((req, res) => {
    // uwu
    res.setHeader('x-powered-by', 'an army of squirrels')

    // Text files
    const file = textFiles.find(f => f[0].test(req.url))
    if (file) {
      res.setHeader('content-type', 'text/plain')
      return createReadStream(file[1]).pipe(res)
    }

    // Just return empty html while developing
    if (process.argv.includes('-d')) return res.end(renderHtml(req))

    // SSR
    const context = {}
    // noinspection JSFileReferences
    const App = require('./dist/App').default
    const rendered = React.createElement(
      StaticRouter, { location: req.url, context }, React.createElement(App, { server: true })
    )

    if (context.url) {
      // Redirect
      res.writeHead(302, { location: context.url })
      res.end()
    } else {
      // Send
      const html = ReactDOMServer.renderToString(rendered)
      res.setHeader('content-type', 'text/html')
      res.end(renderHtml(req, Helmet.renderStatic(), html))
    }
  }).listen(process.env.PORT || 6969)

// TODO: Resource preloading
// noinspection HtmlRequiredLangAttribute,HtmlRequiredTitleElement
const renderHtml = (req, helmet, html) => `
  <!DOCTYPE html>
  <html ${helmet ? helmet.htmlAttributes.toString() : ''} lang="en-US">
    <head>
      ${helmet ? helmet.title.toString() : ''}
      ${helmet ? helmet.meta.toString() : ''}
      ${helmet ? helmet.link.toString() : ''}
      ${manifest['styles.css'] ? `<link rel='stylesheet' href='${manifest['styles.css']}'/>` : ''}
    </head>
    <body ${helmet ? helmet.bodyAttributes.toString() : ''}>
      <div id='react-root'>
        ${html || ''}
      </div>
      <script>
        window.GLOBAL_ENV = { PRODUCTION: ${!process.argv.includes('-d')} }
      </script>
      <script src='${manifest['main.js']}'></script>
      ${manifest['styles.js'] ? `<script src='${manifest['styles.js']}'></script>` : ''}
    </body>
  </html>
`
