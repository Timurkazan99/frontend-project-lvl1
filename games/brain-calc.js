import { evaluate } from 'mathjs';
import * as index from '../src/index.js';

export const questions_init = () => {
  const result = [];
  const operations = ['+', '-', '*'];
  const quantity = operations.length;
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.max);
    const second = index.getRandomInt(index.max);
    const operation = operations[index.getRandomInt(quantity)];
    temp.push(`${first} ${operation} ${second}`);
    const answer = String(evaluate(temp[0]));
    temp.push(answer);
    result.push(temp);
  }
  return result;
};

export const questions = questions_init();
export const rule = 'What is the result of the expression?';
