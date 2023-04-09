import { ICards } from 'components/types/types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

type FormValues = {
  checkbox: boolean;
  date: string;
  img: FileList;
  name: string;
  price: string;
  radio1: string | null;
  radio2: string | null;
  select: string;
};

interface IFormProps {
  addNewCard: (newCard: ICards) => void;
}
interface IState {
  showMessage: boolean;
}

export const Form = ({ addNewCard }: IFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onSubmit' });
  const [state, setState] = useState<IState>({
    showMessage: false,
  });

  const onSubmit = (data: FormValues) => {
    const dataTypeICard: ICards = {
      ...data,
      img: data.img[0],
      radio1: Boolean(data.radio1),
      radio2: Boolean(data.radio2),
      id: String(Date.now()),
    };
    setState({ showMessage: true });
    setTimeout(() => {
      setState({
        showMessage: false,
      });
    }, 2000);
    addNewCard(dataTypeICard);
    reset();
  };

  return (
    <>
      <form data-testid="form-form" className="forms-page" onSubmit={handleSubmit(onSubmit)}>
        <div className="forms-input">
          <label>Origin:</label>
          <select
            data-testid="form-select"
            {...register('select', {
              required: 'The field is required',
            })}
          >
            <option data-testid="form-value-1" value="">
              {' '}
              Make choice{' '}
            </option>
            <option data-testid="form-value-2" value="USA">
              USA
            </option>
            <option data-testid="form-value-3" value="Germany">
              Germany
            </option>
            <option data-testid="form-value-4" value="Belarus">
              Belarus
            </option>
          </select>
        </div>
        <div className={styles.valid}>
          {errors?.select && <p className={styles.validP}>{String(errors?.select?.message)}</p>}
        </div>

        <div className="forms-input">
          <div className="radio-label">
            <label>Choose product status:</label>
          </div>
          <div className="radio-buttons" style={{ marginBottom: '15px' }}>
            <label>
              <input
                data-testid="form-radio1"
                {...register('radio1')}
                type="radio"
                name="productStatus"
                value="new"
                defaultChecked
              />
              New product
            </label>
            <label>
              <input
                data-testid="form-radio2"
                {...register('radio2')}
                type="radio"
                name="productStatus"
                value="used"
              />
              Used product
            </label>
          </div>
        </div>

        <div className="forms-input">
          <label>Title:</label>
          <input
            data-testid="form-name"
            type="text"
            className={styles.myInput}
            placeholder="Insert product name"
            {...register('name', {
              required: 'The field is required',
              minLength: { value: 3, message: 'Minimum input length 3 characters' },
              maxLength: { value: 10, message: 'Maximum input length 10 characters' },
              pattern: {
                value: /[A-Z]{1}/,
                message: 'Please start with a capital letter',
              },
            })}
          />
        </div>
        <div className={styles.valid}>
          {errors?.name && <p className={styles.validP}>{String(errors?.name?.message)}</p>}
        </div>

        <div className="forms-input">
          <label>Date:</label>
          <input
            data-testid="form-date"
            type="date"
            {...register('date', {
              required: 'The field is required',
            })}
          />
        </div>
        <div className={styles.valid}>
          {errors?.date && <p className={styles.validP}>{String(errors?.date?.message)}</p>}
        </div>

        <div className="forms-price">
          <label>Price:</label>
          <input
            data-testid="form-price"
            type="number"
            className={styles.myInput}
            placeholder="Insert product price"
            {...register('price', {
              required: 'The field is required',
              min: { value: 1, message: 'Minimum value 1$' },
            })}
          />
        </div>
        <div className={styles.valid}>
          {errors?.price && <p className={styles.validP}>{String(errors?.price?.message)}</p>}
        </div>

        <div className="forms-input">
          <label>Checked:</label>
          <input
            data-testid="form-checkbox"
            type="checkbox"
            {...register('checkbox', {
              required: 'The field is required',
            })}
          />
        </div>
        <div className={styles.valid}>
          {errors?.checkbox && <p className={styles.validP}>{String(errors?.checkbox?.message)}</p>}
        </div>

        <div className="forms-input">
          <label>Image:</label>
          <input
            data-testid="form-img"
            type="file"
            {...register('img', {
              required: 'The field is required',
            })}
            accept="image/jpeg,image/png,image/gif"
          />
        </div>
        <div className={styles.valid}>
          {errors?.img && <p className={styles.validP}>{String(errors?.img?.message)}</p>}
        </div>

        <button data-testid="form-button " type="submit">
          Submit
        </button>
        <div className={styles.valid}>
          {state.showMessage && <p className={styles.message}>Data has been saved</p>}
        </div>
      </form>
    </>
  );
};
