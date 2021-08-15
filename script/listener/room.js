function joinRoomListener(data) {
    data = JSON.parse(data);
    const players = data.turn.length > 0 ? data.turn : Object.keys(data.players);
    renderPlayer(players, data);
}

function initGame(data) {
    data = JSON.parse(data);
    const roomInfo = data.room;
    const myRole = roomInfo['players'][getNickName()]['team'] == '1' ? 'good' : 'bad';

    setRole(myRole);
}

function initError(data) {
    data = JSON.parse(data);
    alert(data.message);
    if (data.redirect) {
        window.location.href = START_GAME_URL;
    }
}

function startGame() {
    window.location.href = `./playpage.html?room_id=${CURRENT_ROOM_ID}`;
}

function getRoomInfo(data) {
    data = JSON.parse(data);
    const roomInfo = data.room;
    renderBoard(roomInfo.board);
    changePlayerToMove(roomInfo)
    renderPlayer(roomInfo.turn, roomInfo);
}

function getDeleteBlock(data) {
    data = JSON.parse(data);
    console.log('dee', data);
    renderDeleteBlockId(data.deleteBlockId);
    changePlayerToMove(data.room)
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

function recordLog(data) {
    data = JSON.parse(data);
    const logs = data.logs;
    renderEventLogs(logs);
}
