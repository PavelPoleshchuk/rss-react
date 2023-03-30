import { ICards } from 'components/types/types';
import MyInput from 'components/UI/MyInput/MyInput';
import React, { useState } from 'react';
import styles from './Form.module.css';

interface IFormProps {
  addNewCard: (newCard: ICards) => void;
}

export const Form = ({ addNewCard }: IFormProps) => {
  const defaultState = {
    formErrors: {
      name: false,
      date: false,
      price: false,
      select: false,
      radio1: false,
      radio2: false,
      checkbox: false,
      img: false,
      id: false,
    },
  };

  const [state, setState] = useState(defaultState);
  const [isNoErrors, setIsNoErrors] = useState(false);

  const formRef = React.createRef<HTMLFormElement>();
  const selectRef = React.createRef<HTMLSelectElement>();
  const radio1Ref = React.createRef<HTMLInputElement>();
  const radio2Ref = React.createRef<HTMLInputElement>();
  const inputRef = React.createRef<HTMLInputElement>();
  const inputDateRef = React.createRef<HTMLInputElement>();
  const inputPriceRef = React.createRef<HTMLInputElement>();
  const inputCheckboxRef = React.createRef<HTMLInputElement>();
  const inputLoadFileRef = React.createRef<HTMLInputElement>();

  const validateIfNotEmpty = (formData: ICards) => {
    setState(defaultState);
    let dataIsValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'radio1' || key === 'radio2' || key === 'id') return;
      if (!value) {
        dataIsValid = false;
        setState(({ formErrors }) => ({
          formErrors: { ...formErrors, [key]: true },
        }));
      }
    });
    if (dataIsValid) {
      setIsNoErrors(true);
      setTimeout(() => {
        setIsNoErrors(false);
      }, 3000);
    }
    return dataIsValid;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ICards = {
      select: selectRef.current!.value,
      radio1: radio1Ref.current!.checked,
      radio2: radio2Ref.current!.checked,
      name: inputRef.current!.value,
      date: inputDateRef.current!.value,
      price: inputPriceRef.current!.value,
      checkbox: inputCheckboxRef.current!.checked,
      img: inputLoadFileRef.current!.files![0],
      id: String(new Date()),
    };
    console.log('data=', data);
    console.log('validateIfNotEmpty(data)=', validateIfNotEmpty(data));
    if (validateIfNotEmpty(data)) {
      addNewCard(data);
      formRef.current?.reset();
    }
  };

  return (
    <>
      <form ref={formRef} className="forms-page">
        <div className="forms-input">
          <label htmlFor="category-select">Origin:</label>
          <select ref={selectRef}>
            <option value=""> Make choice </option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Belarus">Belarus</option>
          </select>
        </div>
        {state.formErrors.select && <p className="input-error">Choose origin</p>}

        <div className="forms-input">
          <div className="radio-label">
            <label>Choose product status:</label>
          </div>
          <div className="radio-buttons">
            <label>
              <input ref={radio1Ref} type="radio" name="productStatus" value="new" defaultChecked />
              New product
            </label>
            <label>
              <input ref={radio2Ref} type="radio" name="productStatus" value="used" />
              Used product
            </label>
          </div>
        </div>
        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'title-input',
            labelTitle: 'Title:',
            type: 'text',
            id: 'title-input',
            ref: inputRef,
            placeholder: 'Insert product name',
          }}
        />
        {state.formErrors.name && <p className="input-error">Enter title</p>}

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'date-input',
            labelTitle: 'Date:',
            type: 'date',
            id: 'date-input',
            ref: inputDateRef,
            placeholder: 'Insert product date',
          }}
        />
        {state.formErrors.date && <p className="input-error">Enter date</p>}

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'price-input',
            labelTitle: 'Price:',
            type: 'number',
            id: 'price-input',
            ref: inputPriceRef,
            placeholder: 'Insert product price',
          }}
        />
        {state.formErrors.price && <p className="input-error">Enter price</p>}

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'checkbox-input',
            labelTitle: 'Checked:',
            type: 'checkbox',
            id: 'checkbox-input',
            ref: inputCheckboxRef,
          }}
        />
        {state.formErrors.checkbox && <p className="input-error">Сonfirm your agreement</p>}
        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'image-input',
            labelTitle: 'Image:',
            type: 'file',
            id: 'image-input',
            ref: inputLoadFileRef,
            placeholder: 'Choice file',
            accept: 'image/jpeg,image/png,image/gif',
          }}
        />
        {state.formErrors.img && <p className="input-error">Add file</p>}

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        {isNoErrors && <p className={styles.message}>Data has been saved</p>}
      </form>
    </>
  );
};
