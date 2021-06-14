#!/usr/bin/env node
import {greeting} from '../src/cli.js';
import {brain_even} from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
brain_even(name);
