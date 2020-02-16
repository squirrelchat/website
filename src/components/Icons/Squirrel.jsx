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

const Squirrel = React.memo(
  (props) => <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 670 680' {...props}>
    <path
      fill='currentColor'
      d='M656,411.2c-2.9-16.1-8.5-32.5-16.7-48.9c-8.6-17.3-18.3-30.9-24.5-38.8c6.2-14.4,10.1-28.9,11.7-43.3 c1.5-14,0.9-27.9-1.9-41.4c-2-9.7-5.1-18.8-9.2-27.2c-3.1-6.4-5.6-10-6.1-10.7c-2.6-3.6-6.8-5.9-11.2-6.1c-4.5-0.2-8.8,1.7-11.7,5.1 c-27.1,31.6-53.9,50.3-74.6,61.3c3.2-4.7,6.2-9.4,9-14.2c5-8.5,9.3-17.1,13.3-26.4c3.6-8.4,6.8-17.1,9.8-26.6 c6.8-21.7,10.8-44.5,11.8-67.9c0.8-18.6-0.3-37.5-3.2-56.3c-5-32.1-13.7-52.8-14-53.7c-1.9-4.6-5.9-8-10.7-9.2 c-4.8-1.3-9.9-0.2-13.9,2.8c-61.7,47.4-102,63.3-168.8,89.7c-38,15-85.3,33.7-149.5,63.3c-22.3,10.3-43,21.7-61.3,33.9 c-17.9,11.9-34.1,24.8-48.1,38.5c-13.7,13.3-25.7,27.6-35.8,42.5c-9.7,14.4-17.9,29.8-24.2,45.6c-6.1,15.2-10.6,31.3-13.6,47.8 c-2.8,15.7-4.2,32.1-4.1,48.9c0,15.9,1.4,32.4,4,49.2c2.4,15.8,6,32.3,10.7,48.9c5.2,18.6,13,35.3,23.1,49.7 c8.2,11.7,18,21.8,29,30.1c15.5,11.7,29.1,16.5,34.5,18.1c3.9,5.8,8.3,11.4,13.1,16.7c14.1,15.4,30.7,26.6,49.5,33.3 c10.1,3.6,21,5.9,32.4,6.8c3.9,0.3,7.9,0.5,11.9,0.5c8.1,0,16.6-0.6,25.2-1.9c20.5-3,39.1-7.9,55.1-14.6 c14.7-6.1,27.7-13.8,38.7-22.9c9.7-8,18-17.3,24.9-27.7c5.6-8.5,10.2-17.7,14.2-28.2c5.3-13.9,7.5-29,6.4-44.9c-0.1-1-0.1-2-0.2-3 c20.5,11,41,19.7,61.4,26.1c24.4,7.6,48.5,11.9,71.8,12.6c9.2,0.3,18.3,0,27-0.8c7-0.6,13.9-1.7,20.3-3c11.2-2.3,17.5-4.9,18.2-5.2 c1.7-0.7,3.3-1.8,4.7-3.1c5.8-5.7,8.8-13.3,8.7-22c-0.1-9.4-3.8-20.1-11.2-32.7c-2.9-5-6.5-10.3-10.6-15.9c0.8,0.2,1.6,0.4,2.3,0.6 c11.2,2.6,21.7,3.8,31.5,3.8c3.5,0,6.8-0.2,10.1-0.5c22.7-2.2,33.3-11.5,35.2-13.3c1.9-1.8,3.2-4.1,3.9-6.6 C659,451.7,659.7,431.7,656,411.2z M53.9,509.6C13.3,365,65.5,258.2,209,192.1c63.4-29.2,110.3-47.8,147.9-62.6 c34.7-13.7,62-24.6,89.4-38.4c23.6-11.9,45.5-25.3,69-42.2c2,7.4,4,16.5,5.6,27.1c3.9,25.9,5.7,65.8-7.7,108.6 c-11.5,36.6-28.4,64.4-56.5,92.8c-0.4,0.4-0.9,0.9-1.2,1.4c-15.3-0.7-30.3-1-44.9-1c-18,0-35.3,0.5-51.9,1.6 c-29.4,1.8-57.1,5.4-82.3,10.5c-23.5,4.8-45.4,11-65.1,18.5c-18.2,7-35,15.2-49.9,24.5c-25.7,16-46.4,35.5-61.6,57.9 c-6.1,9-11.3,18.6-15.5,28.4c-3.4,8-6.2,16.3-8.2,24.5c-2.3,9.3-3.6,22.5-3.5,37c0,16,1.6,33,4.4,49.4c1.8,10.4,4.5,22.3,8.4,34.6 C70.8,550.6,60.3,532.2,53.9,509.6z M627,457.6c-0.5,0.3-1.1,0.5-1.8,0.8c-3.2,1.3-8.6,2.9-16.6,3.3c-14.9,0.7-41.2-2.7-81.5-23 c-6.5-3.3-14.3-1.3-18.5,4.6c-4.2,5.9-3.4,14,1.9,19c0.2,0.2,16.1,15.3,30.7,33.5c8.3,10.3,14.4,19.4,18.2,27 c3.1,6.3,3.9,10.1,4.1,12c-7.7,2.2-24.6,6-48.7,5.2c-31.9-1-82.7-10.5-144.3-49.2c-3.3-6.9-7.6-13.2-13.1-18.9 c-6.2-6.4-13.6-11.8-22-16.1c-15.9-8.1-34.8-11.7-53.2-10.2c-17.8,1.5-34.1,7.7-46.9,17.9c-7.1,5.6-13.1,12.4-17.7,20.1 c-4.9,8.1-8.4,17.2-10.4,27.2c-1.6,7.9,3.6,15.6,11.5,17.2c7.9,1.6,15.6-3.6,17.2-11.5c6.9-34.5,36.5-40.7,49-41.8 c23.3-2,51.6,8.1,60.6,31.1c0,0.1,0.1,0.2,0.1,0.3c4.8,12.5,11.3,37.1,1.9,61.9c-10.1,26.6-32.5,63.3-109.9,74.8 c-38.7,5.7-70-4.2-93-29.4c-23.7-26-34.1-62.4-38.6-88.4c-5.6-31.9-4.6-61-1.3-74.4c6.3-25.7,24-62.8,72.5-93 c54-33.7,132.4-50.7,233.4-50.7c15.7,0,32,0.4,48.8,1.2c0.5,0,0.9,0,1.4,0c0.6,0,5.7-0.3,14.1-2.1c10.9-2.3,22.2-5.9,33.8-10.8 c16-6.8,31.7-15.7,46.9-26.7c13.2-9.6,26-20.6,38.2-33.1c1,3.2,2,6.8,2.8,10.9c4.6,23.5,0.7,48.1-11.6,73 c-2.7,5.4-1.8,11.9,2.3,16.3c0.1,0.2,3.8,4.2,8.8,11.1c4.7,6.4,11.5,16.7,17.7,29.3C627.9,405,632.4,432.4,627,457.6z'
    />
    <circle fill='currentColor' cx='562.4' cy='377' r='22.7'/>
  </svg>
)

Squirrel.displayName = 'Squirrel'
export default Squirrel
