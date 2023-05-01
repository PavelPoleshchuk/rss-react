import React from 'react';
import styles from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addInputQuery, addSubmittedQuery } from '../../store/homePageSlice/homePageSlice';
import { RootState } from 'store/store';

const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.homePage.inputQuery);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addSubmittedQuery());
  };
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addInputQuery(event.target.value));
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          data-testid="input"
          className={styles.input}
          onChange={changeInput}
          value={value}
          type="text"
          placeholder="Enter character(for example, Rick)"
        />
        <button data-testid="input-button" className={styles.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
