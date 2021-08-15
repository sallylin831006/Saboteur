function joinRoomListener(data) {
    data = JSON.parse(data);
    renderPlayer(data.turn);
}

function initGame(data) {
    data = JSON.parse(data);
    const roomInfo = data.room;
    const myRole = roomInfo['players'][getNickName()]['team'] === '1' ? 'good' : 'bad';

    setRole(myRole);
}

function initError(data) {
    data = JSON.parse(data);
    alert(data.message);
}

function startGame() {
    window.location.href = `./playpage.html?room_id=${CURRENT_ROOM_ID}`;
}

function getRoomInfo(data) {
    data = JSON.parse(data);
    const roomInfo = data.room;
    renderBoard(roomInfo.board);
    changePlayerToMove(data.room)
}

function showRole(data) {
    data = JSON.parse(data);
    console.log(123);
    showRole();
} 

function sendMessage(data) {
    data = JSON.parse(data);
    const chatRecord = data.chatRecord;
    renderChatRecord(chatRecord);
}
