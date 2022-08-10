import React from 'react';
import '../style/calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <div className="input">{result}</div>
        <div className="calculator">
          <button className="calc-button" type="button">AC</button>
          <button className="calc-button" type="button">+/-</button>
          <button className="calc-button" type="button">%</button>
          <button className="calc-button-operator" type="button">&divide;</button>
          <button className="calc-button" type="button">7</button>
          <button className="calc-button" type="button">8</button>
          <button className="calc-button" type="button">9</button>
          <button className="calc-button-operator" type="button">&times;</button>
          <button className="calc-button" type="button">4</button>
          <button className="calc-button" type="button">5</button>
          <button className="calc-button" type="button">6</button>
          <button className="calc-button-operator" type="button">&minus;</button>
          <button className="calc-button" type="button">1</button>
          <button className="calc-button" type="button">2</button>
          <button className="calc-button" type="button">3</button>
          <button className="calc-button-operator" type="button">+</button>
          <button className="calc-button-zero" type="button">0</button>
          <button className="calc-button" type="button">.</button>
          <button className="calc-button-operator" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
