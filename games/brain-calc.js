import { evaluate } from 'mathjs';
import * as index from '../src/index.js';

export default () => {
  const result = [];
  const operations = ['+', '-', '*'];
  const quantity = operations.length;
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.maxValue);
    const second = index.getRandomInt(index.maxValue);
    const operation = operations[index.getRandomInt(quantity)];
    temp.push(`${first} ${operation} ${second}`);
    const answer = String(evaluate(temp[0]));
    temp.push(answer);
    result.push(temp);
  }
  return result;
};
