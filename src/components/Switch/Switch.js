import React, { useState } from 'react';
import './styles.css';

const Switch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div class="switch">
      <input
        hidden
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        name=""
        id="switch"
        checked={checked}
      />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default Switch;
