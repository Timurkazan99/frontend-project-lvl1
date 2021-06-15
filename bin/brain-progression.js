#!/usr/bin/env node

import greeting from '../src/cli.js';
import questionsInit from '../games/brain-progression.js';
import { game } from '../src/index.js';

const name = greeting();
const questions = questionsInit();
const rule = 'What number is missing in the progression?';
game(questions, name, rule);
