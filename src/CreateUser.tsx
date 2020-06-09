import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser(){
    const nextId =useRef(4);
    const {form , onChange, reset} = useInputs({
        username:'',
        email:''
    });

    const {username,email}= form
    const dispatch = useContext(UserDispatch);
    if(!dispatch) return null;

    const onCreate = ()=> {
    dispatch({
      type: "CREATE_USER",
      user:{
        id:nextId.current,
        username,
        email,
        active:false
      }
    })
    nextId.current+=1;
    reset();
  };

    return (
        <div>
            <input 
             name="username"
             placeholder="username"
             onChange={onChange}
             value={username}
            />
            <input 
             name="email"
             placeholder="email"
             onChange={onChange}
             value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default React.memo(CreateUser);