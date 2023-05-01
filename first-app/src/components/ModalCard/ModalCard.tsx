import { IResultsCard } from 'components/types/types';
import React from 'react';
import styles from './ModalCard.module.css';
import { getFormattedDate } from 'tools/getDate';
import { useDispatch } from 'react-redux';
import { modalClose } from 'store/homePageSlice/homePageSlice';

interface IModalCardProps {
  card: IResultsCard;
}

const ModalCard = ({ card }: IModalCardProps) => {
  const dispatch = useDispatch();

  return (
    <>
      {card && (
        <div className={styles.card}>
          <div onClick={() => dispatch(modalClose())} className={styles.cross}></div>
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
