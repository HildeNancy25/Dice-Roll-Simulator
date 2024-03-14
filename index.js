const buttonElement =document.getElementById("roll-button");
const diceEl =document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
// buttonElement.addEventListener("click",() =>{
//     diceEl.classList.add("roll-animation");
//    setTimeout(()=>{diceEl.classList.add("roll-animation");},1000);
// });

let historyList =[];
function rolldice() {
    const rollresult = Math.floor(Math.random() * 6);
    const diceFace = getDiceFace(rollresult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollresult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML="  ";
    for( let i = 0 ; i < historyList.length ; i++){
        if (i <5){
            const listItem = document .createElement("li");
            listItem.innerHTML = `Roll ${i+1}: <span> ${getDiceFace(historyList[i])}</span>`;
            rollHistoryEl.appendChild(listItem);
        }
    }
}

function getDiceFace(rollresult){
    switch (rollresult) {
      case 1:
          return " &#9856;";
      case 2:
          return " &#9857;";
      case 3:
          return "&#9858;";
      case 4:
          return "&#9859";
      case 5:
          return "&#9860";
      default:
          return "&#9861";
    }
  }

  buttonElement.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(() =>{
    diceEl.classList.remove("roll-animation");
    rolldice();
    }, 1000);
  });
  
  
  
  
  
  
  
  
  
  