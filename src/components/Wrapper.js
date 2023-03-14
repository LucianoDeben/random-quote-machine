import { useState } from 'react';
import './Wrapper.css';

export default function Wrapper ({quotes}) {

    const [index, setIndex] = useState(0);

    function generateRandom() {
        setIndex(Math.floor(Math.random() * quotes.length))
    }

    function getTweetUrl(tweetText) {
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      }

        return (
            <div id="quote-box">
                <h1 id="text">{quotes[index].quote}</h1>
                <p id="author">{"- "+quotes[index].author}</p>
                <a id="tweet-quote" rel="noreferrer" href= {getTweetUrl(quotes[index].quote)} target="_blank">Tweet</a>
                <button id="new-quote" onClick={generateRandom}> New Quote!</button>
            </div>
        );
}


