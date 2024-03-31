let boxes =document.querySelectorAll(".box")
let turnx = true;// player
let boxtext = document.querySelectorAll(".boxtext")
let msg = document.querySelector(".msg")
let msgC = document.querySelector(".msg-container")
let resetbtn = document.querySelector(".btn-reset");
let newbtn = document.querySelector(".new-btn");
let img = document.querySelector(".imgbox")
let r = document.querySelector(".r")
let music = new Audio("ting.mp3.mp3")
let winMusic = new Audio("winner.mp3")
let newGame = new Audio("new.mp3")



const winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
const resetGame = () => {
    turnx= true;
    enableBoxes();
    msgC.classList.add("hide");
    img.classList.add("hide");
    r.classList.remove("hide")
    msg.classList.add("hide")
    newGame.play();
    
}
const showWinner = (winner)=> {
    winMusic.play();
    msg.innerText = `congratulation winner is ${winner}`
    msgC.classList.remove("hide")
    img.classList.remove("hide")
    r.classList.add("hide")
    disabledBoxes();
    

    
}
const winnerCheck = ()=>{
   for ( pattern of winnerPattern){
let pos1Val = boxes[pattern[0]].innerText
let pos2Val = boxes[pattern[1]].innerText
let pos3Val = boxes[pattern[2]].innerText
    

    function win() {
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("winner")
                showWinner(pos1Val);

            }
        }

    }
    win();
    let draw = win();
   } ;
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("welcome to tic")
        if(turnx){
            box.textContent = "X"
            turnx = false; 
            music.play();

        }
        else {
            box.textContent = "O"
            music.play();
            turnx = true;
            

            
        }
        box.disabled = true;
        winnerCheck();
    })
});



const disabledBoxes = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for( let box of boxes){
        box.disabled= false;
        box.innerText= ""
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);