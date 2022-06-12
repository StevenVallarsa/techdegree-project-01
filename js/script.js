/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "There's no place for the state in the bedrooms of the nation..",
    source: "Pierre Trudeau",
    citation: "Comment in the Canadian House of Commons on the decriminalization of homosexuality (1967-12-22)",
    tags: ["Canadiana", "Politics"],
  },
  {
    quote: "Well, I am trying to put Quebec in its place — and the place of Quebec is in Canada, nowhere else.",
    source: "Pierre Trudeau",
    year: 1968,
  },
  {
    quote: "If Canada is to survive, it can only survive in mutual respect and in love for one another.",
    source: "Pierre Trudeau",
    citation: "Televised address (1976-11-24)",
    tags: ["Canada", "Politics"],
  },
  {
    quote:
      "Our hopes are high. Our faith in the people is great. Our courage is strong. And our dreams for this beautiful country will never die..",
    source: "Pierre Trudeau",
    citation: "Farewell speech to the Liberal Party (1984-06-14)",
  },
  {
    quote: "Paddling a canoe is a source of enrichment and inner renewal.",
    source: "Pierre Trudeau",
  },
];

let previousQuoteIndex = -1;

/***
 * `getRandomQuote` function
 *
 * added extra step to prevent the same quote from being
 * displayed twice in a row
 ***/
function getRandomQuote() {
  let duplicate = true;
  let quoteIndex;

  while (duplicate) {
    quoteIndex = Math.floor(Math.random() * quotes.length);
    if (quoteIndex !== previousQuoteIndex) {
      previousQuoteIndex = quoteIndex;
      duplicate = false;
    }
  }

  return quotes[quoteIndex];
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  changeBackgroundColor();

  const quoteObject = getRandomQuote();
  let html = `<p class="quote">${quoteObject.quote}</p>
<p class="source">${quoteObject.source}`;
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}`;
  }
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }
  html += "</p>";

  /**
   * EXTRA CREDIT
   * Add tags to bottom of quotation if tags key exists in quote object
   */
  if (quoteObject.tags) {
    html += `<p style="text-align: right"><strong>${quoteObject.tags.join(" • ").toUpperCase()}</strong></p>`;
  }
  document.getElementById("quote-box").innerHTML = html;
}

/**
 * EXTRA CREDIT
 * Function to change the background color of the body to a random color
 * that doesn't get too light to be readable with the white text (max RGB 199)
 */
const body = document.querySelector("body");

function changeBackgroundColor() {
  function randomNumber() {
    return Math.floor(Math.random() * 200);
  }
  body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

/**
 * EXTRA CREDIT
 * Run program immediately on load to replace default quote with one from custom array
 * and then change quote and background color every 10 seconds
 */
printQuote();
setInterval(() => {
  printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
