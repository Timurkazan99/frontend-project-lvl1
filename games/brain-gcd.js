import * as index from '../src/index.js';
import { gcd } from 'mathjs';

const questions_init = (count, max) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(max);
    const second = index.getRandomInt(max);
    const answer = String(gcd(first, second));
    temp.push(`${first} ${second}`);
    temp.push(answer);
    result.push(temp);
  }
  return result;
};

export const questions = questions_init(index.count, index.max);
export const rule = 'Find the greatest common divisor of given numbers.';
