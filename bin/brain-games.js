#!/usr/bin/env node
import { greeting, choose_games, error, goodbye } from '../src/cli.js';
import { brain_calc } from '../games/brain-calc.js';
import { brain_even } from '../games/brain-even.js';

const games = ['Even', 'Calculate'];
const name = greeting();
const game = choose_games(name, games);
switch (game) {
  case 0:
    brain_even(name);
    break;
  case 1:
    brain_calc(name);
    break;
  case 3:
    goodbye(name);
    break;
  default:
    error();
    break;
}
