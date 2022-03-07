const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainerElement = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const resultElement = document.querySelector('#result');
const questionNumberElement = document.querySelector('#question-number');
const answerButtonsElement = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex, questionNumber, result;
nextButton.classList.add('hide');

const startQuiz = () => {
  questionNumber = 0;
  result = 0;
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
};

startButton.addEventListener('click', startQuiz);

const setNextQuestion = () => {
  resetState();
  questionNumber++;
  displayQuestion(shuffledQuestions[currentQuestionIndex]);
};

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

const displayQuestion = (question) => {
  questionElement.innerText = question.question;
  questionNumberElement.innerText = `${questionNumber}/${questions.length}`;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', chooseAnswer);
    answerButtonsElement.appendChild(button);
  });
};

const resetState = () => {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  resultElement.innerText = '';
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

const chooseAnswer = (e) => {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  let correctAnswer = 0;
  let correctAnswersSum = 0;
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct) {
      correctAnswersSum++;
    }
    if (button.classList.contains('correct')) {
      correctAnswer++;
    }
  });

  if (correct) {
    setStatusClass(selectedButton, selectedButton.dataset.correct);
    correctAnswer++;
  } else {
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
      resultElement.innerText = 'Antwort: Falsch';
    } else {
      resultElement.innerText = `Ende: ${result} von ${questions.length} richtig beantwortet.`;
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }

  if (correctAnswer === correctAnswersSum) {
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    result++;
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
      resultElement.innerText = 'Antwort: Richtig';
    } else {
      resultElement.innerText = `Ende: ${result} von ${questions.length} richtig beantwortet.`;
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }
};

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
};

const clearStatusClass = (element) => {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};
