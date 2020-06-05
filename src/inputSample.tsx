import React, { useState, useRef } from 'react';

function InputSample() {
  const [input, setInputs] = useState({
    name: '',
    address: '',
  });
  //useRef로 DOM 선택
  const nameInput  = useRef<HTMLInputElement>(null);
  const { name, address } = input;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      address: '',
    });
    if(!nameInput.current) return; //null check
    nameInput.current.focus();
  };
  return (
    <div>
      <input name="name" value={name} onChange={onChange} placeholder="name" ref={nameInput} />
      <input name="address" value={address} onChange={onChange} placeholder="address" />

      <button onClick={onReset}>reset</button>
      <div>
        <b>값:</b>
        {name}({address})
      </div>
    </div>
  );
}
export default InputSample;
