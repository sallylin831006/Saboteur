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
    right: true,
    left: false,
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

function CheckPosition(blockid) {
  const blockidArray = blockid.match(/\d/g);
  const row = blockidArray[0];
  const column = blockidArray[1];
  // console.log("hi",row,column);
  const targetBlock = blockid;
  const topBlockId = `block${row - 1}-${column}`;
  const rightBlockId = `block${row}-${column - -1}`;
  const leftBlockId = `block${row}-${column - 1}`;
  const bottomBlockId = `block${row - -1}-${column}`;

  const target_Top = $(`.${targetBlock} img`).attr("top");
  const target_Right = $(`.${targetBlock} img`).attr("Right");
  const target_Left = $(`.${targetBlock} img`).attr("Left");
  const target_Bottom = $(`.${targetBlock} img`).attr("Bottom");

  const Topblock_bottom = $(`.${topBlockId} img`).attr("bottom");
  const Rightblock_left = $(`.${rightBlockId} img`).attr("left");
  const Leftblock_right = $(`.${leftBlockId} img`).attr("right");
  const Bottomblock_top = $(`.${bottomBlockId} img`).attr("top");

  if (target_Top == false && Topblock_bottom == true) {
    $(".topcue").text("白癡喔不要亂放");
    alert("放置錯誤");
    return;
  }
  Cardput();

  console.log(
    "$(`.${targetBlock} img`).attr('top')=",
    $(`.${targetBlock} img`).attr("top")
  );
  console.log(
    "$(`.${targetBlock} img`).attr('right')=",
    $(`.${targetBlock} img`).attr("right")
  );
  console.log(
    "$(`.${targetBlock} img`).attr('left')=",
    $(`.${targetBlock} img`).attr("left")
  );
  console.log(
    "$(`.${targetBlock} img`).attr('bottom')=",
    $(`.${targetBlock} img`).attr("bottom")
  );

  console.log(
    " $(`.${topBlockId} img`).attr('bottom')=",
    $(`.${topBlockId} img`).attr("bottom")
  );
  console.log(
    "$(`.${rightBlockId} img`).attr('left')=",
    $(`.${rightBlockId} img`).attr("left")
  );
  console.log(
    "$(`.${leftBlockId} img`).attr('right')=",
    $(`.${leftBlockId} img`).attr("right")
  );
  console.log(
    "$(`.${bottomBlockId} img`).attr('top')=",
    $(`.${bottomBlockId} img`).attr("top")
  );
  console.log("test=", target_Top, Topblock_bottom);

  //target_Top上方判斷 可以的
  //if target_Top == false (bigT horizontal downRight 其他坑洞卡
  //&& Topblock_bottom == true
  //target_left == true && Leftblock_right == true
  //or
  //target_right == true && Rightblock_left == true

  //target_Top上方判斷 不行的
  //if target_Top == false (bigT horizontal downRight 其他坑洞卡
  //&& Topblock_bottom == true -> return
  //&& Leftblock_right == false || Rightblock_left == false -> return
  //
  //

  //Topblock_bottom  == true

  //target_Top == true
  //Topblock_bottom  == true

  //target_right == true
  //Rightblock_left == true || undifined
  //or
  //target_right == false
  //Rightblock_left == undifined

  //target_left == true || false 都沒差
  //Leftblock_right == true || undifined

  //target_Bottom == true
  //Bottomblock_top == true || undifined
  //or
  //target_Bottom == false
  //Bottomblock_top == undifined

  //左方判斷
  //target_Top == true  || undifined
}
