// import functions and grab DOM elements
import { countsAsYes } from '/utils.js';

const quizButton = document.getElementById('quiz-button');
const results = document.getElementById('results');

//add an event listener to our quiz button to kick off the quiz upon Click

quizButton.addEventListener('click', () => {
  // track the local state by declaring a variable and setting it to zero 
    let correctResults = 0;
  // ask for first and last name, then ask if they want to continue the quiz
    const firstName = prompt (`Well, howdy, hobgoblin! What's yer first name?`);
    const lastName = prompt (`So nice to meet ya, ${firstName}. What about your last name?`);
    const startQuiz = prompt (`Got it, ${firstName} ${lastName}. Are you ready to test your Hobgoblin knowledge?`);
    // if they input No (or anything that doesn't start with a `y') the quiz will stop
    if (!startQuiz) return;
    //if the user inputs a string beginning with a 'y' the quiz will begin
    const input1 = prompt(`(Yes or No) The earliest instance of the word Hobgoblin can be traced to roughly 1530.`);
    // if the countsAsYes formula validates the input as true (starting with a Y), increase the value of correctResults by one
    if (countsAsYes(input1)) correctResults++;
    const input2 = prompt(`(Yes or No) A close relative of the hobgoblin is the Cookie.`);
    if (countsAsYes(input2)) correctResults++;
    const input3 = prompt(`(Yes or No) Hobgoblins tout an especially patient and relaxed demeanor.`);
    if (countsAsYes(input3)) correctResults++;
    const input4 = prompt(`(Yes or No) Attempts to give them clothing will often banish (or free) them forever.`);
    if (countsAsYes(input4)) correctResults++;
    alert (`Wowza - nice job testing your chops ${firstName}! Let's see how you fared...`);
    results.textContent = `Solid effort ${firstName}, you got ${correctResults} out of 4 correct.`;

});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
