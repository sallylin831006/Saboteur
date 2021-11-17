const socketUrl = getSocketUrl();
var socket = io(`${socketUrl}`);

socket.on("connect", () => {
    console.log("connected");
});

socket.on("disconnect", (reason) => {
    if (reason === "io client disconnect") {
        sendEvent('leave', {
            roomId: CURRENT_ROOM_ID,
            nickname: getNickName()
        })
    }
});

function sendEvent(eventName, data) {
    socket.emit(eventName, data);
}

socket.on("roomInfo", (data) => {
    joinRoomListener(data);
});

socket.on("getRoomInfo", (data) => {
    getRoomInfo(data);
});

socket.on("getDeleteBlock", (data) => {
    getDeleteBlock(data);
});

socket.on("recordLog", (data) => {
    recordLog(data);
});

socket.on("showRole", (data) => {
    showRole(data);
});

socket.on("initGame", (data) => {
    initGame(data);
});

socket.on("initError", (data) => {
    console.log('initError', data);
    initError(data);
});

socket.on("startGame", () => {
    startGame();
});

socket.on("sendMessage", (data) => {
    sendMessage(data);
});

socket.on("inviteNewGame", (data) => {
    inviteNewGame(data);
});
