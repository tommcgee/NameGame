var Person = require('./person.js');

class NameGame {
  constructor(name) {
    this.people = []
  }

  addPerson(name) {
    this.people.push(new Person(name));
  }

  guessNameAt(name, position) {
    return this.people[position - 1].guessName(name);
  }
}


module.exports = NameGame;
