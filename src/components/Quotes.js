import React, {useState, useEffect} from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  // const [tags,setTags] = useState([]);

  useEffect(() => {
    gettingQuote();
  }, []);

  const gettingQuote = () => {
    let urlquote = `http://api.quotable.io/random`;
    fetch(urlquote)
    .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }

  const clickEvent = () => {
    gettingQuote();
  }
  
  // const handleClickadd = event => {
  //   event.currentTarget.classList.toggle('bg-salmon');
  // };

  return (
    <div>
      <div className="container">
        <div id="text"> <p>{quote}</p></div>
        <div id="author"><p>{author}</p></div>
      </div>
      <button onClick={clickEvent} className='buttons new-quote-book'>New Quote</button>
    </div>
  )
}

export default Quotes