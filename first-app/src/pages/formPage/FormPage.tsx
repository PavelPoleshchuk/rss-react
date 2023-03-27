import { CardList } from 'components/cardList/CardList';
import { Form } from 'components/Form/Form';
import { ICards } from 'components/types/types';
import React, { Component } from 'react';

interface IState {
  cardsData: ICards[];
}

class FormPage extends Component<object, IState> {
  state: IState = {
    cardsData: [],
  };

  addNewCard = (newCard: ICards) => {
    this.setState(({ cardsData }) => ({
      cardsData: [...cardsData, newCard],
    }));
  };
  render() {
    return (
      <div className="top-block">
        <span className="page-number-span">page: Forms</span>
        <Form addNewCard={this.addNewCard} />
        <CardList cardsData={this.state.cardsData} />
      </div>
    );
  }
}

export default FormPage;
