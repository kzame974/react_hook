const initialState = {
    language: 'french'
}

function rootReducer(state = initialState,action) {
    let nextState;
    switch (action.type) {
        case 'FRENCH':
            nextState = {
                ...state,
                language: 'french'
            }
            return nextState || state
        case 'ENGLISH':
            nextState = {
                ...state,
                language: 'english'
            }
            return nextState || state
        default:
            return state
    }
}

export default rootReducer;
