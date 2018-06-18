var Person = require('./person.js');

class NameGame {
  constructor(name) {
    this.people = []
  }

  addPerson(name) {
    this.people.push(new Person(name));
  }

  addPerson(name, title) {
    this.people.push(new Person(name, title));
  }

  guessNameAt(name, position) {
    return this.people[position - 1].guessName(name);
  }

  guessTitleAt(title, position) {
    return this.people[position - 1].guessTitle(title);
  }
}


module.exports = NameGame;
