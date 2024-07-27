---

layout: page
permalink: /osai-error/
title: Why am I experiencing errors with OSAI?
description:
nav: false
nav_order: 

---
<br>


<br>

OSAI is my implementation of serving open source AIs through the internet with a privacy-first approach. No log on is required, your data is encrypted, is not stored or shared to third parties and is inaccessible even by me.
<br>
<br>
<br>
<br>
When you use OSAI, it makes an API call to my server. <a href> If you are using company hardware<a> your company most likely has disabled API calls to unknown internet sources - which, honestly, is a good security measure against internet threats.
<br>
<br>
But it does also mean, that my server "https://gmserver.xyz" will be automatically blacklisted, as it is an unknown domain and I've built the server rather recently.

Unfortunately, getting OSAI to work on your work hardware is not worth the time. 
<br>I suggest <a href>trying it out on your personal devices</a> - such as a personal phone or PC. It should  work, as my server is freely listening to requests from the internet.

My server is a completely local solution. I assembled the hardware myself and it runs on a fresh install of Ubuntu. Your chat history is not recorded. Whatever you write to any of the large language models and their response, is for your eyes only.
The conversations you have with the models are inaccessible even by me. Data is encrypted from your machine to my server end-to-end with https.

<br>
<br>
The website acts as a gateway to an API that I built using Go, data in transit is encrypted end-to-end with Cloudflare, also providing DDOS protection. <br>
<br>

<br>
for inquiries you can reach me at gregor.mihelac (at) outlook (dot) com

<br>
<br>
<br>
<br>

### LIABILITY DISCLAIMER<br>
<br>
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHOR OR COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>