const initialState = {
    x: 0,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_X':
            return {
                // ...state,
                x: state.x + 1
            }
        default:
            return state;
    }
}