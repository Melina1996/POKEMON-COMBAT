
export class Pokemon{
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.attackNames = attackNames;
        this.backImg = backImg;
        this.frontImg = frontImg;
    }
} 

export class Charmeleon extends Pokemon {
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
        console.log(this.healthPoints)

    }
}


export class Venusaur extends Pokemon {
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
        console.log(this.healthPoints)

    }
}

export class Blastoise extends Pokemon {
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
        console.log(this.healthPoints)

    }
}

