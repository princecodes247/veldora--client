import { animeQuotes } from '@/constants';
import { IAnimeQuote } from '@/interfaces';
import React, { useEffect, useState } from 'react';

const AnimeQuote: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<IAnimeQuote | null>(null);

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
       
        <blockquote className="space-y-2">
        <p className="text-lg">
          &ldquo;{randomQuote.body}&rdquo;
        </p>
        <footer className="text-sm">- {randomQuote.author}</footer>
      </blockquote>
      )}
    </div>
  );
};

export default AnimeQuote;
