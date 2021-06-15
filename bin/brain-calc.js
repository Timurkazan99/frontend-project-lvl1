#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as calc from '../games/brain-calc.js';
import { game } from '../src/index.js';

const name = greeting();
game(calc.questions, name, calc.rule);
