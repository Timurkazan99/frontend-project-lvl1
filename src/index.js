import readlineSync from 'readline-sync';
import { random, floor, isPrime } from 'mathjs';

export const maxValue = 100; // Максимальное значение для загаданных чисел
export const count = 3; // Необходимое количество правильных ответов для победы

const prime = (number) => (isPrime(number) ? 'yes' : 'no');
const even = (number) => (((number % 2) === 0) ? 'yes' : 'no');
export const getRandomInt = (max) => floor(random() * max);
export const getRandomArbitrary = (min, max) => floor(random() * (max - min + 1) + min);

export const game = (questions, name, rule) => {
  console.log(rule);
  let win = true;
  for (let i = 0; i < questions.length; i += 1) {
    const [question, correctAnswer] = questions[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      win = false;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
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
