import { random, floor, isPrime } from 'mathjs';
import {
  getAnswer, correct, wrong, rules, congratulations,
} from './cli.js';

export const maxValue = 100; // Максимальное значение для загаданных чисел
export const count = 3; // Необходимое количество правильных ответов для победы

const prime = (number) => (isPrime(number) ? 'yes' : 'no');
const even = (number) => (((number % 2) === 0) ? 'yes' : 'no');
export const getRandomInt = (max) => floor(random() * max);
export const getRandomArbitrary = (min, max) => floor(random() * (max - min + 1) + min);

export const checkAnswers = (questions, name = 'Player') => {
  for (let i = 0; i < questions.length; i += 1) {
    const [question, correctAnswer] = questions[i];
    const answer = getAnswer(question);
    if (correctAnswer === answer) {
      correct();
    } else {
      wrong(name, answer, correctAnswer);
      return false;
    }
  }
  return true;
};

export const game = (questions, name, rule) => {
  rules(rule);
  const win = checkAnswers(questions, name);
  congratulations(name, win);
  return true;
};

export const questionsInit = (gameName) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const temp = [getRandomInt(maxValue)];
    if (gameName === 'even') temp.push(even(temp[0]));
    if (gameName === 'prime') temp.push(prime(temp[0]));
    result.push(temp);
  }
  return result;
};
