---
layout: page_cb_subpage
title: Motivation
description:  Do my passions fit?
img: assets/img/cb/cb-3.jpg
importance: 4
nav: true
category: cb
---



#### Drive <br>
My two biggest interests are <u>finance</u> and <u>technology.</u>  This traineeship combines them very well. 

<br>
<br>

#### Curiosity <br>

From the trineeship description: 
<br>

Jira: I have experience from previous working positions, namely customer support at Nova KBM, where requests for resolutions to various departments were made using the platform<br><br>
Git: I held a intro to git/GitHub with the Google Developer Groups, as a developer, Git is a must-have.<br><br>
CI/CD: I utilize GitHub actions with the CI/CD pipelines for my website to prevent broken deployment into production with .yaml files.<br><br>
API: I coded an API with GO-lang that listens  to online https requests from the internet which are encrypted end-to-end utilizing a Cloudflared system daemon and DNS.<br>
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
        fmt.Fprintf(w, "Hello, this is a response from your Go API!")
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

Cloud: While cloud is just someone else’s computer, I have explored the dashboards of GCP and Azure and can bring a three tier application online on both, with a serverless or VM instance of a database (NoSQL or PostgreSQL).<br><br>
AI & LLM: I I have a burning interest in AI and machine learning – and have built my personal AI web chat which I serve from a locally built server that I brough online through my university network. <br><br>

<br>are all topics I have explored by myself (except Jira, with which ), as I have a passion for building software.
  
<br>
<br>

#### Ethics <br>
I have gathered previous experience during my studies in digital compliance at a Big4, so I am aware and believe it imperative how carefully sensitive data is to be handled – and this I saw reflected very deeply at Commerzbank’s data flows infrastructure during my first internship at your institution. <br>
Not just in data flows, at Commerzbank I was impressed by the ethical considerations of your organization in every aspect of conducting business – dealing with customers, trainings, working conditions, and the opportunities your employees have in progression, and to learn. I sincerely hope to continue my career at Commerzbank.<br>



Thank you for your consideration of my application.
