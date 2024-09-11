function sendMessage() {
    // Get the user input value
    var userInput = document.getElementById('user-input').value;

    // Send the user input to gmserver.xyz 
    fetch('https://gmserver.xyz', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (if needed)
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
