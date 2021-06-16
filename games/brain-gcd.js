import * as index from '../src/index.js';

const gcd = (first, second) => {
  let previous = (first > second) ? first : second;
  let temp = (first < second) ? first : second;
  let remainder = previous % temp;
  while (remainder !== 0) {
    previous = temp;
    temp = remainder;
    remainder = previous % temp;
  }
  return temp;
};

export default () => {
  const result = [];
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.maxValue);
    const second = index.getRandomInt(index.maxValue);
    const answer = String(gcd(first, second));
    temp.push(`${first} ${second}`);
    temp.push(answer);
    result.push(temp);
  }
  return result;
};
