import React, {useState, useEffect} from 'react'
import Quote from '../quotes/Quote'
import Spinner from './Spinner';


const initialQuote = {
    text: 'text',
    author: 'author'
}


const Quotes = () => {
    const [quote, setQuote] =useState(initialQuote);
    const [isLoading, setIsLoading] = useState(false)

    const updateQuote = async() => {
        setIsLoading(true)
        const url ="https://breakingbadapi.com/api/quote/random";
        const res = await fetch(url);
        const [newQuote] = await res.json();
        
        const {quote, author} = newQuote;

        setIsLoading(false)
        setQuote({
            text: quote,
            author: author
        })

    }

    useEffect(() => {
        updateQuote();
    },[])

    return (
        <div className="containerQuotes">
            <button onClick={() => updateQuote()}>Get Another</button>

            {isLoading ? <Spinner/> :<Quote quote={quote} />}
   
        </div>
    )
}

export default Quotes




