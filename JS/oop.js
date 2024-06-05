class Animal {
  name;
  constructor(name) {
    this.name = name;
    console.log('Born!!', this.name);
  }

  bark() {
    console.log('bark!!!');
  }
}

const ani = new Animal('Ani');
ani.bark();

class Dog extends Animal {
  bark() {
    console.log('Bow wow!!!');
  }
}
const lucy = new Dog('Lucy');
lucy.bark();

export class Pig extends Animal {
  bark() {
    console.log('Oink, Oink!');
  }
}

export default class Cat extends Animal {
  bark() {
    console.log('Ma-ah!');
  }
}

const gg = new Pig('꿀꿀이');
gg.bark();
