#!/usr/bin/env node
import { greeting, choose_games, error, goodbye } from '../src/cli.js';
import { game } from '../src/index.js';
import * as calc from '../games/brain-calc.js';
import * as even from '../games/brain-even.js';
import * as gcd from '../games/brain-gcd.js';
import * as progression from '../games/brain-progression.js';

const games = ['Even', 'Calculate', 'GCD', 'Progression'];
const name = greeting();
const game_index = choose_games(name, games);
switch (game_index) {
  case -1:
    goodbye(name);
    break;
  case 0:
    game(even.questions, name, even.rule);
    break;
  case 1:
    game(calc.questions, name, calc.rule);
    break;
  case 2:
    game(gcd.questions, name, gcd.rule);
    break;
  case 3:
    game(progression.questions, name, progression.rule);
    break;
  default:
    console.log(game_index);
    error();
    break;
}
