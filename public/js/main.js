import * as INSTANCE from "./module/instances.js"
import * as FUNCTION from "./module/functions.js"


//ALL MY DISPLAYS

let startDisplay = document.querySelector(".start-display")


// START DISPLAY

let btnStart = document.querySelector(".start")


btnStart.addEventListener("click",()=>{
  startDisplay.classList.add("hide")
})

// CHOSE AVATAR

let firstBubble = document.querySelector(".first-speech-bubble")

let secondBubble = document.querySelector(".second-speech-bubble")

let thirdBubble = document.querySelector(".third-speech-bubble")

let btnNextOne = document.querySelector(".btn-next-chose-pokemon")

let btnNextTwo = document.querySelector(".btn-next-two")

let myPokemons = document.querySelector(".my-pokemons")

//screen is empty besides background-img and after 1.2s, the first bubble appears
setTimeout(function(){
  firstBubble.classList.remove("hide")
}, 1200)

//after 5s, the btn appears
setTimeout(function(){
  btnNextOne.classList.remove("hide")
}, 5000)

//on click, the next bubble appears and 5s delayed the next btn (the first bubble disappears)
btnNextOne.addEventListener("click",()=>{
  firstBubble.classList.add("hide")
  btnNextOne.classList.add("hide")
  secondBubble.classList.remove("hide")
  setTimeout(function(){
    btnNextTwo.classList.remove("hide")
  },5000)
})

//on click, the next bubble appears and 5s delayed the pokemons appear
btnNextTwo.addEventListener("click",()=>{
  secondBubble.classList.add("hide")
  btnNextTwo.classList.add("hide")
  thirdBubble.classList.remove("hide")
  setTimeout(function(){
    thirdBubble.classList.add("hide")
    myPokemons.classList.remove("hide")
  },5000)
})




