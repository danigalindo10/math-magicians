import React from 'react';
import calculate from '../logic/calculate';
import '../style/calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.refreshOutput = this.refreshOutput.bind(this);
  }

  refreshOutput = (operator) => {
    this.setState((prevState) => (calculate(prevState, operator)));
  };

  render() {
    const { total, next, operation } = this.state;
    const nullState = () => !total && !next && !operation;
    const result = () => {
      if (operation) return `${total} ${operation} ${next || ''}`;
      return next || total;
    };

    return (
      <div className="container">
        <div className="input">{nullState() ? '0' : result()}</div>
        <div className="calculator">
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('AC'); }}>AC</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('+/-'); }}>+/-</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('%'); }}>%</button>
          <button className="calc-button-operator" type="button" onClick={() => { this.refreshOutput('÷'); }}>÷</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('7'); }}>7</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('8'); }}>8</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('9'); }}>9</button>
          <button className="calc-button-operator" type="button" onClick={() => { this.refreshOutput('x'); }}>x</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('4'); }}>4</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('5'); }}>5</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('6'); }}>6</button>
          <button className="calc-button-operator" type="button" onClick={() => { this.refreshOutput('-'); }}>-</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('1'); }}>1</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('2'); }}>2</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('3'); }}>3</button>
          <button className="calc-button-operator" type="button" onClick={() => { this.refreshOutput('+'); }}>+</button>
          <button className="calc-button-zero" type="button" onClick={() => { this.refreshOutput('0'); }}>0</button>
          <button className="calc-button" type="button" onClick={() => { this.refreshOutput('.'); }}>.</button>
          <button className="calc-button-operator" type="button" onClick={() => { this.refreshOutput('='); }}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
