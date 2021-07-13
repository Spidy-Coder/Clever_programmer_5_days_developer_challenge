// array=["x","o","x","","","","","","",""]  index of 9 elements

//turn="o" or turn="x"

import Game from "./game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameview = new GameView();

document.querySelector(".restart")
.addEventListener("click",() => {
    onRestartClick(tile.dataset.index);
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) =>{
    tile.addEventListener("click",() =>{
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //make a move
    //change turn
    //update board
    game.makeMove(i);
    gameview.updateBoard(game);
   
    
}

function onRestartClick(){
    game = new Game();
    gameview.updateBoard(game);
}

