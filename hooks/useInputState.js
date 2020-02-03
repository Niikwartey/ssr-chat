import { useState } from 'react';

export default (initialValue, maximumLength) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= maximumLength) {
      setValue(newValue);
    }
  }

  const resetValue = () => {
    setValue(initialValue)
  }

  return {
    value,
    setValue: updateValue,
    resetValue,
    charactersLeft: maximumLength - value.length
  }
}