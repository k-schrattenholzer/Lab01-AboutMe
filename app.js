// import functions and grab DOM elements
import { countsAsYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const results = document.getElementById('results');

//add an event listener to our quiz button to kick off the quiz upon Click

quizButton.addEventListener('click', () => {
  // track the local state by declaring a variable and setting it to zero 
    let correctResults = 0;
  // ask for first and last name, then ask if they want to continue the quiz
    const firstName = prompt (`Well, howdy, hobgoblin! What's yer first name?`);
    if (!firstName) return;
    const lastName = prompt (`So nice to meet ya, ${firstName}. What about your last name?`);
    if (!lastName) return;
    const startQuiz = confirm (`Got it, ${firstName} ${lastName}. Are you ready to test your Hobgoblin knowledge?`);
    // if they input No (or anything that doesn't start with a `y') the quiz will stop
    if (!startQuiz) return;
    //if the user inputs a string beginning with a 'y' the quiz will begin  
    // if the countsAsYes formula validates the input as true (starting with a Y), increase the value of correctResults by one
    const input1 = prompt(`Can the earliest instance of the word Hobgoblin can be traced to roughly 1530?`);
    if (countsAsYes(input1)) correctResults++;
    console.log(correctResults);

    const input2 = prompt(`Is a close relative of the hobgoblin is a Cookie?`);
    if (!countsAsYes(input2)) correctResults++;
    console.log(correctResults);

    const input3 = prompt(`Do Hobgoblins typically tout a patient and relaxed demeanor?`);
    if (!countsAsYes(input3)) correctResults++;
    console.log(correctResults);

    const input4 = prompt(`If you give one some clothing, will this banish them forever?`);

    if (countsAsYes(input4)) correctResults++;
    console.log(correctResults);

    alert (`Goodness gracious - ${firstName}! Let's see how you fared...`);

    if (correctResults > 3) {
        results.textContent = `INCREDIBLE!! You truly are a Hobgoblin expert!`;
        results.style.fontStyle = 'cursive';
        results.style.color = 'goldenrod';
        results.style.backgroundColor = 'rgb(67, 92, 97)';}
    else (results.textContent = `Solid effort ${firstName}, you got ${correctResults} out of 4 correct. Try again!`);
});

