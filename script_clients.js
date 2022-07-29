const clientMain = document.getElementById('main');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Array for name and wealth that we can run methods on
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();


// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

// Gets first item in the array
  const user = data.results[0];

// Create an object newUser 
// Taking user object with name.first and name.last properties
  const newUser = {
    image: `<img src=${user.picture.thumbnail}>`,
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000)
  };

  addData(newUser);
}

// Adds new objects we just created above to data arr. 
function addData(obj) {
  data.push(obj);

  updateDom();
}

// Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDom();
}

// Show only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDom();
}

// Calculate total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<p>Total Wealth: ${formatMoney(wealth)}</p>`;
  clientMain.appendChild(wealthEl);
}


// Update DOM 
// 
// We want a default value of the data array. Therefore, (providedData = data)
// If nothing is passed into the updateDom function,
// we then are using the data array to pass in a default value function 

function updateDom(providedData = data) {
  // Clear main div to display each function
  clientMain.innerHTML = '';

  // Each item is an object with an img, name, and money value
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `
    <p>${item.image}</p>
    <p><strong>${item.name}</strong></p> 
    <p>${formatMoney(item.money)}</p>`;
    clientMain.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);