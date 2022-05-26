import { useState, useReducer } from 'react'
import reducer from './store/reducer.js'
import { addToCount, subtractToCount } from './store/actions.js'


function App() {
    // const romanNums = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000, V: 5000, X: 10000, L: 50000, C: 100000, D: 500000, M: 1000000 }

    const initialState = {
        count: 0,
        user: "",
        something: false 
    }

    const [state, dispatch] = useReducer(reducer, initialState)   

    return (
        <div className="">
            Count: {state.count}
            <button onClick={() => dispatch(subtractToCount(state.count))}>-</button>
            <button onClick={() => dispatch(addToCount(state.count))}>+</button>
        </div>
    )
}

export default App
