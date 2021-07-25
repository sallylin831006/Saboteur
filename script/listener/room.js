function joinRoomListener(data) {
    data = JSON.parse(data);
    renderPlayer(Object.keys(data.players));
}

function startGame(data) {
    data = JSON.parse(data);
    window.location.href = `./playpage.html?room_id=${data.roomId}`
}

function showRole(data) {
    data = JSON.parse(data);
    showRole();
} 

function sendMessage(data) {
    data = JSON.parse(data);
    const chatRecord = data.chatRecord;
    renderChatRecord(chatRecord);
}
