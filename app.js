let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//winning Pattern arrey
let winningPattern = [
[0,1,2],
[0,3,6], 
[2,5,8], 
[6,7,8], 
[3,4,5], 
[1,4,7],
[0,4,8], 
[2,4,6],
];

//player 'x' plays first
let xTurn = true;
let count = 0;

//disable all buttons 
const disableButtons=() =>{
 btnRef.forEach((element)=> (element.disabled = true));
 
 popupRef.classList.remove("hide");
};

//enable all buttons (for new game and restart)
const enableButtons  = () =>{
 btnRef.forEach(element =>{
  element.innerText = "";
  element.disabled =false;
 });
 //disable popup
 popupRef.classList.add("hide");
};
//this function is executed when player wins
const winFunction =(letter) =>{
 disableButtons ();
 if(letter == "x"){
  msgRef.innerHTML= " 👑 x wins";
 }
 else{
   msgRef.innerHTML= " 👑 o wins";

 }
};

//funtion for draw
const drawFunction = () =>{
 disableButtons();
 msgRef.innerHTML= " 🤝 it's a draw";

 
 
}


//new game
newgameBtn.addEventListener("click",() =>{
 count = 0;
 enableButtons();
});
restartBtn.addEventListener("click",() =>{
 count = 0;
 enableButtons();
});


//win logic
const winChecker = () =>{
 //loop through all winpatterns 
 for(let i of winningPattern){
  let[element1,element2,element3 ] =[
   btnRef[i[0]] .innerText,
   btnRef[i[1]] .innerText,
   btnRef[i[2]] .innerText,
  ];
  
  //check if elements are filled 
  //if 3 empty elements  are same and would give win as would 
  if(element1 != "" && element2 != "" & element3 != ""){
   if(element1 == element2 && element2 == element3){
    //if all 3 buttons have same values then pass the value to winFunction
    winFunction(element1);
    
   }
  }
 }
};


//display x/o on click 
btnRef.forEach((element) =>{
 element.addEventListener("click",() => {
  if (xTurn){
  xTurn =false; 
  
  //display x
  element.innerText = "x";
  element.disabled = true;
  
  }  else{
   xTurn =true;
   //display o
   element.innerText ="o";
   element.disabled = true;
  }
  //increment count on each click
  count +=1;
  if (count == 9){
   drawFunction ();
  }
  
  //check for one win every click
  winChecker();
 });
});
//enable buttons and disable popup on page load
window.onload = enableButtons;