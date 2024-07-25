class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name,cost, power, res){
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target){
        target.res-= this.power
    }

}

const RedBelt = new Unit("RedBelt", 3,3,4)
const BlackBelt = new Unit("BlackBelt", 4,5,4)
// RedBelt.attack(BlackBelt)








class Effect extends Card{
    constructor(name, cost,text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit && this.name == "Hard Algorithm"){
            target.cost-=this.cost
            target.res +=this.magnitude
            
        }
        else if(target instanceof Unit && this.name == "Unhandled Promise Rejection"){
            target.cost-=this.cost
            target.power+=this.magnitude
        }
        else if(target instanceof Unit && this.name == "Pair Programming"){
            target.cost-=this.cost
            target.power+= this.magnitude
        }
            
        else{
            throw new Error("target must be a unit!!");
        }
    }
}

const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
HardAlgo.play(RedBelt)
const unhandeled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2 )
unhandeled.play(RedBelt)
const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2 )
pair.play(RedBelt)
console.log("Name: " + RedBelt.name + ", ", "Cost: " + RedBelt.cost + ", ", "Power: " + RedBelt.power + ", ", "Res: " + RedBelt.res)
RedBelt.attack(BlackBelt)
console.log("Name: " + BlackBelt.name + ", ", "Cost: " + BlackBelt.cost + ", ", "Power: " + BlackBelt.power + ", ", "Res: " + BlackBelt.res)













