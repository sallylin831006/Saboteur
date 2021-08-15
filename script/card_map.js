const cross = {
  top: true,
  right: true,
  left: true,
  bottom: true,
};
const bigT = {
  top: false,
  right: true,
  left: true,
  bottom: true,
};
const thinT = {
  top: true,
  right: true,
  left: false,
  bottom: true,
};
const horizontal = {
  top: false,
  right: true,
  left: true,
  bottom: false,
};
const straight = {
  top: true,
  right: false,
  left: false,
  bottom: true,
};
const downRight = {
  top: false,
  right: true,
  left: false,
  bottom: true,
};
const upRight = {
  top: true,
  right: true,
  left: false,
  bottom: false,
};

var ROAD_DIRECTION_MAP = {
  1: cross,
  2: cross,
  3: cross,
  4: cross,
  5: cross,

  6: bigT,
  7: bigT,
  8: bigT,
  9: bigT,
  10: bigT,

  11: thinT,
  12: thinT,
  13: thinT,
  14: thinT,
  15: thinT,

  16: horizontal,
  17: horizontal,
  18: horizontal,
  19: horizontal,

  20: straight,
  21: straight,
  22: straight,

  23: downRight,
  24: downRight,
  25: downRight,
  26: downRight,

  27: upRight,
  28: upRight,
  29: upRight,
  30: upRight,
  31: upRight,

  32: {
    top: true,
    right: true,
    left: true,
    bottom: true,
  },
  33: {
    top: true,
    right: false,
    left: false,
    bottom: true,
  },
  34: {
    top: false,
    right: false,
    left: true,
    bottom: true,
  },
  35: {
    top: true,
    right: true,
    left: false,
    bottom: false,
  },
  36: {
    top: true,
    right: false,
    left: true,
    bottom: true,
  },
  37: {
    top: false,
    right: true,
    left: true,
    bottom: false,
  },
  38: {
    top: true,
    right: false,
    left: true,
    bottom: false,
  },
  39: {
    top: false,
    right: false,
    left: true,
    bottom: false,
  },
  40: {
    top: false,
    right: false,
    left: false,
    bottom: true,
  },
};


function CheckPosition(blockid, cardData) {
  const blockidArray = blockid.match(/\d/g);
  const row = blockidArray[0];
  const column = blockidArray[1];
  const targetBlock = blockid
  
  const topBlockId = `block${row - 1}-${column}`;
  const rightBlockId = `block${row}-${column - -1}`;
  const leftBlockId = `block${row}-${column - 1}`;
  const bottomBlockId = `block${row - -1}-${column}`;

  const target_Top = $(".redborder").attr("top");
  const target_Right = $(".redborder").attr("right");
  const target_Left = $(".redborder").attr("left");
  const target_Bottom = $(".redborder").attr("bottom");
  console.log(target_Top, target_Right, target_Left, target_Bottom);

  const Topblock_bottom = $(`.${topBlockId} img`).attr("bottom");
  const Rightblock_left = $(`.${rightBlockId} img`).attr("left");
  const Leftblock_right = $(`.${leftBlockId} img`).attr("right");
  const Bottomblock_top = $(`.${bottomBlockId} img`).attr("top");

  if (
    (target_Top == "true" && Topblock_bottom == "false") ||
    (target_Top == "false" && Topblock_bottom == "true") ||
    (target_Right == "true" && Rightblock_left == "false") ||
    (target_Right == "false" && Rightblock_left == "true") ||
    (target_Left == "true" && Leftblock_right == "false") ||
    (target_Left == "false" && Leftblock_right == "true") ||
    (target_Bottom == "true" && Bottomblock_top == "false") ||
    (target_Bottom == "false" && Bottomblock_top == "true") ||
    (Topblock_bottom == undefined &&
      Rightblock_left == undefined &&
      Leftblock_right == undefined &&
      Bottomblock_top == undefined)
  ) {
    alert("白癡喔不能這樣放辣");
    return;
  }
  printNewCard();
  putCardToServer(cardData);

}
