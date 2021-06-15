#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as even from '../games/brain-even.js';
import { game } from '../src/index.js';

const name = greeting();
game(even.questions, name, even.rule);
