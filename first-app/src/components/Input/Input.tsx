import React, { useState } from 'react';
import styles from './Input.module.css';

interface IInputProps {
  getQueryFromInput: (query: React.InputHTMLAttributes<HTMLInputElement>) => void;
}

const Input = ({ getQueryFromInput }: IInputProps) => {
  const [value, setValue] = useState(localStorage.input || '');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    getQueryFromInput(value);
    localStorage.input = value;
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
