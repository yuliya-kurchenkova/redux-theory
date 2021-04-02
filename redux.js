const redux = require('redux')

// Reducer
const initialState = {
    counter: 0
}

const reducer = (state = initialState, actions) => {

    if (actions.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if (actions.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if (actions.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + actions.value
        }
    }
 return state
}

// Store - то место где хранится
const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)

store.dispatch({type: 'SUB'})

store.dispatch({type: 'ADD_NUMBER', value: 10 })
