import React, { ChangeEvent, FC } from 'react';

interface Checkbox {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

const Checkbox: FC<Checkbox> = ({ checked, onChange,label }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  };

  return (
    <div>
    <label style={{ display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
    </div>
  );
}

export default Checkbox;
