// import './example.test.js';
// const test = QUnit.test;

import { countsAsYes } from '../utils.js';

test('the string `yass` should be a correct answer', (expect) => {
    const expected = true;
    const actual = countsAsYes('yass');
    expect.equal(actual, expected);
});

test('the string `no` should be an incorrect answer', (expect) => {
    const expected = true;
    const actual = countsAsYes('yass');
    expect.equal(actual, expected);
});
