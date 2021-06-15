#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { brain_even } from '../games/brain-even.js';

const name = greeting();
brain_even(name);
