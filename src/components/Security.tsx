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
import { useEffect } from 'preact/hooks'

import style from './security.module.css'

export default function Security (_: RoutableProps) {
  useEffect(() => {
    document.body.classList.add(style.haxxor)
    return () => document.body.classList.remove(style.haxxor)
  }, [])
  return (
    <main>
      <section>
        <h2 className={style.green}>Squirrel Security Bug Bounty</h2>
        <p className={style.red}>
          <b>Note:</b> our bug bounty program is not open yet. We will open it once we start releasing the first
          versions of the project. The rules and scope are subject to change.
        </p>
        <p>
          At Squirrel we value security of our service and our users a lot, especially as we try to target companies and
          the last thing we want to happen is a breach within Squirrel that would severely affect users and businesses.
        </p>
        <p>
          The Internet is full of software security researchers, and we encourage all of them to help us in our journey
          of making Squirrel more and more secure for everyone.
        </p>
        <p>
          To keep this hacking game fun for everyone, we established basic guidelines to make sure researchers don't go
          too far on our stuff and crushes it into pieces. We're sure everyone can adopt a responsible behavior for
          finding and disclosing security vulnerabilities. Happy hacking!
        </p>
      </section>
      <section>
        <h2 className={style.red}>The Rules</h2>
        <ul>
          <li>Do not affect other users with your testing. Only use accounts you own.</li>
          <li>Please provide a clear, written step-by-step instruction set for reproducing the vulnerability.</li>
          <li>
            Do not perform actions that could affect the reliability of our services. If you're tracking down potential
            denial of service issues it's fine and eligible for rewards, but please stop immediately if you believe
            availability of our services has been affected.
          </li>
          <li>
            Do not attempt to get users' private data. If you suspect a vulnerability that'd lead to private data
            disclosure, only test with your own data.
          </li>
          <li>
            If you found private data that doesn't belong to you, you must delete it as soon as possible.
          </li>
          <li>
            Please keep your findings private until we're done with our investigation and resolution, unless a team
            member explicitly allowed you to disclose the vulnerability.
          </li>
        </ul>
        <p>
          If you disagree with those rules or feel like we've missed something, reach out
          at <a href='mailto:hi@squirrel.chat'>hi@squirrel.chat</a>.
        </p>
      </section>
      <section>
        <h2 className={style.red}>The Scope</h2>
        <p>
          As a general definition, a valid vulnerability should be reproducible on our own instance at squirrel.chat,
          and/or on a fresh installation of Squirrel chat.
        </p>
        <h3>Valid targets</h3>
        <ul>
          <li>REST API</li>
          <li>Realtime WebSocket</li>
          <li>Wind (Voice &amp; video node)</li>
          <li>Leaf (Website embedding service)</li>
        </ul>
        <h3>Valid domains</h3>
        <ul>
          <li>squirrel.chat</li>
          <li>*.squirrel.chat <b>except:</b></li>
          <ul>
            <li>staging.squirrel.chat</li>
            <li>*.staging.squirrel.chat</li>
          </ul>
          <li>squirrelchat.net</li>
          <li>*.squirrelchat.net</li>
        </ul>
      </section>
      <section>
        <h2 className={style.red}>Ouf of scope vulnerabilities</h2>
        <ul>
          <li>Resource enumeration (Emails, invite codes, ...)</li>
          <li>Cookies without HttpOnly or Secure flags</li>
          <li>Missing, incomplete or weak security headers</li>
          <li>Publicly accessible login panels</li>
          <li>Reports from automated tools</li>
          <li>Social engineering attacks</li>
          <li>Vulnerability targeting unsupported browsers or operating system</li>
          <li>Software version disclosure (Banners, error messages, ...)</li>
        </ul>
      </section>
      <section>
        <h2 className={style.red}>Legal safe harbor</h2>
        <p>
          We recommend, when testing, to experiment on a self-hosted instance of Squirrel rather than a public instance,
          whether it's controlled by us or not. We strongly recommend against testing against a public instance
          that is not operated by us, as you may face legal action from the administrators of the instance.
        </p>
        <p>
          If you happen to do testing on our public instance in the scope of this program, we waive any potential legal
          procedure against you. We'll not discriminate against you in any way, shape or form.
        </p>
      </section>
      <section>
        <h2 className={style.blue}>Reaching out</h2>
        <p>
          You found a security vulnerability? Great! Send us an email at <a href='mailto:hi@squirrel.chat'>hi@squirrel.chat</a>,
          and we'll do our best to get back to you as fast as we can. We accept reports in English, and in French.
        </p>
      </section>
      <section>
        <h2 className={style.blue}>Bounty Rewards</h2>
        <p>
          As of now, we cannot offer cash rewards for valid reports. However, what we can guarantee is a reserved sweet
          spot in the acknowledgements section below for every confirmed security report.
        </p>
      </section>
      <section>
        <h2 className={style.green} id='acknowledgments'>Acknowledgements</h2>
        <p>
          Nobody has reported security vulnerabilities to the team yet.
          As soon as someone does, we'll make sure to list them here!
        </p>
      </section>
    </main>
  )
}
