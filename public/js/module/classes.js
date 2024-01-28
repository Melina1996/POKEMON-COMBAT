
export class Player{
    constructor(name,healthPoints,attackPoints,attackNames,img){
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.attackNames = attackNames;
        this.img = img;
    }
} 

//my Bosses: extend class "Player" and add respective methods for the attacks
 
export class Charmeleon extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,img){
    super(name,healthPoints,attackPoints,attackNames,img);
    }

    firstAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 0.5*this.attackPoints
    }

    secondAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 1*this.attackPoints
    }

    thirdAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 2*this.attackPoints
    }

    fourthAttack(){
        this.healthPoints += 30
        document.querySelector("#healing-pokemon-audio").play()

        if(this.healthPoints > 150){
            this.healthPoints = 150
        }
        console.log(`${this.name} gained 30 HP and has now ${this.healthPoints}`)
    }
}


export class Venusaur extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,img){
    super(name,healthPoints,attackPoints,attackNames,img);
    }

    firstAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 0.5*this.attackPoints
    }

    secondAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= this.attackPoints
    }

    thirdAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 2*this.attackPoints
    }

    fourthAttack(){
        this.healthPoints += 40
        document.querySelector("#healing-pokemon-audio").play()

        if(this.healthPoints > 140){
            this.healthPoints = 140
        }
        console.log(`${this.name} gained 30 HP and has now ${this.healthPoints}`)

    }
}

export class Blastoise extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,img){
    super(name,healthPoints,attackPoints,attackNames,img);
    }

    firstAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 0.5*this.attackPoints
    }

    secondAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= this.attackPoints
    }


    thirdAttack(opponent){
        document.querySelector("#strike-pokemon-audio").play()
        opponent.healthPoints -= 2*this.attackPoints
    }

    fourthAttack(){
        this.healthPoints += 20
        document.querySelector("#healing-pokemon-audio").play()

        if(this.healthPoints > 120){
            this.healthPoints = 120
        }
        console.log(`${this.name} gained 30 HP and has now ${this.healthPoints}`)
    }
}

//my Heros: extend class "Player" and add respective methods for the attacks

export class Mario extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,img,stars){
    super(name,healthPoints,attackPoints,attackNames,img);
    this.stars = stars;
    }

    firstAttack(opponent){
        document.querySelector("#strike-audio").play()
        opponent.healthPoints -= this.attackPoints
    }

    secondAttack(opponent){
        document.querySelector("#strike-audio").play()
        opponent.healthPoints -= 2*this.attackPoints
    }


    thirdAttack(opponent){
        if(this.stars >= 2){
            document.querySelector("#strike-audio").play()
            opponent.healthPoints -= 3*this.attackPoints
            this.stars -=2
        } 

    }

    fourthAttack(){
        document.querySelector("#recover-audio").play()
        this.healthPoints += 20
        if(this.healthPoints > 120){
            this.healthPoints = 120
        }
        console.log(`${this.name} gained 30 HP and has now ${this.healthPoints}`)

    }
}

export class Peach extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,img,stars){
    super(name,healthPoints,attackPoints,attackNames,img);
    this.stars = stars;
    }

    firstAttack(opponent){
        document.querySelector("#strike-audio").play()
        opponent.healthPoints -= this.attackPoints
    }

    secondAttack(opponent){
        document.querySelector("#strike-audio").play()
        opponent.healthPoints -= 2*this.attackPoints
    }


    thirdAttack(opponent){
        if(this.stars >= 2){
            document.querySelector("#strike-audio").play()
            opponent.healthPoints -= 3*this.attackPoints
            this.stars -=2
        }

    }

    fourthAttack(){
        document.querySelector("#recover-audio").play()
        this.healthPoints += 20
        if(this.healthPoints > 140){
            this.healthPoints = 140
        }
        console.log(`${this.name} gained 30 HP and has now ${this.healthPoints}`)

    }
}