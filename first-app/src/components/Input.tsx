import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
}
interface InputState {
  inputValue: string;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { inputValue: localStorage.input || '' };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    this.setState({ inputValue: localStorage.input || '' });
  }

  componentWillUnmount() {
    localStorage.input = this.state.inputValue;
  }

  changeInput(value: string) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <>
        <form>
          <input
            className={styles.input}
            onChange={(event) => this.changeInput(event.target.value)}
            value={this.state.inputValue}
            type="text"
            placeholder={this.props.placeholder}
          />
          <button className={styles.button}>Search</button>
        </form>
      </>
    );
  }
}

export default Input;
