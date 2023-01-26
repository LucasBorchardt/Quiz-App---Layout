console.clear();

const form = document.querySelector('[data-js="form"]');
const cardToSubmit = document.querySelector('[data-js="card-to-submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  createCardToSubmitItem(data);
  form.reset();
  form.elements["your-question-area"].focus();
});

function createCardToSubmitItem(localData) {
  const newListElement = document.createElement("section");
  const newCuestion = document.createElement("h2");
  const newAnswer = document.createElement("p");
  const newList = document.createElement("ul");
  const newTag = document.createElement("li");

  newCuestion.textContent = localData["your-question-area"];
  newAnswer.textContent = localData["your-answer-area"];
  newTag.textContent = localData["your-tags-area"];

  newListElement.append(newCuestion, newAnswer, newList, newTag);
  cardToSubmit.append(newListElement);
}

const question = document.querySelector('[data-js="question"]');
const questionCharacters = document.querySelector('[data-js="counter1"]');
const maxLength1 = question.getAttribute("maxlength");

const firstAmountLeft = (value) => {
  questionCharacters.innerText = value;
};
firstAmountLeft(maxLength1);

question.addEventListener("input", () => {
  firstAmountLeft(maxLength1 - question.value.length);
});

const answer = document.querySelector('[data-js="answer"]');
const answerCharacters = document.querySelector('[data-js="counter2"]');
const maxLength2 = answer.getAttribute("maxlength");

const secondAmountLeft = (value) => {
  answerCharacters.innerText = value;
};
secondAmountLeft(maxLength2);

answer.addEventListener("input", () => {
  secondAmountLeft(maxLength2 - answer.value.length);
});
