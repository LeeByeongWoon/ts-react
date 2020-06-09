import { useCallback, useReducer } from 'react';

type State={
    username:string
    email:string
    [key:string]:string
}
// index signature ([indexer_name:indexer_type]:return_type)을 명시해줘야 함
type Action =
     |{ type: "CHANGE_INPUT"; name: string; value: string }
     |{ type: "RESET_INPUT";}

function reducer(state: State,action: Action){
    switch(action.type){
        case "CHANGE_INPUT":
        return {
            ...state,
            [action.name]:action.value
        }
        case "RESET_INPUT":
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
              }, state); // 반환타입은 항상 state와 일치해야 함
        default:
            throw new Error('unhandled action');
    }
}
function useInputs(initialForm:State){
    const [form, dispatch]=useReducer(reducer,initialForm);
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value}= e.target;
        dispatch({
            type:"CHANGE_INPUT",
            name,
            value
        })
    },[]);
    
    const reset = useCallback(()=> dispatch({type:"RESET_INPUT"}),[]);

    return {
        form,
        onChange,
        reset
    }; // 배열로 내보내면 타입이 섞여서 읽혀서 오류남;;
};
export default useInputs;

