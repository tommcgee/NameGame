var NameGame = require('../src/name_game.js');

describe("NameGame", function() {
  it("can add a person to the game", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom");

    expect(name_game.people[0].name).toBe("Tom");
  });

  it("can correctly guess a person at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom"); //1
    name_game.addPerson("Tony"); //2
    name_game.addPerson("Nicole");//3
    name_game.addPerson("Randy");//4

    expect(name_game.guessNameAt("Nicole", 3)).toBe(true);
  });

  it("can incorrectly guess a person at a position", function() {
    var name_game = new NameGame();

    name_game.addPerson("Tom"); //1
    name_game.addPerson("Tony"); //2
    name_game.addPerson("Nicole");//3
    name_game.addPerson("Randy");//4

    expect(name_game.guessNameAt("Tony", 3)).toBe(false);
  });
});
