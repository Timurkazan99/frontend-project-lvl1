#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as calc from '../games/brain-calc.js';

const name = greeting();
game(calc.questions, name, calc.rule);
