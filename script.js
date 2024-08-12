function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'flex';
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}

function switchOverlay(closeOverlayId, openOverlayId) {
    closeOverlay(closeOverlayId);
    openOverlay(openOverlayId);
}




// Get the chat overlay element and buttons
const chatOverlay = document.getElementById('chat-overlay');
const chatButton = document.querySelector('.chat-button');
const closeButton = document.querySelector('.close-btn');
const sendMessageButton = document.getElementById('send-message');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.querySelector('.messages');

// Function to show the chat overlay
function showChatOverlay() {
    chatOverlay.style.display = 'flex';
}

// Function to hide the chat overlay
function hideChatOverlay() {
    chatOverlay.style.display = 'none';
}

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = messageText;

        // Add the message to the chat
        messagesContainer.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Event listeners
chatButton.addEventListener('click', showChatOverlay);
closeButton.addEventListener('click', hideChatOverlay);
sendMessageButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});



// Product for sell 
const openOverlayBtn = document.getElementById('openOverlay');
const closeOverlayBtn = document.getElementById('closeOverlay');
const overlay = document.getElementById('overlay');
const addBookForm = document.getElementById('addBookForm');

openOverlayBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
});

closeOverlayBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});





