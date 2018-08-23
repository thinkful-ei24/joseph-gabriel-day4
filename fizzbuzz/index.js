function generateFizzBuzzHTML(array) {
  let className = '';

  return array.map(item => {
    return `
    <div class="fizz-buzz-item ${typeof item === 'string' ? item : className}">
      <span>${item}</span>
    </div>
    `;
  });
}

function generateFizzBuzzValue(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';

  return num;
}

function fizzBuzzer(num) {
  const arrayOfFizzBuzz = [];

  for (let i = 1; i <= num; i++) {
    arrayOfFizzBuzz.push(generateFizzBuzzValue(i));
  }
  return arrayOfFizzBuzz;
}

function main() {
  $('#number-chooser').on('submit', function(event) {
    event.preventDefault();
    const inputObject = $('#number-choice');
    const countTo = inputObject.val();
    inputObject.val('0');
    $('.js-results').html(generateFizzBuzzHTML(fizzBuzzer(countTo)));
  });
}

$(main);
