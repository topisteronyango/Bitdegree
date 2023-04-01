"use strict";

let userInputs = []
let numberOfQuestions = 5;
let questionCounter = 0;
let userprompt = "Please enter"
let questionArray = [
`${userprompt} a noun`,
`${userprompt} a noun`,
`${userprompt} a noun`,
`${userprompt} an adjective`,
`${userprompt} a noun`,
]

for (let i = numberOfQuestions; i > 1; i--) {
      console.log(
      questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    numberOfQuestions--;
  }


  let originalStory = `<p>Every day for a whole year, all kind of holy men, hermits, scholars and nobles came, and related to the priests their deeds of  ${userInputs[0]}, and the priests in solemn council heard their calms. At last, they decided that the one who seemed to be the greatest lover of  ${userInputs[1]} was a rich man who had that very year given all his ${userInputs[2]} to the poor. So they gave him the plate of gold, but when he took it in his hand, it turned into ${userInputs[3]} lead; thought, when he dropped it on the floor, to his ${userInputs[4]}, it become gold again.</p>`;
  console.log(originalStory)
  alert("All done!");

  console.log(originalStory);
  document.write(originalStory);
// let userInputs = ["Charity", "Mankind", "Wealth", "Worthless", "Amazement"]