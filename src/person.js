class Person {
  constructor(name) {
    this.name = name;
  }

  guessName(guessedName) {
    return this.normalizeString(guessedName) === this.normalizeString(this.name);
  }

  normalizeString(str) {
    return str.trim().toLowerCase();
  }
}


module.exports = Person;
