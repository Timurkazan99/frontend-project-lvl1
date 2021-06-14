#!/usr/bin/env node

import {greeting} from '../src/cli.js';
import { random, floor } from 'mathjs';
import readlineSync from 'readline-sync';

const max = 100; // Максимальное значение для загаданных чисел
const count = 3; // Необходимое количество правильных ответов для победы
let win = false; // Проверка на выполненость условия победы

const is_it_even = (number) => ((number % 2) === 0) ? 'yes' : 'no';

export const brain_even = (name = 'Player') => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < count; i += 1) {
    const hidden = floor(random(max));
    console.log(`Question: ${hidden}`);
    const answer = readlineSync.question('Your answer: ');
    if (is_it_even(hidden) === answer) {
      console.log('Correct!');
      win = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${is_it_even(hidden)}'.`);
      console.log(`Let's try again, ${name}!`);
      win = false;
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
  return true;
};

const name = greeting();
brain_even(name);
