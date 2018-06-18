var Person = require ('../src/person.js');

describe("person", function() {
  describe("name", function() {
    it("has a name", function() {
      var person = new Person("Tom");

      expect(person.name).toBe("Tom");
    });

    it("tells you if you guess incorrectly", function() {
      var person = new Person("Tom");

      expect(person.guessName("Tony")).toBe(false);
    });

    it("tells you if you guess correctly", function() {
      var person = new Person("Tom");

      expect(person.guessName("Tom")).toBe(true);
    });

    it("ignores case for a correct guess", function() {
      var person = new Person("TOM");

      expect(person.guessName("tom")).toBe(true);
    });

    it("trims whitespace from a guess and a name", function() {
      var person = new Person("TOM        ");

      expect(person.guessName("tom                  ")).toBe(true);
    });
  });

  describe("title", function() {
    it("has a title", function() {
      var person = new Person("Tom", "Software Crafter");

      expect(person.title).toBe("Software Crafter");
    });

    it("does not have a title", function() {
      var person = new Person("Tom");

      expect(person.title).toBe(undefined);
    });

    it("tells you if you guess incorrectly", function() {
      var person = new Person("Tom", "Software Crafter");

      expect(person.guessTitle("Tony")).toBe(false);
    });

    it("tells you if you guess correctly", function() {
      var person = new Person("Tom", "Software Crafter");

      expect(person.guessTitle("Software Crafter")).toBe(true);
    });

    it("ignores case for a correct guess", function() {
      var person = new Person("Tom", "SOFTWARE CRAFTER");

      expect(person.guessTitle("software crafter")).toBe(true);
    });

    it("trims whitespace from a guess and a name", function() {
      var person = new Person("Tom", "                    SOFTWARE CRAFTER");

      expect(person.guessTitle("software crafter")).toBe(true);
    });
  });
});
