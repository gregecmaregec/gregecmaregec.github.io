const data = {
    model: "mistral",
    messages: [
        {
            role: "user",
            content: "why is this?",
        },
        {
          "role": "assistant",
          "content": "due lao tzu."
        },
        {
            "role": "user",
            "content": "tell me more about this man?",
            options: {
                temperature: 0.6,
                num_thread: 8
            }
        }
    ]
};

fetch("https://gmserver.xyz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.text()) // Use response.text() to handle plain text
    .then(responseData => {
        console.log(responseData);
        // Display the response data here (as plain text)
    })
    .catch(error => {
        console.error(error);
        // Handle any errors here
    });
