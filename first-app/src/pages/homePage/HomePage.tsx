import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/ModalCard/ModalCard';
import Products from 'components/Products/Products';
import ErrorLoadingBlock from 'components/errorLoadingBlock/ErrorLoadingBlock';
import useFetchCardQuery from 'components/hooks/useFetchCardQuery';
import { useFetchInputQuery } from 'components/hooks/useFetchInputQuery';
import React from 'react';

const HomePage = () => {
  const { cards, isLoading, error, getQueryFromInput } = useFetchInputQuery();

  const { modalId, isModalLoading, modalCard, modalError, getClickFromCard, getClickCloseModal } =
    useFetchCardQuery();

  return (
    <>
      <div data-testid="home-page" className="top-block">
        <ErrorLoadingBlock style={{ height: '25px' }} error={error} isLoading={isLoading} />
        <Input getQueryFromInput={getQueryFromInput} />
        <span className="page-number-span">page: Home</span>
      </div>
      <Products cards={cards} getClickFromCard={getClickFromCard} />
      {modalId && (
        <Modal getClickCloseModal={getClickCloseModal}>
          {modalCard && <ModalCard card={modalCard} />}
          <ErrorLoadingBlock error={modalError} isLoading={isModalLoading} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
