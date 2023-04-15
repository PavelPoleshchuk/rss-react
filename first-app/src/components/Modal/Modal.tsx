import React from 'react';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modalClose } from 'store/homePageSlice/homePageSlice';

interface IModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: IModalProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(modalClose())} className={styles.modal}></div>
      <div className={styles.card}>{children}</div>;
    </>
  );
};

export default Modal;
