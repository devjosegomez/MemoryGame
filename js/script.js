var titleImages = []
var startBtn = document.getElementById("start")

startBtn.addEventListener("click", startGame)

for(x = 1; x < 7; x++){
    titleImages.push(x+".jpg");
}

function startGame(){
    console.log("clicked")
}
