import React, { useEffect, useRef, useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
  const [value, setValue] = useState(localStorage.input || '');
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.input = valueRef.current;
      console.log('finish=', localStorage.input);
    };
  }, []);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
