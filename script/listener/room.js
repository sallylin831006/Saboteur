function joinRoomListener(data) {
    data = JSON.parse(data);
    if (data.is_end == true) {
        return;
    }
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
    renderCards(roomInfo.players[getNickName()])
}

function getDeleteBlock(data) {
    data = JSON.parse(data);
    const roomInfo = data.room;
    renderDeleteBlockId(data.deleteBlockId);
    changePlayerToMove(roomInfo)
    renderPlayer(roomInfo.turn, roomInfo);
    renderCards(roomInfo.players[getNickName()])
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

function inviteNewGame(data) {
    data = JSON.parse(data);
    const roomId = data.roomId;
    renderNewGameRoomId(roomId);   
}
