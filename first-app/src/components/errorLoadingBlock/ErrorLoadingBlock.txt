import React from 'react';
interface IProps {
  error: string;
  isLoading: boolean;
  style?: object;
}
const ErrorLoadingBlock = ({ error, isLoading, style }: IProps) => {
  return (
    <div style={style}>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default ErrorLoadingBlock;
