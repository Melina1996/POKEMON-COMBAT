import * as INSTANCE from "./module/instances.js"
import * as FUNCTION from "./module/functions.js"


//ALL MY DISPLAYS

let startDisplay = document.querySelector(".start-display")

let choseDisplay = document.querySelector(".chose-mario")

let darkDisplay = document.querySelector(".dark-screen")

let pokemonSurprise = document.querySelector(".pokemon-surprise")

let combatDisplay = document.querySelector(".battle-display")


//START DISPLAY

let btnStart = document.querySelector(".start")

btnStart.addEventListener("click",()=>{
  startDisplay.classList.add("hide")
  choseDisplay.classList.remove("hide")
})

//CHOSE MARIO CHARACTER DISPLAY

let firstBubble = document.querySelector(".first-speech-bubble")

let secondBubble = document.querySelector(".second-speech-bubble")

let thirdBubble = document.querySelector(".third-speech-bubble")

let btnNextOne = document.querySelector(".btn-next-chose-mario")

let btnNextTwo = document.querySelector(".btn-next-two")

let myMarios = document.querySelector(".my-marios")


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

//on click, the next bubble appears and 5s delayed the marios appear
btnNextTwo.addEventListener("click",()=>{

  secondBubble.classList.add("hide")

  btnNextTwo.classList.add("hide")

  thirdBubble.classList.remove("hide")

  setTimeout(function(){

    thirdBubble.classList.add("hide")

    myMarios.classList.remove("hide")

  },5000)

})


//TRANSITION CHOSE MARIO CHARACTER TO COMBAT DISPLAY

let allBtnMario = document.querySelectorAll(".mario-btn")

export let playerMario = document.querySelector("#player-mario")

let allMarios = [INSTANCE.peach,INSTANCE.mario]

let allPokemons = [INSTANCE.charmeleon,INSTANCE.venusaur,INSTANCE.blastoise]

export let chosenMario


allBtnMario.forEach(element => {

  element.addEventListener("click", (e) => {

    for (let i = 0; i < allMarios.length; i++) {

      if(e.target.innerText == allMarios[i].name){
        chosenMario = allMarios[i]

        FUNCTION.disappear(chosenMario)

        playerMario.src = allMarios[i].backImg

        //stock the value of the original HP in an attribute of my mario character
        playerMario.setAttribute("originalhp",`${allMarios[i].healthPoints}`)

        document.querySelector(".name-player").innerText = allMarios[i].name

        //need Timeout-function so the animation of the disappearing Mario/Peach has enough time
        setTimeout(function(){

          choseDisplay.classList.add("hide")

          darkDisplay.classList.remove("hide")

        }, 2000)
      

        FUNCTION.bubblesDarkRoom()

        setTimeout(function(){

          darkDisplay.classList.add("hide")

          pokemonSurprise.classList.remove("hide")

          setTimeout(function(){

            FUNCTION.opponents()

            setTimeout(function(){

              pokemonSurprise.classList.add("hide")

              combatDisplay.classList.remove("hide")

              FUNCTION.choseRandomBoss(allPokemons)

              FUNCTION.attackNames(chosenMario)

              FUNCTION.attack(chosenMario,FUNCTION.chosenBoss)

            },14000)

          },2000)

          

        },14000) 

      }
    }
  })
})


