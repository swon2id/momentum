const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote__sentence");
const author = document.querySelector("#quote__author");

function selectQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNum].quote;
  author.innerText = quotes[randomNum].author;
}

selectQuote();
