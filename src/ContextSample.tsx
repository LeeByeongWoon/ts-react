import React, { createContext, useContext } from 'react';


const Context = createContext('defaultValue');
function Child(){
    const text = useContext(Context);
return <div>hello? {text}</div>
}
function Parent(){
    return <Child />
}
function GrandParent(){
    return <Parent/>
}
export default function ContextSample(){
return(
    <Context.Provider value="good">
        <GrandParent/>
    </Context.Provider>
)
}