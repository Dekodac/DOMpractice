console.log("Hello I'm connected");

let currentTurn = "x";



const evaluateWinner = (id) =>{
  let winner = '';
if (currentTurn === 'x' ){
 winner = 'o'
}
else{
  winner = 'x'
}

if (document.getElementById("1").innerText === winner && document.getElementById("2").innerText === winner  && document.getElementById("3").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("4").innerText === winner && document.getElementById("5").innerText === winner  && document.getElementById("6").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("7").innerText === winner && document.getElementById("8").innerText === winner  && document.getElementById("9").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("1").innerText === winner && document.getElementById("4").innerText === winner  && document.getElementById("7").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("2").innerText === winner && document.getElementById("5").innerText === winner  && document.getElementById("8").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("3").innerText === winner && document.getElementById("6").innerText === winner  && document.getElementById("9").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("1").innerText === winner && document.getElementById("5").innerText === winner  && document.getElementById("9").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
if (document.getElementById("3").innerText === winner && document.getElementById("5").innerText === winner  && document.getElementById("7").innerText === winner ) {
  return alert(`${winner} wins this game.`)
}
}

const makeASelection = (id) => {

  if (document.getElementById(id).innerText){
    alert('ALREADY SELECTED;; SELECT ANOTHER SQUARE')
    
  }
  else{
    console.log(id, currentTurn);
    document.getElementById(id).innerText = currentTurn
    
    if (currentTurn === 'x'){
      currentTurn = "o"
    }
    else {currentTurn = 'x' }
  }
  evaluateWinner(id)
  
};
