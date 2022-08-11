import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../style/calculator.css';

const Calculator = () => {
  const [calcOutput, establisCalc] = useState({ total: null, next: null, operation: null });
  const refreshOutput = (operator) => {
    establisCalc((stablish) => calculate(stablish, operator));
  };

  const { total, next, operation } = calcOutput;
  const nullState = () => !total && !next && !operation;
  const result = () => {
    if (operation) return `${total} ${operation} ${next || ''}`;
    return next || total;
  };
  return (
    <div className="container">
      <div className="input">{nullState() ? '0' : result()}</div>
      <div className="calculator">
        <button className="calc-button" type="button" onClick={() => { refreshOutput('AC'); }}>AC</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('+/-'); }}>+/-</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('%'); }}>%</button>
        <button className="calc-button-operator" type="button" onClick={() => { refreshOutput('÷'); }}>÷</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('7'); }}>7</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('8'); }}>8</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('9'); }}>9</button>
        <button className="calc-button-operator" type="button" onClick={() => { refreshOutput('x'); }}>x</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('4'); }}>4</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('5'); }}>5</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('6'); }}>6</button>
        <button className="calc-button-operator" type="button" onClick={() => { refreshOutput('-'); }}>-</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('1'); }}>1</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('2'); }}>2</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('3'); }}>3</button>
        <button className="calc-button-operator" type="button" onClick={() => { refreshOutput('+'); }}>+</button>
        <button className="calc-button-zero" type="button" onClick={() => { refreshOutput('0'); }}>0</button>
        <button className="calc-button" type="button" onClick={() => { refreshOutput('.'); }}>.</button>
        <button className="calc-button-operator" type="button" onClick={() => { refreshOutput('='); }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
