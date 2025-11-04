
for (let i = 1; i <= 500; i++ ){
let firstH1 = document.createElement("h1")
firstH1.innerHTML = i + "Hello World!"
firstH1.style.color = 'red'
document.body.appendChild(firstH1)
// document.body.removeChild(firstH1)
}

let alltheFirstWannaBe = document.querySelectorAll("#wanna-first")
alltheFirstWannaBe[0].style.color = "red"
alltheFirstWannaBe[0].style.fontSize = "20px"
alltheFirstWannaBe[1].style.color = "gold"
alltheFirstWannaBe[1].style.fontSize = "40px"
 

