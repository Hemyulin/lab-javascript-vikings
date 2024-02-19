// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry = () => {
    return "Odin Owns You All!";
  };
  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };
}

// Saxon

class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  };
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking = (Viking) => {
    this.vikingArmy.push(Viking);
  };
  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };
  vikingAttack = () => {};
  saxonAttack = () => {};
  showStatus = () => {};
}
