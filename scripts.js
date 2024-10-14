 console.log("Welcome to Make It Go Viral!");
document.getElementById('ask-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const responseOutput = document.getElementById('response-output');

    if (userInput.trim() === "") {
        responseOutput.textContent = "Please enter a question or request.";
        return;
    }

    // Placeholder for actual AI API call (replace with your AI API)
    responseOutput.textContent = "AI Copilot: " + generateFakeResponse(userInput);
});

function generateFakeResponse(input) {
    const responses = [
        "That's a great idea! You should go ahead with it.",
        "I suggest you improve this by adding more details.",
        "Consider collaborating with others to enhance your content.",
        "This looks good. You can publish it!"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}
