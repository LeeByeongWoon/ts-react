import React from 'react';
import { useSampleState, useSampleDispatch } from './SampleContext';


function ReducerSample() {
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    const SetCount = () => dispatch({type: 'SET_COUNT', count: 5});
    const SetText = () => dispatch({type: 'SET_TEXT', text: 'bye'});
    const SetColor = () => dispatch({type: 'SET_COLOR', color: 'orange'});
    const ToggleGood = () => dispatch({type: 'TOGGLE_GOOD'});
    return (
        <div>
            <p>
                <code>count: </code>{state.count}
            </p>
            <p>
                <code>count: </code>{state.text}
            </p>
            <p>
                <code>count: </code>{state.color}
            </p>
            <p>
                <code>count: </code>{state.isGood ? "true" : "false"}
            </p>
            <div>
                <button onClick={SetCount}>SET_COUNT</button>
                <button onClick={SetText}>SET_TEXT</button>
                <button onClick={SetColor}>SET_COLOR</button>
                <button onClick={ToggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}
export default ReducerSample