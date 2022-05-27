import { useReducer } from 'react'
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
        <div className="flex items-center justify-center h-screen space-x-8">
            <button onClick={() => dispatch(subtractToCount(state.count))} className="border-2 border-black h-8 w-12 bg-red-600">-</button>
            <h2 className='text-xl font-bold'>Count: {state.count}</h2>
            <button onClick={() => dispatch(addToCount(state.count))} className="border-2 border-black h-8 w-12 bg-green-600">+</button>
        </div>
    )
}

export default App
