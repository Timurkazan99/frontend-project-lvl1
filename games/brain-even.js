import * as index from '../src/index.js';

const is_it_even = (number) => ((number % 2) === 0) ? 'yes' : 'no';

const questions_init = (count, max) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const temp = [index.getRandomInt(max)];
    temp.push(is_it_even(temp[0]));
    result.push(temp);
  }
  return result;
};

export const questions = questions_init(index.count, index.max);
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
