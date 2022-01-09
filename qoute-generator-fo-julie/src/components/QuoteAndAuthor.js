import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" >

            <div className="quote">
                <h2>{quote.quote}</h2>
                <h3>- {quote.author}</h3>
            </div>
                <button
                className="btn1"
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> another quote</button>
        </div>
    )
}


