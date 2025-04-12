 let boxes=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#reset");
 let newGamebtn=document.querySelector("#new");
 let msgContainer=document.querySelector(".msgContainer");
 let msg=document.querySelector("#msg");

 let board = ["","","","","","","","",""]
 let player = "O";
 let ai = "X";
 let gameActive = true;


const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

boxes.forEach((box,index)  => {
    box.addEventListener("click",()=>{
        if(board[index]===""&& gameActive){
            board[index]=player;
            box.innerText=player;
            box.diabled = true;

            if (checkWinner(player)) return;
            setTimeout(aiMove,300);
        }

    });
});
function aiMove(){
    if(!gameActive) return;
    let emptyIndexes = board.map((val , i) =>val ===""? i: null).filter(i =>i !== null);
    if(emptyIndexes.length===0) return;
    
    let randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    board[randomIndex]= ai;
    boxes[randomIndex].innerText=ai;
    boxes[randomIndex].diabled=true;
    checkWinner(ai);

}
function checkWinner(currentPlayer){
    for(let pattern of winPattern){
        let [a,b,c]=pattern;
        if (board[a]&&board[a]===board[b]&& board[a]===board[c]){
            gameActive=false;
            showWinner(currentPlayer);
            return true;
        }
    }
    if (!board.includes("")){
        gameActive=false;
        showDraw();
        return true;
    }
    return false;
}
function showDraw(){
    msg.innerText= "Its a draw!";
    msgContainer.classList.remove("hide");
}
function resetGame(){
    board=["","","","","","","","","",];
    gameActive=true;
    boxes.forEach((box )=>{
        box.innerText="";
        box.diabled=false;

    });
    msgContainer.classList.add("hide");
}
function showWinner(winner){
    msg.innerText =`Congratulations! WInner is ${winner}`;
    msgContainer.classList.remove("hide");
}
 

 newGamebtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);