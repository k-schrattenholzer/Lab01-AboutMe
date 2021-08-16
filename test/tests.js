import './example.test.js';
import { countsAsYes } from '../utils.js';


test('the string `yes` should be a correct answer', (expect) => {
    const expected = true;
    const actual = countsAsYes('yass');
    expect.equal(actual, expected);
});
