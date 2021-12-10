const url = 'ws://' + window.location.host + '/ws/chat/';

const chatSocket = new WebSocket(url);

chatSocket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    const message = data.message;
    var $chat = $('#chat');
    $chat.append('<div class="message">' + message + '</div>');
    $chat.scrollTop($chat[0].scrollHeight);
});

chatSocket.addEventListener('close', event => {
    console.error('Chat socket closed unexpectedly');
});
