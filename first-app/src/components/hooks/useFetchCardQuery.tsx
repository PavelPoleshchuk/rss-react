import { IResultsCard } from 'components/types/types';
import { useEffect, useState } from 'react';

export const useFetchCardQuery = () => {
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalCard, setModalCard] = useState<IResultsCard | null>(null);
  const [modalError, setModalError] = useState('');
  const [modalId, setModalId] = useState('');

  const getClickFromCard = (id: string) => {
    setModalId(id);
  };
  const getClickCloseModal = () => {
    setModalId('');
  };

  useEffect(() => {
    if (!modalId) return;
    setModalError('');
    setIsModalLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${modalId}`)
      .then((res) => {
        if (!res.ok) {
          setIsModalLoading(false);
          throw Error('Request problems');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetch2=', data);
        setModalCard(data);
        setIsModalLoading(false);
      })
      .catch((err) => {
        if (err instanceof Error) {
          setModalError(err.message);
        }
      });
  }, [modalId]);
  return { modalId, isModalLoading, modalCard, modalError, getClickFromCard, getClickCloseModal };
};

export default useFetchCardQuery;
