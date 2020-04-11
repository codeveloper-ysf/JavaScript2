'use strict';

const quotes = [
    {
        quote: "Peace at home, peace on the world.",
        author: "- M.K. Ataturk"
    },
    {
        quote: "Honesty is an expensive gift, don't expect it from cheap people.",
        author: "- Warren Buffett"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "- Steve Jobs"
    },
    {
        quote: "Look at the world through the eyes of the people you're speaking to.",
        author: "- Frank Caprio"
    },
    {
        quote: "Whoever has taught me one letter has made me his slave.",
        author: "- Hz. Ali"
    },
    {
        quote: "Simplicity is the key to brilliance.",
        author: "- Bruce Lee"
    }
];

const quoteChanger = document.querySelector('button');
quoteChanger.addEventListener('click', function(){
    let randomQuote = Math.floor(Math.random()*quotes.length);

    const newQuote = document.querySelector('#sentence');
    newQuote.innerText = quotes[randomQuote].quote;

    const newAuthor = document.querySelector('#author');
    newAuthor.innerText = quotes[randomQuote].author;
})