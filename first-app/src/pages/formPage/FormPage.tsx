import { CardList } from 'components/cardList/CardList';
import { Form } from 'components/Form/Form';
import React from 'react';

import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const FormPage = () => {
  const cardsData = useSelector((state: RootState) => state.formCards.cardsArray);

  return (
    <div className="top-block" data-testid="form-page-test">
      <span className="page-number-span">page: Forms</span>
      <Form />
      <CardList cardsData={cardsData} />
    </div>
  );
};

export default FormPage;
