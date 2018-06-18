class Person {
  constructor(name, title) {
    this.name = name;
    if (title) {
      this.title = title;
    }
  }

  guessName(guessedName) {
    return this.normalizeString(guessedName) === this.normalizeString(this.name);
  }

  guessTitle(guessedTitle) {
    if (this.title) {
      return this.normalizeString(guessedTitle) === this.normalizeString(this.title);
    }
    return false;
  }

  normalizeString(str) {
    return str.trim().toLowerCase();
  }
}


module.exports = Person;
