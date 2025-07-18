class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack(target) {
    target.health -= this.attackPower;
    console.log(
      `🗡️ ${this.name} attacks ${target}! ${target}'s health is now ${target.health}.`
    );
  }
}
class Warrior extends Character {
  constructor(name, health, attackPower, weapon) {
    super(name, health, attackPower);
    this.weapon = weapon;
  }
  attack(target) {
    if (target.health <= 0) {
      console.log(`${target.name} died`);
    } else {
      target.health -= this.attackPower;
      console.log(
        `🗡️ ${this.name} attacks ${target.name} with a ${this.weapon}! ${target.name}'s health is now ${target.health}.`
      );
    }
  }
}
class Mage extends Character {
  constructor(name, health, attackPower, weapon, mana, skillName) {
    super(name, health, attackPower);
    this.weapon = weapon;
    this.mana = mana;
    this.skillName = skillName;
  }
  attack(target) {
    if (target.health <= 0) {
      console.log(`${target.name} died`);
    } else {
      target.health -= this.attackPower;
      console.log(
        `🗡️ ${this.name} attacks ${target.name} with a ${this.weapon}! ${target.name}'s health is now ${target.health}.`
      );
    }
  }
  skill(target) {
    if (target.health <= 0) {
      console.log(`${target.name} died`);
    } else {
      if (this.mana >= 10) {
        target.health -= 30;
        console.log(
          `${this.name} attack with skill name ${this.skillName} to target ${target.name}, enemies health ${target.health}.`
        );
      } else {
        console.log("⚠️ Not enough mana to cast a spell!");
      }
    }
  }
}
class BattleField {
  constructor(character1, character2) {
    this.character1 = character1;
    this.character2 = character2;
  }

  start() {
    console.log(
      `⚔️ Battle starts between ${this.character1.name} and ${this.character2.name}!`
    );
    let attacker, defender;
    if (Math.random() < 0.5) {
      attacker = this.character1;
      defender = this.character2;
    } else {
      attacker = this.character2;
      defender = this.character1;
    }
    console.log(`${attacker.name} first attack`);

    while (attacker.health > 0 && defender.health > 0) {
      attacker.attack(defender);

      if (defender.health <= 0) {
        this.statusLog(defender);
        break;
      }
      [attacker, defender] = [defender, attacker];
    }
  }
  statusLog(defender) {
    console.log(
      `${defender.name}, is died ${defender.health} health | wins attacker`
    );
  }
}

const warriorChampion = new Warrior("Rommel", 100, 15, "Sword");
const mageChampion = new Mage(
  "Babae",
  100,
  8,
  "Ice Staff",
  100,
  "Frontier Dome"
);
const startBattle = new BattleField(warriorChampion, mageChampion);
startBattle.start();
