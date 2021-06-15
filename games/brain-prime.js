import * as index from '../src/index.js';
import { isPrime } from 'mathjs';

export const questions = index.questions_init('prime');
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
