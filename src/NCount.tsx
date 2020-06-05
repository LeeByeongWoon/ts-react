import React,{useState} from 'react';

function NCount(){
    const [number,setNumber] = useState(0);
    const InCrease=()=>{
       setNumber(prevNum => prevNum+1);
    }
    const DeCrease=()=>{
        setNumber(prevNum => prevNum-1);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={InCrease}>+1</button>
            <button onClick={DeCrease}>-1</button>
        </div>
    )
}
export default NCount;