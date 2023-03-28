import { ICards } from 'components/types/types';
import MyInput from 'components/UI/MyInput/MyInput';
import React, { Component } from 'react';
import styles from './Form.module.css';

interface IFormProps {
  addNewCard: (newCard: ICards) => void;
}
interface IFormState {
  isNoErrors: boolean;
  formErrors: {
    name: boolean;
    date: boolean;
    price: boolean;
    select: boolean;
    radio1: boolean;
    radio2: boolean;
    checkbox: boolean;
    img: boolean;
    id: boolean;
  };
}
export class Form extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
  }
  defaultState = {
    isNoErrors: false,
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
  state: IFormState = this.defaultState;

  formRef = React.createRef<HTMLFormElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  radio1Ref = React.createRef<HTMLInputElement>();
  radio2Ref = React.createRef<HTMLInputElement>();
  inputRef = React.createRef<HTMLInputElement>();
  inputDateRef = React.createRef<HTMLInputElement>();
  inputPriceRef = React.createRef<HTMLInputElement>();
  inputCheckboxRef = React.createRef<HTMLInputElement>();
  inputLoadFileRef = React.createRef<HTMLInputElement>();

  validateIfNotEmpty = (formData: ICards) => {
    this.setState(this.defaultState);
    let dataIsValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'radio1' || key === 'radio2') return;
      if (!value) {
        dataIsValid = false;
        this.setState(({ formErrors }) => ({ formErrors: { ...formErrors, [key]: true } }));
      }
    });
    if (dataIsValid) {
      this.setState({ isNoErrors: true });
      setTimeout(() => {
        this.setState({ isNoErrors: false });
      }, 3000);
    }
    return dataIsValid;
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      select: this.selectRef.current!.value,
      radio1: this.radio1Ref.current!.checked,
      radio2: this.radio2Ref.current!.checked,
      name: this.inputRef.current!.value,
      date: this.inputDateRef.current!.value,
      price: this.inputPriceRef.current!.value,
      checkbox: this.inputCheckboxRef.current!.checked,
      img: this.inputLoadFileRef.current!.files![0],
      id: String(new Date()),
    };
    if (this.validateIfNotEmpty(data)) {
      this.props.addNewCard(data);
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <>
        <form ref={this.formRef} className="forms-page">
          <div className="forms-input">
            <label htmlFor="category-select">Origin:</label>
            <select ref={this.selectRef}>
              <option value=""> Make choice </option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Belarus">Belarus</option>
            </select>
          </div>
          {this.state.formErrors.select && <p className="input-error">Choose origin</p>}

          <div className="forms-input">
            <div className="radio-label">
              <label>Choose product status:</label>
            </div>
            <div className="radio-buttons">
              <label>
                <input
                  ref={this.radio1Ref}
                  type="radio"
                  name="productStatus"
                  value="new"
                  defaultChecked
                />
                New product
              </label>
              <label>
                <input ref={this.radio2Ref} type="radio" name="productStatus" value="used" />
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
              placeholder: 'Insert product name',
            }}
            ref={this.inputRef}
          />
          {this.state.formErrors.name && <p className="input-error">Enter title</p>}

          <MyInput
            data={{
              className: 'forms-input',
              htmlFor: 'date-input',
              labelTitle: 'Date:',
              type: 'date',
              id: 'date-input',
              placeholder: 'Insert product date',
            }}
            ref={this.inputDateRef}
          />
          {this.state.formErrors.date && <p className="input-error">Enter date</p>}

          <MyInput
            data={{
              className: 'forms-input',
              htmlFor: 'price-input',
              labelTitle: 'Price:',
              type: 'number',
              id: 'price-input',
              placeholder: 'Insert product price',
            }}
            ref={this.inputPriceRef}
          />
          {this.state.formErrors.price && <p className="input-error">Enter price</p>}

          <MyInput
            data={{
              className: 'forms-input',
              htmlFor: 'checkbox-input',
              labelTitle: 'Checked:',
              type: 'checkbox',
              id: 'checkbox-input',
            }}
            ref={this.inputCheckboxRef}
          />
          {this.state.formErrors.checkbox && <p className="input-error">Сonfirm your agreement</p>}
          <MyInput
            data={{
              className: 'forms-input',
              htmlFor: 'image-input',
              labelTitle: 'Image:',
              type: 'file',
              id: 'image-input',
              placeholder: 'Choice file',
              accept: 'image/jpeg,image/png,image/gif',
            }}
            ref={this.inputLoadFileRef}
          />
          {this.state.formErrors.img && <p className="input-error">Add file</p>}

          <button type="submit" onClick={this.onSubmit}>
            Submit
          </button>
          {this.state.isNoErrors && <p className={styles.message}>Data has been saved</p>}
        </form>
      </>
    );
  }
}
