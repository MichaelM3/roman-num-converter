import { useReducer } from 'react'
import { INCREMENT, DECREMENT } from './actions.js'

export default function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case INCREMENT:
            return {...state, count: action.payload}
        case DECREMENT:
            return {...state, count: action.payload}
        default:
            throw new Error()
    }
}
