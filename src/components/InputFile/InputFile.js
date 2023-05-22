import React, { useRef } from 'react';
import './styles.css';

const InputFile = () => {
  const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  const imgRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      imgRef.current.src = window.URL.createObjectURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="form-group">
      <div>
        <label className="form-label" htmlFor="form-label" htmlFor={id}>
          Avatar
        </label>
      </div>
      <input
        onChange={(e) => {
          console.log('###file', e.target.files?.[0]);
          imgRef.current.src = window.URL.createObjectURL(e.target.files?.[0]);
        }}
        type="file"
        name=""
        id={id}
        hidden
      />
      <label htmlFor={id}>
        <img
          ref={imgRef}
          className="avatar-preview"
          src="https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/avatar-placeholder.webp"
          alt=""
        />
      </label>
    </div>
  );
};

export default InputFile;
