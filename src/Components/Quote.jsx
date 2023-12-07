
import { useState } from 'react';
import './quote.css'; 

function QuoteOfTheDay(){
  
  const [showQuote, setShowQuote] = useState(false);

  const handleButtonClick = () => {
    setShowQuote(!showQuote);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className="container">
        <div>
      <button onClick={handleButtonClick}>
        {showQuote ? 'Hide quote' : 'Show quote'}
      </button>
      </div>
      {showQuote && (
        <div className="card"> 
          <p>Today: {getCurrentDate()}</p>
          <p>A quote for you: "You love everyone, and loving everyone means you don't love anyone. You are all equally indifferent."</p>
          <p>Oscar Wilde</p>
          
        </div>
      )}
    </div>
  );
};

export default QuoteOfTheDay;