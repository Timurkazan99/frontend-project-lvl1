import * as index from '../src/index.js';

const Resolve = (string) => {
  const [first, operation, second] = string.split(' ');
  let result;
  switch (operation) {
    case '+':
      result = Number(first) + Number(second);
      break;
    case '-':
      result = Number(first) - Number(second);
      break;
    case '*':
      result = Number(first) * Number(second);
      break;
    default:
      return 'error';
  }
  return String(result);
};

export default () => {
  const result = [];
  const operations = ['+', '-', '*'];
  const quantity = operations.length;
  for (let i = 0; i < index.count; i += 1) {
    const temp = [];
    const first = index.getRandomInt(index.maxValue);
    const second = index.getRandomInt(index.maxValue);
    const operation = operations[index.getRandomInt(quantity)];
    temp.push(`${first} ${operation} ${second}`);
    const answer = Resolve(temp[0]);
    temp.push(answer);
    result.push(temp);
  }
  return result;
};
