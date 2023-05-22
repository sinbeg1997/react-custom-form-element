import React, { useState, useId } from 'react';
import './styles.css';

const Switch = () => {
  // const id = useId(); // React 18
  const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  const [checked, setChecked] = useState(false);
  return (
    <div class="switch">
      <input
        hidden
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        name=""
        id={id}
        checked={checked}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default Switch;
