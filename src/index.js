import { getAnswer, correct, wrong, rules, congratulations } from './cli.js';

export const maxValue = 100; // Максимальное значение для загаданных чисел
export const count = 3; // Необходимое количество правильных ответов для победы

const isEven = (number) => (((number % 2) === 0) ? 'yes' : 'no');
export const getRandomInt = (max) => Math.floor(Math.random() * max);
export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (number) => {
  const primes = [ // Простые числа до 100
    2, 3, 5, 7, 11,
    13, 17, 19, 23,
    29, 31, 37, 41,
    43, 47, 53, 59,
    61, 67, 71, 73,
    79, 83, 89, 97];

  if (primes.includes(number)) {
    return 'yes';
  }
  return 'no';
};

const checkAnswers = (questions, name = 'Player') => {
  for (const [question, correctAnswer] of questions) {
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
    if (gameName === 'even') temp.push(isEven(temp[0]));
    if (gameName === 'prime') temp.push(isPrime(temp[0]));
    result.push(temp);
  }
  return result;
};
