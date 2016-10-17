class Mob {
  damage;
  name;
  level;
  hitpoints = 150;
  constructor (damage, name, level) {
    this.damage = damage;
    this.name = name;
    this.level = level;
  }
  doDamage(mob) {
    mob.hitpoints = mob.hitpoints - this.damage;
    console.log(this.name + "did" + this.damage + "to" + mob.name);
    console.log(mob.name + "now has " + mob.hitpoints + "left!");
  }
}

let firstMob = new Mob(10, "asdf", 20);
console.log("build new mob " + firstMob.name);

class Goblin extends Mob {
  constructor() { 
    super(10, "goblin", 1);
  } 
}
let firstGoblin = new Goblin();
console.log("build new goblin " + firstGoblin.name);

class Crab extends Mob {
  constructor () {
    super(10, "Crab", 5); 
  }
}

let firstCrab = new Crab();
console.log("build new crab " + firstCrab.name);

class Player extends Mob {
  levelUp() {
   this.level += 1;
  }
}

let myPlayer = new Player(100, "Rekt", 1);
console.log("build new player " + myPlayer.name);
myPlayer.doDamage(firstCrab);
firstCrab.doDamage(myPlayer);
