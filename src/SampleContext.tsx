import React, { createContext, Dispatch, useReducer, useContext } from 'react';

type FooValue={
    foo: number;
};
type Color = 'red' | 'orange' | 'yellow';
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}
type Action =
    { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error('unhandled action error')
    }
}
//제너릭으로 선언해야됨
const sampleStateContext = createContext<State | null>(null) ;
const sampleDispatchContext = createContext< Dispatch<Action>| null>(null);

type sampleProviderProps = {
    children: React.ReactNode
}
export function SampleProvider( { children }: sampleProviderProps){
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    return(
        <sampleStateContext.Provider value={state}>
            <sampleDispatchContext.Provider value ={dispatch}>
                {children}
            </sampleDispatchContext.Provider>
        </sampleStateContext.Provider>

    )
    }

export function useSampleState(){
    const state = useContext(sampleStateContext);
    // nullcheck
    if (!state) throw new Error('cannot find sampleProvider');
    return state;
}
export function useSampleDispatch(){
    const dispatch = useContext(sampleDispatchContext);
    // nullcheck
    if (! dispatch) throw new Error('cannot find sampeProvider');
    return dispatch;
}