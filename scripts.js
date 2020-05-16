const quotes = [
  {
    name: "Doc Rivers",
    quote:
      "I won’t get upset at you about a mistake. I’ll get upset at you for the next mistake that comes from still thinking about the last mistake.",
  },
  {
    name: "Billie Jean King",
    quote:
      "Champions keep playing until they get it right. Then they play more.",
  },
  {
    name: "Herm Edwards",
    quote:
      "Athletics are really the foundation of how kids' attitudes are formed and shaped. And that has to work with the coach and the parents.",
  },
  {
    name: "Albert Einstein",
    quote: "Strive not to be a success, but rather to be of value.",
  },
  {
    name: "Barrack Obama",
    quote:
      "You can’t let your failures define you. You have to let your failures teach you.",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuther");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
