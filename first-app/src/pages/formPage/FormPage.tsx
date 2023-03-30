// import { CardList } from 'components/cardList/CardList';
// import { Form } from 'components/Form/Form';
// import { ICards } from 'components/types/types';
// import React, { Component } from 'react';

// interface IState {
//   cardsData: ICards[];
// }

// class FormPage extends Component<object, IState> {
//   state: IState = {
//     cardsData: [],
//   };

//   addNewCard = (newCard: ICards) => {
//     this.setState(({ cardsData }) => ({
//       cardsData: [...cardsData, newCard],
//     }));
//   };
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

//   render() {
//     return (
//       <div className="top-block">
//         <span className="page-number-span">page: Forms</span>
//         <Form addNewCard={this.addNewCard} />
//         <CardList cardsData={this.state.cardsData} />
//       </div>
//     );
//   }
// }

// export default FormPage;
