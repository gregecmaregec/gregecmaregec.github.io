---
layout: page_cb_subpage
title: Motivation
description:  Do my passions fit?
img: assets/img/cb/cb-3.jpg
importance: 4
nav: true
category: cb
---


<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Drive <br>
My two biggest interests are <u>finance</u> and <u>technology.</u>  This traineeship combines them very well. 

<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Curiosity <br>

From the traineeship description: 
<br>

Jira:<br> I have experience from previous working positions, namely customer support at Nova KBM, where requests for resolutions to various departments were made using the platform<br><br>
Git:<br> I held a intro to git/GitHub with the Google Developer Groups, as a developer, Git is a must-have.<br><br>
CI/CD:<br> I utilize GitHub actions with the CI/CD pipelines for my website to prevent broken deployment into production with .yaml files.<br><br>
API:<br> I coded an API with GO-lang that listens  to online https requests from the internet which are encrypted end-to-end utilizing a Cloudflared system daemon and DNS.<br>
<br><br>
here is a simple API written in Go: 

```go
   package main
    //all the below imports are included in default go installation
    import (
        "fmt"
        "log"
        "net/http"
    )

    //this will be the response when you trigger the api
    func handler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, dear Commerzbank reviewer!")
    }

    func main() {
        http.HandleFunc("/", handler) // sets the handler for the root path
        log.Println("Starting server on :8080...")
        err := http.ListenAndServe(":8080", nil) // listens on port 8080
        if err != nil {
            log.Fatal("ListenAndServe: ", err)
        }
    }

// you may now trigger your api by engaging with http://localhost:8080 
```
<br>
<br>
Cloud:<br> While cloud is just someone else’s computer, I have explored the dashboards of GCP and Azure and can bring a three tier application online on both, with a serverless or VM instance of a database (NoSQL or PostgreSQL).<br><br>
AI & LLM:<br> I I have a burning interest in AI and machine learning – and have built my personal AI web chat which I serve from a locally built server that I brough online through my university network. <br>

<br>These are all topics I have explored by myself, as I have a passion for building software.
  
<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

#### Ethics <br>
I have gathered previous experience during my studies in digital compliance at a Big4, so I am aware and believe it imperative how carefully sensitive data is to be handled – and this I saw reflected very deeply at Commerzbank’s data flows infrastructure during my first internship at your institution. <br><br>
Not just in data flows, at Commerzbank I was impressed by the ethical considerations of your organization in every aspect of conducting business – dealing with customers, trainings, working conditions, and the opportunities your employees have in progression, and to learn. I sincerely hope to continue my career at Commerzbank.<br>

<br>
<div style="height: 1px; width: min(800px, 100%); padding: 0 5px; box-sizing: border-box; background-color: lightgray;"></div>
<br>

# Thank you for your consideration of my application.

<br>
<br>

<i>e-mail: gregor.mihelac (at) outlook (dot) com
<br>
linkedin: [in/gregormihelac](https://www.linkedin.com/in/gregormihelac/)
<br>

<br>
<br><br>
<br><br>
<br>



Bonus: the JS effect on the [front page](https://gregormihelac.com/cb-application) of my applciation. You may use it as you wish under the conditions of the [MIT License](https://github.com/gregecmaregec/gregecmaregec.github.io/blob/master/LICENSE)


<br>

<script src="{{ site.baseurl }}/assets/js/nature_cb.js"></script>

<br>

```javascript
// crystal-nature simulation
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// define the target size
const TARGET_WIDTH = 861;
const TARGET_HEIGHT = 315;

// function to set canvas size
function setCanvasSize() {
    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;

    // set CSS to make canvas responsive
    canvas.style.width = '100%';
    canvas.style.maxWidth = `${TARGET_WIDTH}px`;
    canvas.style.height = 'auto';
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';
}

// call the function initially and on window resize 
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// particle system
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 1 - 0.2) * 0.1;
        this.speedY = (Math.random() * 1 - 0.2) * 0.1;
        // approximate commerzbank colors, not exact
        const colors = ['#00414c', '#00413c', '#ffe907', '#e5a800'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.lifespan = 300 + Math.random() * 200;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.lifespan--;

        if (this.size > 0.2 && this.lifespan < 100) this.size -= 0.02;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particles = [];
const mouse = { x: null, y: null, radius: 150 };

function createParticles() {
    if (particles.length < 75) {
        particles.push(new Particle(
            Math.random() * TARGET_WIDTH,
            Math.random() * TARGET_HEIGHT
        ));
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        if (particles[i].size <= 0.2 || particles[i].lifespan <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
    handleParticles();
    createParticles();
    requestAnimationFrame(animate);
}

// below makes particles when you hover with mouse 
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = TARGET_WIDTH / rect.width;
    const scaleY = TARGET_HEIGHT / rect.height;

    mouse.x = (event.clientX - rect.left) * scaleX;
    mouse.y = (event.clientY - rect.top) * scaleY;

        for (let i = 0; i < 1; i++) {
            particles.push(new Particle(mouse.x, mouse.y));
        }
});

animate();
```

<br>
<br>