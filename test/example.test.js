// IMPORT MODULES under test here:
import {
    createCountString,
} from '../functions.js';

const test = QUnit.test;

let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;

test('createCountString should return the current count for each part of the city', (expect) => {
    const expected = `You've changed the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times, and the castle ${castleCount} times.`;
    
    const actual = createCountString(skylineCount, waterfrontCount, castleCount);
    
    expect.equal(actual, expected, `should return 'You've changed the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times, and the castle ${castleCount} times.'`);
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
