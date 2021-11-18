const cross = {
  "0": {
    top: true,
    right: true,
    left: true,
    bottom: true,
    center: true,
  },
  "180": {
    top: true,
    right: true,
    left: true,
    bottom: true,
    center: true,
  }

};
const bigT = {
  "0": {
    top: false,
    right: true,
    left: true,
    bottom: true,
    center: true,
  },
  "180": {
    top: true,
    right: true,
    left: true,
    bottom: false,
    center: true,
  }
};
const thinT = {
  "0": {
    top: true,
    right: true,
    left: false,
    bottom: true,
    center: true,
  },
  "180": {
    top: true,
    right: false,
    left: true,
    bottom: true,
    center: true,
  }
};
const horizontal = {
  "0": {
    top: false,
    right: true,
    left: true,
    bottom: false,
    center: true,
  },
  "180": {
    top: false,
    right: true,
    left: true,
    bottom: false,
    center: true,
  }
};
const straight = {
  "0": {
    top: true,
    right: false,
    left: false,
    bottom: true,
    center: true,
  },
  "180": {
    top: true,
    right: false,
    left: false,
    bottom: true,
    center: true,
  }
};
const downRight = {
  "0": {
    top: false,
    right: true,
    left: false,
    bottom: true,
    center: true,
  },
  "180": {
    top: true,
    right: false,
    left: true,
    bottom: false,
    center: true,
  }
};
const upRight = {
  "0": {
    top: true,
    right: true,
    left: false,
    bottom: false,
    center: true,
  },
  "180": {
    top: false,
    right: false,
    left: true,
    bottom: true,
    center: true,
  }
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
    "0": {
      top: true,
      right: true,
      left: true,
      bottom: true,
      center: false,
    },
    "180": {
      top: true,
      right: true,
      left: true,
      bottom: true,
      center: false,
    }
  },
  33: {
    "0": {
      top: true,
      right: false,
      left: false,
      bottom: true,
      center: false,
    },
    "180": {
      top: true,
      right: false,
      left: false,
      bottom: true,
      center: false,
    }
  },
  34: {
    "0": {
      top: false,
      right: false,
      left: true,
      bottom: true,
      center: false,
    },
    "180": {
      top: true,
      right: true,
      left: false,
      bottom: false,
      center: false,
    }
  },
  35: {
    "0": {
      top: true,
      right: true,
      left: false,
      bottom: false,
      center: false,
    },
    "180": {
      top: false,
      right: false,
      left: true,
      bottom: true,
      center: false,
    }
  },
  36: {
    "0": {
      top: true,
      right: false,
      left: true,
      bottom: true,
      center: false,
    },
    "180": {
      top: true,
      right: true,
      left: false,
      bottom: true,
      center: false,
    }
  },
  37: {
    "0": {
      top: false,
      right: true,
      left: true,
      bottom: false,
      center: false,
    },
    "180": {
      top: false,
      right: true,
      left: true,
      bottom: false,
      center: false,
    }
  },
  38: {
    "0": {
      top: true,
      right: false,
      left: true,
      bottom: false,
      center: false,
    },
    "180": {
      top: false,
      right: true,
      left: false,
      bottom: true,
      center: false,
    }
  },
  39: {
    "0": {
      top: false,
      right: true,
      left: false,
      bottom: false,
      center: false,
    },
    "180": {
      top: false,
      right: false,
      left: true,
      bottom: false,
      center: false,
    }
  },
  40: {
    "0": {
      top: false,
      right: false,
      left: false,
      bottom: true,
      center: false,
    },
    "180": {
      top: true,
      right: false,
      left: false,
      bottom: false,
      center: false,
    }
  },
};


function CheckPosition(blockid, cardData) {
  const blockidArray = blockid.match(/\d/g);
  const row = blockidArray[0];
  const column = blockidArray[1];

  const topBlockId = `block${row - 1}-${column}`;
  const rightBlockId = `block${row}-${column - -1}`;
  const leftBlockId = `block${row}-${column - 1}`;
  const bottomBlockId = `block${row - -1}-${column}`;

  const target_Top = $(".redborder").attr("top");
  const target_Right = $(".redborder").attr("right");
  const target_Left = $(".redborder").attr("left");
  const target_Bottom = $(".redborder").attr("bottom");

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
    return false;
  }
  printNewCard();
  putCardToServer(cardData);
  return true;
}
