var Person = require ('../src/person.js');

describe("person", function() {
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
