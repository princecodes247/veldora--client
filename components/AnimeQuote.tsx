import { animeQuotes } from '@/constants';
import React, { useEffect, useState } from 'react';

const AnimeQuote: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<any>(null); // Replace 'any' with the appropriate type

  useEffect(() => {
    // Function to pick a random quote
    const pickRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * animeQuotes.length);
      const quote = animeQuotes[randomIndex];
      setRandomQuote(quote);
    };

    pickRandomQuote();
  }, []);

  return (
    <div>
      {randomQuote && (
        <div>
          <p>{randomQuote.body}</p>
          <p>- {randomQuote.author}</p>
        </div>
      )}
    </div>
  );
};

export default AnimeQuote;
