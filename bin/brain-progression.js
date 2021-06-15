#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import * as progression from '../games/brain-progression.js';
import { game } from '../src/index.js';

const name = greeting();
game(progression.questions, name, progression.rule);
