import React, { useState } from "react";

const initialState = {
  max: '100',
  value: '100',
  maxStep: '10',
  getStep: function () {
    return +this.max / +this.maxStep;
  },
};

function RangeInput() {
  const [options, setOptions] = useState(initialState);

  const setValue = (newValue: string) => {
      setOptions({...options, value: newValue})
  }

  return (
    <div>
      <input
        type="range"
        min='0'
        max={options.max}
        value={options.value}
        step={options.getStep()}
        onChange={(e => setValue(e.target.value))}
      />
      <span>30{options.value}</span>
    </div>
  );
}

export default RangeInput;
