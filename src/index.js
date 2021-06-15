import {get_answer, correct, wrong, rules, congratulations} from './cli.js';
import { random, floor, isPrime } from 'mathjs';

export const max = 100; // Максимальное значение для загаданных чисел
export const count = 3; // Необходимое количество правильных ответов для победы

const is_prime = (number) => isPrime(number) ? 'yes' : 'no';
const is_it_even = (number) => ((number % 2) === 0) ? 'yes' : 'no';
export const getRandomInt = (max) => floor(random() * max);
export const getRandomArbitrary = (min, max) => floor(random() * (max - min + 1) + min);

export const check_answers = (questions, name = 'Player') => {
  for(const [question, correct_answer] of questions) {
    const answer = get_answer(question);
    if (correct_answer === answer) {
      correct();
    } else {
      wrong(name, answer, correct_answer);
      return false;
      break;
    }
  }
  return true;
};

export const game = (questions, name, rule) => {
    rules(rule);
    const win = check_answers(questions, name);
    congratulations(name, win);
    return true;
};

export const questions_init = (game) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const temp = [getRandomInt(max)];
    if (game === 'even') temp.push(is_it_even(temp[0]));
    if (game === 'prime') temp.push(is_prime(temp[0]));
    result.push(temp);
  }
  return result;
};
