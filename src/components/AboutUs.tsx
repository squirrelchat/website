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
import type { TeamMember as ITeamMember } from '../team'
import { h } from 'preact'
import { useTitle, useMeta } from 'hoofd/preact'

import WebIcon from 'feather-icons/dist/icons/globe.svg'
import GitHubIcon from 'simple-icons/icons/github.svg'
import GitLabIcon from 'simple-icons/icons/gitlab.svg'
import DiscordIcon from 'simple-icons/icons/discord.svg'
import RedditIcon from 'simple-icons/icons/reddit.svg'
import TwitterIcon from 'simple-icons/icons/twitter.svg'
import TelegramIcon from 'simple-icons/icons/telegram.svg'

import team from '../team'

import style from './aboutus.module.css'

function Link (link: ITeamMember['links'][number]) {
  switch (link.type) {
    case 'website':
      return <a href={link.link} aria-label='Website'><WebIcon/></a>
    case 'github':
      return <a href={`https://github.com/${link.link}`} aria-label='GitHub'><GitHubIcon/></a>
    case 'gitlab':
      return <a href={`https://gitlab.com/${link.link}`} aria-label='GitLab'><GitLabIcon/></a>
    case 'discord':
      return <a href={`https://discord.gg/${link.link}`} aria-label='Discord'><DiscordIcon/></a>
    case 'reddit':
      return <a href={`https://reddit.com/u/${link.link}`} aria-label='Reddit'><RedditIcon/></a>
    case 'twitter':
      return <a href={`https://twitter.com/${link.link}`} aria-label='Twitter'><TwitterIcon/></a>
    case 'telegram':
      return <a href={`https://t.me/${link.link}`} aria-label='Twitter'><TelegramIcon/></a>
  }
}

function TeamMember (member: ITeamMember) {
  return (
    <div className={style.teamMember}>
      <img className={style.teamMemberAvatar} src={member.img} alt={`${member.name}'s avatar`}/>
      <div>
        <div className={style.teamMemberName}>{member.name}</div>
        <div className={style.teamMemberLinks}>{member.links.map((l) => <Link key={`${l.type}${l.link}`} {...l}/>)}</div>
        <div className={style.teamMemberBio}>{member.bio}</div>
      </div>
    </div>
  )
}

export default function AboutUs (_: RoutableProps) {
  useTitle('About Us')
  useMeta({ name: 'og:title', content: 'About Us' })
  useMeta({ name: 'og:description', content: 'Learn more about who we are, what we do and what Squirrel is.' })
  useMeta({ name: 'description', content: 'Learn more about who we are, what we do and what Squirrel is.' })

  return (
    <main className={style.root}>
      <div className={style.hero}>
        <section className={style.container}>
          <h2>Empowering online relationships</h2>
          <p>
            The way we stay connected together evolved a lot and rapidly. Started as small forums, it evolved to become
            simple IRC channels, and kept evolving to become the modern chatting apps we know today and all use to stay
            connected with peers.
          </p>
          <p>
            We want to keep this ecosystem going forward. We also want to give back users their privacy. We want
            to ensure the "private", in "private conversations" but without cutting on user experience. The choice
            between comfort or privacy is no more. Have both.
          </p>
        </section>
      </div>
      <section className={style.container}>
        <h2>We do more than just text</h2>
        <p>
          Chatting is cool, but it's only a tiny bit of what you can do on Squirrel. You can voice &amp; video chat,
          you can organize meetings, build communities, and much more. But if you feel like it, you can keep it
          simple. You can chose how you chat.
        </p>
      </section>
      <section className={style.container}>
        <h2>We keep private conversations private</h2>
        <p>
          Is a conversation really private when everyone can read it? We don't think so. So all of your private
          conversations are encrypted, so even if our database gets compromised, none of your private messages will
          be readable by evil parties. We can't respond to governmental requests for your private conversations
          either.
        </p>
      </section>
      <section className={style.container}>
        <h2>We are more than just an app</h2>
        <p>
          Squirrel isn't just your average app. It's a platform you can build on and use for whatever your creativity
          can come up with. Because Squirrel is fully open source, you can even grab only the bits you need, and
          discard the rest of the code you don't need.
        </p>
        <p>
          Our vision of privacy also goes beyond the scope of just the app. Unlike some other privacy-friendly apps, we
          don't even rely on any third-party service. CAPTCHAs, mobile notification delivery, and other fields where
          a certain sir G is too present are powered by open-source technology.
        </p>
      </section>
      <section className={style.container}>
        <h2>Meet the team</h2>
        <p>
          We're students from France (more specifically from the best French city: Toulouse), spending free time making
          potentially amazing software.
        </p>
        {Object.keys(team).map((t) => <TeamMember key={t} {...team[t]}/>)}
      </section>
    </main>
  )
}
