#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { brain_calc } from '../games/brain-calc.js';

const name = greeting();
brain_calc(name);
