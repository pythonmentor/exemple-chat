const url = `ws://${ window.location.host }/ws/chat/room/`;

const chatSocket = new WebSocket(url);

chatSocket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    const message = data.message;
    const chat = document.querySelector('#chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chat.appendChild(messageElement);
    messageElement.scrollIntoView();
});

chatSocket.addEventListener('close', event => {
    console.error('La connexion au chat a été fermée de manière inattendue !');
});

const chatForm = document.querySelector('#chat-form');

chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const chatMessageInput = document.querySelector('#chat-message-input');
    const message = chatMessageInput.value;
    if (message) {
        // send message in json format
        chatSocket.send(JSON.stringify({'message': message}));
        // clean the chat input
        chatMessageInput.value = '';
        // put the focus on the chat message input
        chatMessageInput.focus();
    } 
});


