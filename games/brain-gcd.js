import { gcd } from 'mathjs';
import * as index from '../src/index.js';

export default () => {
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
