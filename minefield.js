const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
};
var TOTAL_MINES = 0;
var board = [];
var row = [];
var boardSizex = 0;
var boardSizey = 0;
var totaltiles = 0;
var minePositions = [];
var positions = [];
var mfgameon = false;
function createBoardclick() {

    if (!mfgameon) {

        var x = parseInt(document.getElementById("mfxrange").value);
        var y = parseInt(document.getElementById("mfyrange").value);
        var m = parseInt(document.getElementById("mfmrange").value);

        m = parseInt((x * y) * (m / 100));


        if (m >= x * y) {
            var c = confirm("I'm not judging but you have " + (x * y) + " tiles and they are all mines. Is that you rolling?");
            if (c) { m = x * y; } else { return; }
        }

        createBoard(x, y, m);
    }
    document.getElementById("minepop").style.display = "flex";

}
//https://www.youtube.com/watch?v=kBMnD_aElCQ
function createBoard(boardSizex, boardSizey, numMines) {
    board = [];
    TOTAL_MINES = numMines;
    totaltiles = boardSizex * boardSizey;
    minePositions = getMinePositions(boardSizex, boardSizey, numMines);
    for (let x = 0; x < boardSizex; x++) {
        row = [];
        for (let y = 0; y < boardSizey; y++) {
            var element = document.createElement("div");
            element.dataset.status = TILE_STATUSES.HIDDEN;

            var tile = {
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null, { x, y })),
                get status() {
                    return this.element.dataset.status;
                },
                set status(value) {
                    this.element.dataset.status = value;
                }
            };
            row.push(tile);
        }
        board.push(row);
    }

    renderBoard(boardSizex, boardSizey, board);
    mfgameon = true;
}
function getMinePositions(boardSizex, boardSizey, numMines) {

    positions = [];
    while (positions.length < numMines) {
        const position = {
            x: getRandomInt(boardSizex),
            y: getRandomInt(boardSizey)
        };

        if (!positions.some(positionMatch.bind(null, position))) {
            positions.push(position);
        }

    }
    return positions;
}
function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y;
}
function renderBoard(boardSizex, boardSizey, board) {

    boardElement = document.getElementById("mfboard");
    boardElement.innerHTML = "";

    board.forEach(row => {
        row.forEach(tile => {
            boardElement.append(tile.element);
            tile.element.addEventListener("click", () => {
                revealtile(tile);
            });
            tile.element.addEventListener("contextmenu", e => {
                e.preventDefault();
                marktile(tile);
            });
        });
    });

    boardElement.style.setProperty("--sizex", boardSizex);
    boardElement.style.setProperty("--sizey", boardSizey);
}
function marktile(tile) {
    if (mfgameon) {
        if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED) {
            return;
        }
        if (tile.status === TILE_STATUSES.MARKED) {
            tile.status = TILE_STATUSES.HIDDEN;
            tile.element.textContent = "";
        } else {
            tile.status = TILE_STATUSES.MARKED;
            tile.element.textContent = emojify("RedFlag");

        }
    }
    CheckMFWin();
}
function revealtile(tile) {
    if (mfgameon) {
        if (tile.status !== TILE_STATUSES.HIDDEN) { return; }
        if (tile.mine) {
            popalert("You have lost the game!<br>You said the wrong thing! You got lots of Heat!<br>(Not that it does anything yet)");
            heat += 1000;
            tile.status = TILE_STATUSES.MINE;
            CheckMFLose();
            if (mfgameon) {
                mfgameon = false;
            }
            return;
        }

        tile.status = TILE_STATUSES.NUMBER;
        const neighbours = nearbytiles(tile.x, tile.y);
        const mines = neighbours.filter(t => t.mine);

        if (mines.length === 0) {
            neighbours.forEach(revealtile.bind(null));
            tile.element.textContent = emojify("Random");
        } else {
            tile.element.textContent = mines.length;
        }

    }
    CheckMFWin();
}
function nearbytiles(x, y) {
    const tiles = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            //			if (0 < y+yOffset <= boardSizey && 0 <x + xOffset <= boardSizex){
            var tile = board[x + xOffset]?.[y + yOffset];
            if (tile) { tiles.push(tile); }
            //				}
        }
    }

    return tiles;

}
function CheckMFWin() {
    var tt = totaltiles;
    for (let i = 0; i < board.length; i++) {
        var x = board[i];
        for (let j = 0; j < x.length; j++) {
            var tile = x[j];
            if (tile.status === TILE_STATUSES.NUMBER ||
                (tile.mine && (tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.MARKED))) {
                tt--;
                if (mfgameon && (tt === 0)) {
                    mfgameon = false;

                    //var n = getRandomInt(boardSizex*boardSizey-(TOTAL_MINES*9));
                    var n = Math.floor((board.length * board[1].length) / 100);
                    var m = parseInt(document.getElementById("mfmrange").value);
                    var rwrd = n * m;
                    var s = "Impressed by your manevouring some posters joined your Network;<br>";

                    for (let i = 0; i < rwrd; i++) {
                        var c = rewardposters[getRandomInt(rewardposters.length)];
                        //minefields with less 4% mines will add glowies silently
                        if (c.name == "Glowie" && m < 4) {
                            i--;
                            c.count++;
                        }
                        if (c.name != "Glowie") {
                            c.count++;
                            s += emojify(c.name);
                        }
                    }
                    popalert("You have won the game! <br>" + s);

                }
            }
        }
    }

}
function CheckMFLose() {
    for (let i = 0; i < board.length; i++) {
        var x = board[i];
        for (let j = 0; j < x.length; j++) {
            if (x[j].mine) {
                revealtile(x[j]);
            }
        }
    }

}
