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
import Helmet from 'react-helmet'

import BasicContainer from '@components/BasicContainer'
// import Researcher from '@components/AboutUs/TeamMember'

import style from '@styles/security.scss'

const Security = () => (
  <BasicContainer>
    <Helmet>
      <title>Security Bug Bounty</title>
      <meta property='og:title' content='Security Bug Bounty'/>
      <meta name='description' content={'Security is extremely important to us and we\'re extremely grateful to researchers who report responsibly vulnerabilities to us. Found one? Report it here.'}/>
      <meta property='og:description' content={'Security is extremely important to us and we\'re extremely grateful to researchers who report responsibly vulnerabilities to us. Found one? Report it here.'}/>
      <link href='https://cdn.jsdelivr.net/npm/typeface-jetbrains-mono@1.0.5/dist/index.min.css' rel='stylesheet'/>
      <body className={style.haxxor}/>
    </Helmet>
    <section className={style.intro}>
      <h2>Squirrel Security Bug Bounty</h2>
      <p>
        At Squirrel we value security of our service and our users a lot, especially as we try to target companies
        and the last thing we want to happen is a breach within Squirrel that would severely affect users and
        businesses.
      </p>
      <p>
        The Internet is full of software security researchers, and we encourage all of them to help us in our
        journey of making Squirrel more and more secure for everyone.
      </p>
      <p>
        To keep this hacking game fun for everyone, we established basic guidelines to make sure researchers don't
        go too far on our stuff and crushes it into pieces. We're sure everyone can adopt a responsible behavior
        for finding and disclosing security vulnerabilities. Happy hacking!
      </p>
    </section>
    <section className={style.rules} id='rules'>
      <h2>The Rules</h2>
      <ul>
        <li>Do not affect other users with your testing. Only use accounts and servers you own.</li>
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
        <li>If you found private data that doesn't belong to you, you must delete it as soon as possible.</li>
        <li>
          Please keep your findings private until we're done with our investigation and resolution, unless a team
          member explicitly allowed you to disclose the vulnerability.
        </li>
      </ul>
      <p>
        If you disagree with those rules or feel like we've missed something, reach out
        at <a target='_blank' href='mailto:hi@squirrel.chat'>hi@squirrel.chat</a>.
      </p>
    </section>
    <section className={style.rules} id='scope'>
      <h2>The Scope</h2>
      <p>
        In general, a valid vulnerability should be reproducible on our own instance at squirrel.chat, or at least
        reproducible on a vanilla instance (Fresh build from GitHub, no plugins, config of your choice).
      </p>
      <h3>Valid targets</h3>
      <ul>
        <li><b>Squirrel Core</b>: API and WebSocket used by Squirrel</li>
        <li><b>Leaf</b>: Our website metadata scraper and media proxy</li>
        <li><b>Wind</b>: Voice and video nodes used for communication between users</li>
      </ul>
      <h3>Valid domains</h3>
      <p>
        Squirrel as of now only owns and operates the squirrel.chat domain. All of its subdomains are in scope
        of this program.
      </p>
    </section>
    <section className={style.rules} id='safe-harbor'>
      <h2>Legal safe harbor</h2>
      <p>
        Squirrel is open-source and therefore it's extremely easy to setup a local, private instance to do all the
        testing you want. This makes you non-dependent on our public instance and protected against legal issues.
      </p>
      <p>
        However, Squirrel's complete infrastructure might be painful to configure and might not be a good enough
        test subject for some scenarios. If you happen to do testing on our public instance in the scope of this
        program, we waive any potential legal procedure against you. We'll not discriminate against you in any
        way, shape or form.
      </p>
    </section>
    <section className={style.handling} id='reach-out'>
      <h2>Reaching out</h2>
      <p>
        You found a security vulnerability? Great! Send us an email at <a target='_blank' href='mailto:hi@squirrel.chat'>hi@squirrel.chat</a>,
        and we'll do our best to get back to you as fast as we can.
      </p>
      <h3>Language</h3>
      <p>We can speak both English and French without any troubles, so please use one of those two languages to reach out.</p>
      <h3>PGP Encryption</h3>
      <p>
        If you wish, you can encrypt your message using our public key available
        here: <a target='_blank' href='/pgp-key.txt'>https://squirrel.chat/pgp-key.txt</a>.
        We'll do our best to get back to you using PGP as well.
      </p>
      <p>
        Please note that encrypted reports might take slightly longer to process as not everyone at the team might
        have the key on hand.
      </p>
    </section>
    <section className={style.handling} id='rewards'>
      <h2>Bounty Rewards</h2>
      <p>
        Squirrel is a small project made by enthusiasts students and therefore our budget is quite low and
        unpredictable. We can't guarantee a cash reward but we'll do our best to reward researchers with what
        we have on hand!
      </p>
      <p>
        However, what we can guarantee is a reserved sweet spot in the acknowledgements section below for every
        confirmed security report, with links to other platforms if you wish.
      </p>
      <h3>Notes</h3>
      <ul>
        <li>In case of duplicates, we'll only reward the first report we received.</li>
      </ul>
    </section>
    <section className={style.intro} id='acknowledgements'>
      <h2>Acknowledgements</h2>
      <p>
        Nobody has reported security vulnerabilities to the team yet. As soon as someone does, we'll make sure to list
        them here!
      </p>
    </section>
  </BasicContainer>
)

/*
<Researcher
  avatar={require('@assets/team/bowoser.png').default}
  name='Bowser65'
  links={[
    { icon: 'Twitter', name: 'Twitter', href: 'https://twitter.com/Bowser65' }
  ]}
>
  <div className={style.findgins}>
    <span><b>0</b> Critical</span>
    <span><b>0</b> High</span>
    <span><b>0</b> Medium</span>
    <span><b>0</b> Low</span>
  </div>
</Researcher>
*/

Security.displayName = 'Security'
export default React.memo(Security)
