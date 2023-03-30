import React from 'react';

interface IMyInputProps {
  data: {
    className: string;
    htmlFor: string;
    labelTitle: string;
    type: string;
    id: string;
    ref: React.RefObject<HTMLInputElement>;
    placeholder?: string;
    accept?: string;
    func?: () => void;
  };
}

const MyInput = React.forwardRef<HTMLInputElement, IMyInputProps>((props: IMyInputProps, ref) => (
  <div className={props.data.className}>
    <label htmlFor={props.data.htmlFor}>{props.data.labelTitle}</label>
    <input
      ref={props.data.ref}
      onChange={props.data.func}
      type={props.data.type}
      id={props.data.id}
      placeholder={props.data.placeholder}
      accept={props.data.accept}
    />
  </div>
));

export default MyInput;
