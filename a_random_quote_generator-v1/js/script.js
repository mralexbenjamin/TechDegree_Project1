/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * (2) `quotes` arrays 
***/

var InspirationalQuotes = [
  {
    quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    source: "Ralph Waldo Emerson",
  },
  {
    quote: "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
    source: "Brené Brown",
    citation: "Rising Strong",
    year: "2015"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    year: "1957"
  },  
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
  },
  {
    quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    source: "Martin Luther King Jr.",
    citation: "Strength to Love",
    year: "1963"
  }
];


var FunnyQuotes = [
  {
    quote: "Why did the bicycle fall over?",
    source: "Because it was two tired."
  },
  {
    quote: "What do you call an alligator detective?",
    source: "An investi-gator."
  },
  {
    quote: "Why did the scarecrow win an award?",
    source: "Because he was outstanding in his field."
  },  
  {
    quote: "Why can't your nose be 12 inches long?",
    source: "Because then it would be a foot."
  },
  {
    quote: "Why does a chicken coop only have two doors?",
    source: "If it had four doors, it would be called a chicken sedan."
  }
];
/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes)
{
  var RandomArray= Math.floor( Math.random() * quotes.length );
  return quotes[RandomArray];
}


/***
 *  get random RBG value
 ***/

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

/***
 * `printQuote` function
***/

function printQuote(SelectedQuote)
{
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  var activeQuote = getRandomQuote(SelectedQuote);

  // HTML string creation
  
  var htmlString = ' ';
  htmlString += '<p class="quote"> ' + activeQuote.quote + ' </p>';
  htmlString += '<p class="source"> ' + activeQuote.source;
  
  if ( activeQuote.citation ){
    htmlString += '<span class="citation"> ' + activeQuote.citation + ' </span>';
  }
  
  if ( activeQuote.year ) {
    htmlString += '<span class="year"> ' + activeQuote.year + ' </span>';
  }

  htmlString += ' </p> ';

//change background color
  document.body.style.backgroundColor = rgbColor
  
//send HTML to page  
  document.getElementById('quote-box').innerHTML = htmlString;
}

function printInspirationalQuote() { 
  printQuote(InspirationalQuotes);
}

function printFunnyQuote() {
  printQuote(FunnyQuotes);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('inspirational-quote').addEventListener("click", printInspirationalQuote, false);
document.getElementById('funny-quote').addEventListener("click", printFunnyQuote, false);