import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
  const [value, setValue] = useState(localStorage.input || '');

  useEffect(() => {
    localStorage.input = value;
  }, [value]);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <>
      <form>
        <input
          data-testid="input"
          className={styles.input}
          onChange={changeInput}
          value={value}
          type="text"
          placeholder="Your request"
        />
        <button data-testid="input-button" className={styles.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
