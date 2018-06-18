var NameGame = require('../src/name_game.js');

describe("NameGame", function() {
  it("can add a person to the game without a title", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom");

    expect(name_game.people[0].name).toBe("Tom");
  });

  it("can correctly guess a person's name at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom"); //1
    name_game.addPerson("Tony"); //2
    name_game.addPerson("Nicole");//3
    name_game.addPerson("Randy");//4

    expect(name_game.guessNameAt("Nicole", 3)).toBe(true);
  });

  it("can incorrectly guess a person's name at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom"); //1
    name_game.addPerson("Tony"); //2
    name_game.addPerson("Nicole");//3
    name_game.addPerson("Randy");//4

    expect(name_game.guessNameAt("Tony", 3)).toBe(false);
  });

  it("can add a person to the game with a title", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom", "Software Crafter");

    expect(name_game.people[0].name).toBe("Tom");
    expect(name_game.people[0].title).toBe("Software Crafter");
  });


  it("can correctly guess a person's title at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom", "Janitor"); //1
    name_game.addPerson("Tony", "Software Crafter"); //2
    name_game.addPerson("Nicole", "Chef");//3
    name_game.addPerson("Randy", "Architect");//4

    expect(name_game.people[2].name).toBe("Nicole");
    expect(name_game.people[2].title).toBe("Chef");
    expect(name_game.guessTitleAt("Chef", 3)).toBe(true);
  });


  it("can incorrectly guess a person's title at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom", "Janitor"); //1
    name_game.addPerson("Tony", "Software Crafter"); //2
    name_game.addPerson("Nicole", "Chef");//3
    name_game.addPerson("Randy", "Architect");//4

    expect(name_game.guessTitleAt("Janitor", 3)).toBe(false);
  });
});
