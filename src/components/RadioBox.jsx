// RadioButtonComponent.js

import React from 'react';

const RadioButtonComponent = ({ options, value, onChange }) => {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  }

  return (
    <div>
      {options.map(option => (
        <div key={option.value}>
          <input
            type="radio"
            name="radioButton"
            value={option.value}
            checked={option.value === value}
            onChange={handleRadioChange}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioButtonComponent;
