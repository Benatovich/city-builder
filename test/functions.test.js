import {
    createCountString,
} from '../functions.js';

const test = QUnit.test;

let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;


test('createCountString should return the current count for each area of the city', (expect) => {
    const expected = '';
    
    const actual = createCountString(skylineCount, waterfrontCount, castleCount);
    
    expect.equal(actual, expected, `should return 'You\'ve changed the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times, and the castle ${castleCount} times.'`);
});