import * as index from '../src/index.js';

const fill = () => {
  const result = [];
  result.push(index.getRandomInt(index.maxValue));
  const max = index.getRandomArbitrary(5, 10);
  const step = index.getRandomArbitrary(2, 10);
  for (let i = 1; i < max; i += 1) {
    const temp = result[i - 1] + step;
    result.push(temp);
  }
  return result;
};

const questionsInit = () => {
  const result = [];
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const question = fill();
    const randIndex = index.getRandomInt(question.length);
    const answer = String(question[randIndex]);
    question[randIndex] = '..';
    temp.push(question.join(' '));
    temp.push(answer);
    result.push(temp);
  }
  return result;
};

export default questionsInit;
