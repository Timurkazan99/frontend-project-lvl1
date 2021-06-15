import {get_answer, correct, wrong, rules, congratulations} from './cli.js';
import { random, floor } from 'mathjs';

export const max = 100; // Максимальное значение для загаданных чисел
export const count = 3; // Необходимое количество правильных ответов для победы

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

export const getRandomInt = (max) => floor(random() * max);
