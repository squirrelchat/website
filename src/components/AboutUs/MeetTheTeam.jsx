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

import TeamMember from './TeamMember'

import style from '@styles/about_us.scss'

const MeetTheTeam = () => (
  <section className={style.container} id='meet-the-team'>
    <h2>Meet the team</h2>
    <TeamMember
      avatar={require('@assets/team/bowoser.png').default}
      name='Bowser65'
      links={[
        { icon: 'Discord', name: 'Discord', href: 'https://discord.gg/DXKgqrP' },
        { icon: 'Twitter', name: 'Twitter', href: 'https://twitter.com/Bowser65' },
        { icon: 'GitHub', name: 'GitHub', href: 'https://github.com/Bowser65' },
        { icon: 'Telegram', name: 'Telegram', href: 'https://t.me/Bowser65' },
        { icon: 'Globe', name: 'Website', href: 'https://bowser65.xyz' }
      ]}
    >
      PhD of Surrender Science. My favorite chemical elements are helium, nitrogen, tantalum, and iodine. Addicted
      to caffeine and specialized in breaking things and having stupid ideas. Arch user btw.
    </TeamMember>
    <TeamMember
      avatar={require('@assets/team/vinceh121.png').default}
      name='vinceh121'
      links={[
        { icon: 'Reddit', name: 'Reddit', href: 'https://reddit.com/u/vinceh121' },
        { icon: 'Discord', name: 'Discord', href: 'https://discord.gg/RMByRMg' },
        { icon: 'Twitter', name: 'Twitter', href: 'https://twitter.com/vinceh121' },
        { icon: 'GitHub', name: 'GitHub', href: 'https://github.com/vinceh121' },
        { icon: 'GitLab', name: 'GitLab', href: 'https://gitlab.com/vinceh121' },
        { icon: 'Telegram', name: 'Telegram', href: 'https://t.me/vinceh121' }
      ]}
    >
      Please insert bio here: _
    </TeamMember>
  </section>
)

MeetTheTeam.displayName = 'MeetTheTeam'
export default React.memo(MeetTheTeam)
