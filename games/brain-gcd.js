import * as index from '../src/index.js';
import { gcd } from 'mathjs';

const questions_init = () => {
  const result = [];
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.max);
    const second = index.getRandomInt(index.max);
    const answer = String(gcd(first, second));
    temp.push(`${first} ${second}`);
    temp.push(answer);
    result.push(temp);
  }
  return result;
};

export const questions = questions_init();
export const rule = 'Find the greatest common divisor of given numbers.';
