import { IResultsCard } from 'components/types/types';
import React from 'react';
import styles from './ModalCard.module.css';
import { getFormattedDate } from 'tools/getDate';

interface IModalCardProps {
  card: IResultsCard;
  getClickCloseModal: () => void;
}

const ModalCard = ({ card, getClickCloseModal }: IModalCardProps) => {
  return (
    <>
      {card && (
        <div className={styles.card}>
          <div onClick={getClickCloseModal} className={styles.cross}></div>
          <img
            data-testid={`img1-${card.id}`}
            src={card.image}
            className={styles.img}
            alt={card.name}
          />
          <p data-testid={`name1-${card.name}`}>
            Name:<span> {card.name}</span>
          </p>
          <p data-testid={`status1-${card.status}`}>
            Status:<span> {card.status}</span>
          </p>
          <p data-testid={`species1-${card.species}`}>
            Species:<span> {card.species}</span>
          </p>
          <p data-testid={`type1-${card.type}`}>
            Type:<span> {card.type}</span>
          </p>
          <p data-testid={`gender1-${card.gender}`}>
            Gender:<span> {card.gender}</span>
          </p>
          <p data-testid={`origin-name1-${card.origin.name}`}>
            Origin Name:<span> {card.origin.name}</span>
          </p>
          <p data-testid={`location-name1-${card.location.name}`}>
            Location Name:<span> {card.location.name}</span>
          </p>
          <p data-testid={`created1-${card.created}`}>
            Created:<span> {getFormattedDate(card.created)}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ModalCard;
