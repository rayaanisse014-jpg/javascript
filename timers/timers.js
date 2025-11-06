function sayMyName() {
console.log("hello "  +  "rayaan" )
}

// sayMyName("rayaan")
// setTimeout(sayMyName,5000)
 let timer = setInterval(sayMyName,1000)


setTimeout(function(){
clearInterval(timer)
},10000)

    

    
