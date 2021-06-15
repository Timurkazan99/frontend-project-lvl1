import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const choose_games = (name, games) => {
  console.log(`${name}, choose the game you want to play`)
  const game = readlineSync.keyInSelect(games);
  return game;
}

export const get_answer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export const correct = () => console.log('Correct!');

export const wrong = (name = 'Player', answer, correct_answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct_answer}'.`);
  console.log(`Let's try again, ${name}!`);
}

export const congratulations = (name = 'Player', win) => {
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
}

export const rules = (rule) => console.log(rule);

export const error = () => console.error('Something going wrong, please try again.');

export const goodbye = (name) => console.error(`Goodbye, see later ${name}`);
