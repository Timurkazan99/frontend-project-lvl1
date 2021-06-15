#!/usr/bin/env node

import greeting from '../src/cli.js';
import questionsInit from '../games/brain-prime.js';
import { game } from '../src/index.js';

const name = greeting();
const questions = questionsInit();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
game(questions, name, rule);
