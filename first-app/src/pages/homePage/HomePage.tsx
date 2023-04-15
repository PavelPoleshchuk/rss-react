import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';
import Products from 'components/Products/Products';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchIdQuery } from 'store/api/fetchId';
import { useFetchNameQuery } from 'store/api/fetchName';
import { RootState } from 'store/store';

const HomePage = () => {
  const apiQuery = useSelector((state: RootState) => state.homePage.submittedQuery);
  const cardId = useSelector((state: RootState) => state.homePage.cardQuery);

  const modalOpen = useSelector((state: RootState) => state.homePage.modalOpen);

  const { data, error, isLoading } = useFetchNameQuery(apiQuery);
  const { data: modalCard, error: modalError, isLoading: modalIsLoading } = useFetchIdQuery(cardId);
  return (
    <>
      <div data-testid="home-page" className="top-block">
        <div style={{ height: '25px' }}>
          {error ? <>Oh no, there was an error</> : isLoading ? <>Loading...</> : ''}
        </div>
        <Input />
        <span className="page-number-span">page: Home</span>
      </div>

      <Products cards={data} />

      {modalOpen && (
        <Modal>
          {modalCard && <ModalCard card={modalCard} />}
          {modalError ? <>Oh no, there was an error</> : modalIsLoading ? <>Loading...</> : ''}
        </Modal>
      )}
    </>
  );
};

export default HomePage;
