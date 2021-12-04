// IMPORT MODULES under test here:
import {
    createCountString,
} from '../functions.js';

const test = QUnit.test;


test('createCountString should return the current count for each part of the city', (expect) => {
    const expected = `You've changed the skyline 1 times, the waterfront 2 times, and the castle 3 times.`;
    
    const actual = createCountString(1, 2, 3);
    
    expect.equal(actual, expected, `should return 'You've changed the skyline 1 times, the waterfront 2 times, and the castle 3 times.'`);
});




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
