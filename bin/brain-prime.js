#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as prime from '../games/brain-prime.js';
import { game } from '../src/index.js';

const name = greeting();
game(prime.questions, name, prime.rule);
