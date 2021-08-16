// comment for clarity: we are declaring a function, naming it countsAsYes and saying that the ingredient (argument) it takes in is userInput. It's a name we're giving to the ingredient, it could be bananasSoMany, or whatTheUserTyped but the name doesn't mean anything inherently. 
// We then declare this function's job, as telling us if the answer (the first character of userInput) is the same as 'y') because we're validating to a lowercase Y , to make capital Y's count as true as well, we use toLowerCase to make that first character lowercase anyway (also known as 'sanitizing' the user input).

export function countsAsYes(userInput) {
    return userInput.charAt(0).toLowerCase() === 'y';
}