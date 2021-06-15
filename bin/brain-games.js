#!/usr/bin/env node
import { greeting, choose_games, error, goodbye } from '../src/cli.js';
import { game } from '../src/index.js';
import * as calc from '../games/brain-calc.js';
import * as even from '../games/brain-even.js';

const games = ['Even', 'Calculate'];
const name = greeting();
const game_index = choose_games(name, games);
switch (game_index) {
  case 0:
    game(even.questions, name, even.rule);
    break;
  case 1:
    game(calc.questions, name, calc.rule);
    break;
  case 3:
    goodbye(name);
    break;
  default:
    error();
    break;
}
