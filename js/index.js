console.clear();

const bookMark = document.querySelector('[data-js="bookmark"]');
const answer = document.querySelector('[data-js="answer"]');
const answer_button = document.querySelector('[data-js="answer-button"]');

bookMark.addEventListener("click", () => {
  if (
    bookMark.src !==
    "https://img.icons8.com/external-inkubators-glyph-inkubators/25/null/external-bookmark-user-interface-inkubators-glyph-inkubators.png"
  ) {
    bookMark.src =
      "https://img.icons8.com/external-inkubators-glyph-inkubators/25/null/external-bookmark-user-interface-inkubators-glyph-inkubators.png";
  } else if (
    bookMark.src !==
    "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-bookmark-library-tanah-basah-basic-outline-tanah-basah.png"
  ) {
    bookMark.src =
      "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-bookmark-library-tanah-basah-basic-outline-tanah-basah.png";
  }
});

answer_button.addEventListener("click", () => {
  if (answer.hidden) {
    answer.removeAttribute("hidden");
  } else { 
    answer.setAttribute("hidden", "");
  }
});
