import React, { useState } from 'react'
import './Calculator.css'

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (input) => {
    setDisplayValue(prev => prev + input);
  }

  const clearDisplay = () => {
    setDisplayValue('');
  }

  const calculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(Number(result).toFixed(12).replace(/\.?0+$/, ''));
    } catch (error) {
      setDisplayValue('Error');
    }
  }

  const deleteLastChar = () => {
    setDisplayValue(prev => prev.slice(0, -1));
  }

  const calculatePercentage = () => {
    try {
      // If there's an operator in the expression
      const lastOperatorIndex = displayValue.split('').findLastIndex(char => 
        ['+', '-', '*', '/'].includes(char)
      );

      if (lastOperatorIndex !== -1) {
        // Get the base number and percentage number
        const baseNumber = eval(displayValue.slice(0, lastOperatorIndex));
        const percentageNumber = parseFloat(displayValue.slice(lastOperatorIndex + 1));
        
        // Calculate percentage based on operation
        const result = baseNumber * (percentageNumber / 100);
        setDisplayValue(displayValue.slice(0, lastOperatorIndex + 1) + result.toString());
      } else {
        // Simple percentage conversion
        const value = parseFloat(displayValue);
        setDisplayValue((value / 100).toString());
      }
    } catch (error) {
      setDisplayValue('Error');
    }
  }

  const togglePlusMinus = () => {
    if (displayValue === '') return;
    
    if (displayValue.startsWith('-')) {
      setDisplayValue(displayValue.slice(1));
    } else {
      setDisplayValue('-' + displayValue);
    }
  }

  return (
    <div id='calculator'>
      <input 
        id='display' 
        value={displayValue} 
        readOnly 
      />
      <div id='keys'>
        <button onClick={clearDisplay} className='operator-btn'>C</button>
        <button onClick={deleteLastChar} className='operator-btn'>⌫</button>
        <button onClick={calculatePercentage} className='operator-btn'>%</button>
        <button onClick={() => appendToDisplay('/')} className='operator-btn'>÷</button>
        <button onClick={() => appendToDisplay('7')} >7</button>
        <button onClick={() => appendToDisplay('8')} >8</button>
        <button onClick={() => appendToDisplay('9')} >9</button>
        <button onClick={() => appendToDisplay('*')} className='operator-btn'>X</button>     
        <button onClick={() => appendToDisplay('4')} >4</button>
        <button onClick={() => appendToDisplay('5')} >5</button>
        <button onClick={() => appendToDisplay('6')} >6</button>
        <button onClick={() => appendToDisplay('+')} className='operator-btn'>+</button>        
        <button onClick={() => appendToDisplay('1')} >1</button>
        <button onClick={() => appendToDisplay('2')} >2</button>
        <button onClick={() => appendToDisplay('3')} >3</button>
        <button onClick={() => appendToDisplay('-')} className='operator-btn'>-</button>
        <button onClick={togglePlusMinus} className='operator-btn'>+/-</button>
        <button onClick={() => appendToDisplay('0')} >0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate} className='operator-btn'>=</button>

      </div>
    </div>
  )
}
