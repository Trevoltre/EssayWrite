// Chat functionality between client and writer
const messages = [
    { sender: "Client", message: "Hi, I need an update on my essay." },
    { sender: "Writer", message: "Sure, I'm almost done with the first draft!" },
];

// Load chat messages dynamically
function loadChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = ""; // Clear existing messages

    messages.forEach(msg => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(msg.sender === "Client" ? "client-msg" : "writer-msg");
        msgDiv.textContent = `${msg.sender}: ${msg.message}`;
        chatBox.appendChild(msgDiv);
    });
}

// Handle sending a new message
function sendMessage() {
    const input = document.getElementById("chatInput");
    if (input.value.trim() !== "") {
        messages.push({ sender: "Client", message: input.value });
        input.value = "";
        loadChat(); // Refresh the chat
    }
}

// Add event listeners
document.addEventListener("DOMContentLoaded", loadChat);
document.getElementById("sendBtn").addEventListener("click", sendMessage);
