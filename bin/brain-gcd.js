#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as gcd from '../games/brain-gcd.js';
import { game } from '../src/index.js';

const name = greeting();
game(gcd.questions, name, gcd.rule);
