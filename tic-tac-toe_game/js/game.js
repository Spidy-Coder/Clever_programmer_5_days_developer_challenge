

export default class Game{
    constructor(){
        
        this.turn = "X"
        this.board = new Array(9).fill(null);
        this.winner = null;
        
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        }
        else{
            this.turn = "X";
        }
    }

    makeMove(i){  //need index for decision making
        if(this.endOfGame){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombinations();
        if(!winningCombination){
            this.nextTurn();
        }else{
            this.winner = winningCombination[0];
        }
    }

    //combinations indices pair for a win
    //0,1,2
    //3,4,5
    //6,7,8
    //0,3,6
    //1,4,7
    //2,5,8
    //0,4,8
    //2,4,6
    findWinningCombinations(){
        const winningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(const combination of winningCombinations){
            const [a,b,c] = combination;
            if(this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }
        }
            return null;
        
        
    
        }

        endOfGame(){

            let winningComination = this.findWinningCombinations();
            if(winningComination){
                return true;
            }else{
                return false;
            }
        }
}
