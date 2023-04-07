import { IRMApi } from 'components/types/types';
import React, { useEffect, useState } from 'react';

export const useFetchInputQuery = () => {
  const [cards, setCards] = useState<IRMApi | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState('');
  const [inputQuery, setInputQuery] = useState(String(localStorage.input));

  const getQueryFromInput = (query: React.InputHTMLAttributes<HTMLInputElement>) =>
    setInputQuery(String(query));

  console.log('inputQuery', inputQuery);
  const query = inputQuery ? `?name=${inputQuery}` : '';

  useEffect(() => {
    setError('');
    fetch(`https://rickandmortyapi.com/api/character/${query}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Request problems');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetch1=', data);
        setCards(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        }
      });
  }, [query]);
  return { cards, isLoading, error, getQueryFromInput };
};
