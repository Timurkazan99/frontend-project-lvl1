#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import questionsInit from '../games/brain-gcd.js';
import { game } from '../src/index.js';

const name = greeting();
const questions = questionsInit();
const rule = 'Find the greatest common divisor of given numbers.';
game(questions, name, rule);
