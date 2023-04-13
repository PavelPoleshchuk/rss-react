import { ICard } from 'components/types/types';
import React from 'react';
import styles from './CardList.module.css';

interface IProps {
  cardsData: ICard[];
}

export const CardList = ({ cardsData }: IProps) => {
  return (
    <div className={styles.container}>
      {cardsData.map((card) => {
        const { name, date, price, select, radio1, radio2, checkbox, img, id } = card;
        return (
          <div className={styles.product} key={id}>
            <img
              data-testid={`img-${id}`}
              src={img ? URL.createObjectURL(img) : ''}
              className={styles.img}
              alt={'picture'}
            />
            <p data-testid={`name-${id}`}>{name}</p>
            <p style={{ fontWeight: 'bold' }}>
              Price:
              <span data-testid={`price-${id}`} style={{ fontWeight: 'bold' }}>
                {price} <span>$</span>
              </span>
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Country:
              <span data-testid={`country-${id}`} style={{ fontWeight: 'bold' }}>
                {select}
              </span>
            </p>
            {radio1 ? (
              <p style={{ fontWeight: 'bold' }}>
                New product:
                <span data-testid={`new-product-${id}`} style={{ fontWeight: 'bold' }}>
                  yes
                </span>
              </p>
            ) : (
              ''
            )}

            {radio2 ? (
              <p style={{ fontWeight: 'bold' }}>
                Used product:
                <span data-testid={`used-product-${id}`} style={{ fontWeight: 'bold' }}>
                  yes
                </span>
              </p>
            ) : (
              ''
            )}
            <p style={{ fontWeight: 'bold' }}>
              Checked:
              <span data-testid={`export-${id}`} style={{ fontWeight: 'bold' }}>
                {checkbox ? 'yes' : 'no'}
              </span>
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Date:
              <span data-testid={`date-${id}`} style={{ fontWeight: 'bold' }}>
                {date}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
