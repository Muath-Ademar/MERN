class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }

    showStat(){
        console.log("Name:" + this.name + "Health:" + this.health + "Strength:" + this.strength + "Speed:" + this.speed);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensi extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const sake = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}

const sensi =new Sensi("Kakashi");
sensi.speakWisdom()
sensi.showStat();