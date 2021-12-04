const skylineDropdown = document.querySelector('#skyline-dropdown');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');

const skylineImageEl = document.querySelector('#skyline-image');
const waterfrontImageEl = document.querySelector('#waterfront-image');
const castleImageEl = document.querySelector('#castle-image');

const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');

const countEl = document.querySelector('.count');

// let state
let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;
let sloganArray = [];

// set event listeners 
skylineDropdown.addEventListener('change', () => {

  // get user input
    const id = skylineDropdown.value;

  // use user input to update state 
    skylineImageEl.src = `./assets/${id}-skyline.jpg`;
    skylineCount++;
  // update DOM to reflect the new state
    countEl.textContent = ``;
    displayStats();
});

waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;
    waterfrontImageEl.src = `./assets/${id}-waterfront.jpg`;
    waterfrontCount++;
    countEl.textContent = ``;
    displayStats();});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;
    castleImageEl.src = `./assets/${id}-castle.jpg`;
    castleCount++;
    countEl.textContent = ``;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;
    sloganArray.push(newSlogan);
    sloganListEl.textContent = '';
    for (let slogan of sloganArray) {
        const p = document.createElement('p');

        p.classList.add('slogan');

        p.textContent = slogan;

        sloganListEl.append(p);
    }

    sloganInputEl.value = '';
});

// FUNCTIONS
function createCountString(skylineCount, waterfrontCount, castleCount) {
    return `You've changed the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times, and the castle ${castleCount} times.`;
}

function displayStats() {
  // change the text content of the countEl
    const statsString = createCountString(skylineCount, waterfrontCount, castleCount);
    countEl.textContent = `${statsString}`;
}