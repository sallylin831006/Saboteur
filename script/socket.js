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

socket.on("showRole", (data) => {
    showRole(data);
});

socket.on("startGame", (data) => {
    startGame(data);
});

socket.on("sendMessage", (data) => {
    sendMessage(data);
});
