import { evaluate } from 'mathjs';
import * as index from '../src/index.js';

export const questions = questions_init(index.count, index.max);
export const rule = 'What is the result of the expression?';

export const questions_init = (count, max) => {
  const result = [];
  const operations = ['+', '-', '*'];
  const quantity = operations.length;
  for (let i = 0; i < count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(max);
    const second = index.getRandomInt(max);
    const operation = operations[index.getRandomInt(quantity)];
    temp.push(`${first} ${operation} ${second}`);
    const answer = String(evaluate(temp[0]));
    temp.push(answer);
    result.push(temp);
  }
  return result;
};
