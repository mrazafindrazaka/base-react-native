const initialState = { displayThat: false }

const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THAT':
            return {
                ...state,
                displayThat: !state.displayThat
            }
        default:
            return state
    }
}

export default TestReducer
