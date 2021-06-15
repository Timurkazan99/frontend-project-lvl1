#!/usr/bin/env node

import greeting from '../src/cli.js';
import questionsInit from '../games/brain-calc.js';
import { game } from '../src/index.js';

const name = greeting();
const questions = questionsInit();
const rule = 'What is the result of the expression?';
game(questions, name, rule);
