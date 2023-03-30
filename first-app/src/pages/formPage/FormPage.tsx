import { CardList } from 'components/cardList/CardList';
import { Form } from 'components/Form/Form';
import { ICards } from 'components/types/types';
import React, { useState } from 'react';

const FormPage = () => {
  const [stateFP, setStateFP] = useState<ICards[]>([]);

  const addNewCard = (newCard: ICards) => {
    setStateFP((prevState) => [...prevState, newCard]);
  };

  return (
    <div className="top-block">
      <span className="page-number-span">page: Forms</span>
      <Form addNewCard={addNewCard} />
      <CardList cardsData={stateFP} />
    </div>
  );
};

export default FormPage;
