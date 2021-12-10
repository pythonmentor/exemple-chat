const url = `ws://${ window.location.host }/ws/chat/room/`;

const chatSocket = new WebSocket(url);

chatSocket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    const datetime = new Date(data['datetime']).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
    console.log(datetime);

    const chat = document.querySelector('#chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(data.source);
    messageElement.innerHTML = '<strong class="username"></strong> <span class="date"></span><br><span class="chat-message"></span>';

    const username = messageElement.querySelector('.username');
    const date = messageElement.querySelector('.date');
    const chatMessage = messageElement.querySelector('.chat-message');

    username.textContent = `@${data.name}`;
    date.textContent = datetime;
    chatMessage.textContent = `> ${data.message}`;

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


