
export class Player{
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.attackNames = attackNames;
        this.backImg = backImg;
        this.frontImg = frontImg;
    }
} 

//my Bosses: extend class "Player" and add respective methods for the attacks
 
export class Charmeleon extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(opponent){
        opponent.healthPoints -= this.attackPoints
        console.log(opponent.healthPoints)
    }

    secondAttack(opponent){
        opponent.healthPoints -= 2*this.attackPoints
        console.log(opponent.healthPoints)

    }

    thirdAttack(opponent){
        opponent.healthPoints -= 3*this.attackPoints
        console.log(opponent.healthPoints)

    }

    fourthAttack(){
        this.healthPoints += 30
        if(this.healthPoints > 150){
            this.healthPoints = 150
        }
        console.log(this.healthPoints)

    }
}


export class Venusaur extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(opponent){
        opponent.healthPoints -= this.attackPoints
        console.log(opponent.healthPoints)

    }

    secondAttack(opponent){
        opponent.healthPoints -= 2*this.attackPoints
        console.log(opponent.healthPoints)

    }

    thirdAttack(opponent){
        opponent.healthPoints -= 3*this.attackPoints
        console.log(opponent.healthPoints)

    }

    fourthAttack(){
        this.healthPoints += 40
        if(this.healthPoints > 140){
            this.healthPoints = 140
        }
        console.log(this.healthPoints)

    }
}

export class Blastoise extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(opponent){
        opponent.healthPoints -= this.attackPoints
        console.log(opponent.healthPoints)

    }

    secondAttack(opponent){
        opponent.healthPoints -= 2*this.attackPoints
        console.log(opponent.healthPoints)
    }


    thirdAttack(opponent){
        opponent.healthPoints -= 3*this.attackPoints
        console.log(opponent.healthPoints)

    }

    fourthAttack(){
        this.healthPoints += 20
        if(this.healthPoints > 120){
            this.healthPoints = 120
        }
        console.log(this.healthPoints)

    }
}

//my Heros: extend class "Player" and add respective methods for the attacks

export class Mario extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(opponent){
        opponent.healthPoints -= this.attackPoints
        console.log(opponent.healthPoints)

    }

    secondAttack(opponent){
        opponent.healthPoints -= 2*this.attackPoints
        console.log(opponent.healthPoints)
    }


    thirdAttack(opponent){
        opponent.healthPoints -= 3*this.attackPoints
        console.log(opponent.healthPoints)

    }

    fourthAttack(){
        this.healthPoints += 20
        if(this.healthPoints > 120){
            this.healthPoints = 120
        }
        console.log(this.healthPoints)

    }
}

export class Peach extends Player {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(opponent){
        opponent.healthPoints -= this.attackPoints
        console.log(opponent.healthPoints)

    }

    secondAttack(opponent){
        opponent.healthPoints -= 2*this.attackPoints
        console.log(opponent.healthPoints)
    }


    thirdAttack(opponent){
        opponent.healthPoints -= 3*this.attackPoints
        console.log(opponent.healthPoints)

    }

    fourthAttack(){
        this.healthPoints += 20
        if(this.healthPoints > 140){
            this.healthPoints = 140
        }
        console.log(this.healthPoints)

    }
}