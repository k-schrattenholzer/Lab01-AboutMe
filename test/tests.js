// import './example.test.js';
const test = QUnit.test;

import { countsAsYes } from '../utils.js';

test('`yass` should be a correct answer', (expect) => {
    const expected = true;
    const actual = countsAsYes('yass');
    expect.equal(actual, expected);
});

test('`no` should be an incorrect answer', (expect) => {
    const expected = false;
    const actual = countsAsYes('no');
    expect.equal(actual, expected);
});
