// Main function to be run on DOM ready
function main() {
  console.log('DOM is loaded');
  // Set .js-results to a variable
  const results = $('.js-results');

  // receive input from user
  $('#number-chooser').submit(event => {
    // prevent submission
    event.preventDefault();

    console.log('form submitted');
    // get user form vlue
    const count = $('#number-choice').val();
    // set html of results to generated fizz buzz
    results.html(generateFizzBuzz(count));
  });
}

//run fizzbuzz n times based on input
//for each fizzbuzz result
function generateFizzBuzz(fizzToNum) {
  console.log('generating fizz buzz');
  // set an array to hold fizzbuzz results
  const fizzBuzzResultsArray = [];
  // loop through the array
  for (let i = 1; i < fizzToNum; i++) {
    // push fizzbuzz results to array
    fizzBuzzResultsArray.push(fizzBuzzer(i));
  }
  // map the elements
  const htmlElements = fizzBuzzResultsArray.map(result => {
    // transform strings into html
    return generateFizzHTML(result);
  });
  // return html to render on page
  return htmlElements;
}

// Function for generating fizzbuzz results
function fizzBuzzer(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}

// function for generating fizz html based on a string
function generateFizzHTML(string) {
  // define variable to hold class name, set to empty quotes
  // by default
  let className = '';
  // check if type is string
  if (typeof string === 'string') {
    // if so set className to the string to add the class
    className = string;
  }
  // return the html
  return `
  <div class="fizz-buzz-item ${className}">
    <span>${string}</span>
  </div>
`;
}

$(main);
