import * as index from '../src/index.js';
import { isPrime } from 'mathjs';

const is_prime = (number) => isPrime(number) ? 'yes' : 'no';

const questions_init = () => {
  const result = [];
  for (let i = 0; i < index.count; i += 1) {
    const temp = [index.getRandomInt(index.max)];
    temp.push(is_prime(temp[0]));
    result.push(temp);
  }
  return result;
};

export const questions = questions_init();
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
