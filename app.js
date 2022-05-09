const fishHead = document.getElementById('fishHead');
const fishBody1 = document.getElementById('fishBody1');
const fishBody2 = document.getElementById('fishBody2');
const fishBody3 = document.getElementById('fishBody3');
const fishBody4 = document.getElementById('fishBody4');
const fishBody5 = document.getElementById('fishBody5');
const fishTop = document.getElementById('fishTop');
const fishBottom = document.getElementById('fishBottom');
const fishTail = document.getElementById('fishTail');
fishHead.addEventListener('click', () => {    
    let fishHead = document.getElementById("colorFishHead")
    fishHead.addEventListener("click", () => {
        
    })
    changeColor(fishHead);
})
fishBody1.addEventListener('click', () => {
    alert("fishBody1")
})
fishBody2.addEventListener('click', () => {
    alert("fishBody2")
})
fishBody3.addEventListener('click', () => {
    alert("fishBody3")
})
fishBody4.addEventListener('click', () => {
    alert("fishBody4")
})
fishBody5.addEventListener('click', () => {
    alert("fishBody5")
})
fishTop.addEventListener('click', () => {
    alert("fishTop")
})
fishBottom.addEventListener('click', () => {
    alert("fishBottom")
})
fishTail.addEventListener('click', () => {
    alert("fishTail")
})

var colorWell;

function changeColor(obj) {
    colorWell = obj;
    console.log(colorWell)
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    //colorWell.select();
}

// 선택하는 동안 색 변경
function updateFirst(event) {
    var p = document.querySelector("p");
    console.log("ss")
    if (p) {
      p.style.color = event.target.value;
    }
  }

  // 선택이 끝난 후 닫혔을 때 색 변경
  function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }