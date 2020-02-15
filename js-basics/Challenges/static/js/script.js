// Challenge 1: Your age in days

function calculateAgeInDays() {
  reset();
  var birthYear = prompt("What year were you born?");
  var ageInDays = (new Date().getFullYear() - birthYear) * 364;

  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode("You are " + ageInDays + ' days');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);

  console.log(ageInDays);
}

function reset() {
  let ageInDaysElement = document.getElementById('ageInDays');
  if (ageInDaysElement) {
    document.getElementById('ageInDays').remove();
  }
}

// Challenge 2: Generate Cat
function generateCat() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
  div.appendChild(image);
}