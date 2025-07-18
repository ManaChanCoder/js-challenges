class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }
  makeSound() {
    console.log(
      `The ${this.name} bark: ${this.sound}, and it's breed is ${this.breed}`
    );
  }
}
class Cat extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }
  makeSound() {
    console.log(
      `The ${this.name} meows: ${this.sound}, and it's breed is ${this.breed}`
    );
  }
}

const siamese = new Cat("Cat", "Meow", "Siamese");
const labrador = new Dog("Dog", "Aw", "Labrador");
const frog = new Animal("Frog", "Kukak");
labrador.makeSound();
siamese.makeSound();
frog.makeSound();
