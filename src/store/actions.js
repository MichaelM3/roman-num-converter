// Actions
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

// Action Creators
export const addToCount = (count) => {
    return { type: INCREMENT, payload: count + 1 }
}

export const subtractToCount = (count) => {
    return { type: DECREMENT, payload: count - 1 }
}

