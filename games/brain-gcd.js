import { gcd } from 'mathjs';
import * as index from '../src/index.js';

const questionsInit = () => {
  const result = [];
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.maxValue);
    const second = index.getRandomInt(index.maxValue);
    const answer = String(gcd(first, second));
    temp.push(`${first} ${second}`);
    temp.push(answer);
    result.push(temp);
  }
  return result;
};

export const questions = questionsInit();
export const rule = 'Find the greatest common divisor of given numbers.';
