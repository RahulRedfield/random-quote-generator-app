$(function () {
    let quotesArray = []
    const quoteEl = $("#quoteEl");
    const authorEl = $("#authorEl");
    let length = 0;
    let quote = "";

    const displayQuote = () => {
        const randomNumber = Math.floor(Math.random() * length) + 1;
        quote = quotesArray[randomNumber].text
        quoteEl.text(quote);
        authorEl.text(`- ${quotesArray[randomNumber].author}`);

    }

    const tweetQuote = () => {
        console.log(quote)
        let tweetContent = `https://twitter.com/intent/tweet?text=${quote}`;
        window.open(tweetContent)
    }

    const getQuotes = async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        quotesArray = data;
        length = quotesArray.length;
        displayQuote();

    }

    $("#gen-btn").click(displayQuote);
    $("#tweet").click(tweetQuote);

    getQuotes();
})