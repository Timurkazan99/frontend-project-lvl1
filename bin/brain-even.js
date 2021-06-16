#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import questionsInit from '../games/brain-even.js';
import { game } from '../src/index.js';

const name = greeting();
const questions = questionsInit();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
game(questions, name, rule);
