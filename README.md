# NameGame

[![npm version](https://badge.fury.io/js/namegame.svg)](https://badge.fury.io/js/namegame)
[![Build Status](https://travis-ci.org/tommcgee/NameGame.svg?branch=master)](https://travis-ci.org/tommcgee/NameGame)


## Usage

```javascript
import { NameGame } from 'namegame'
```
[NameGame source](https://github.com/tommcgee/NameGame/blob/master/src/name_game.js)

A standard usage may look like:
```javascript
var nameGame = new NameGame();
nameGame.addPerson("Tom")
nameGame.addPerson("Tony")
nameGame.addPerson("TJ")

nameGame.guessNameAt("Tom",1) //True
nameGame.guessNameAt("Tom",2) //False
```

## Development
To test:
```javascript
npm run test
```
[Issue Tracking](https://github.com/tommcgee/NameGame/issues)

## Contributions Welcome
