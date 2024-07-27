---

layout: page
permalink: /osai-error/
title: Why am I experiencing errors with OSAI?
description:
nav: false
nav_order: 

---
<br>


### OSAI stands for opensourced AI.<br>

<br>

OSAI is my implementation of serving open source AIs through the internet with a privacy-first approach. No log on is required, your data is not stored or shared to third parties by me. 
<br>
<br>
When you use OSAI, it makes an API call to my server. <b> If you are using company hardware </b> your company most likely has disabled API calls to unknown internet sources - which, honestly, is overall a good security measure against internet threats.
<br>
<br>
But it does also mean, that my server (https://gmserver.xyz) will also be automatically blacklisted, as it is an unknown domain and I've built the server rather recently.

Unfortunately, getting OSAI to work on your work hardware is not worth the time. <b>I suggest trying it out on your personal devices</b> if you are curious - such as a personal phone or PC. There it should  work, as my server is freely listening to requests from the internet.

My server is a completely local solution. I assembled the hardware and it runs on a fresh install of Ubuntu server. Your chat history is not recorded. Whatever you write to any of the large language models and their response, is for your eyes only.
The conversations you have with the models are inaccessible even by me. Data is encrypted from your machine to my server end-to-end with https.

<br>
<br>
The website acts as a gateway to an API that I built using Go, data in transit is encrypted end-to-end with Cloudflare, also providing DDOS protection. <br>
<br>

<br>
for inquiries or a scheduled time of availability, you can reach me at gregor.mihelac (at) outlook (dot) com


### LIABILITY DISCLAIMER<br>
<br>
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHOR OR COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>