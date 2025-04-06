 let boxes=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#reset");
 let newGamebtn=document.querySelector("#new");
 let msgContainer=document.querySelector(".msgContainer");
 let msg=document.querySelector("#msg");

  let turnO=true;

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
  const resebtn =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

  }

  const enableBoxes =() =>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
  }

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked" );
        if(turnO){
            box.innerText="O";
            turnO=false;

        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    });
});

const displayWinner =(Winner) =>{ 
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    
};

const checkWinner = ()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !=""&& pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                boxes.forEach((box)=>box.disabled=true);
            console.log("Winner",pos1); 
            displayWinner(pos1);
            }
        }


    }
}
 newGamebtn.addEventListener("click",resebtn);
 resetbtn.addEventListener("click",resebtn);