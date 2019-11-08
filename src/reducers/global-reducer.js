export const UPDATE_APP_COUNTER = 'UPDATE_APP_COUNTER';
export const UPDATE_ONE_COUNTER = 'UPDATE_ONE_COUNTER';
export const UPDATE_TWO_COUNTER = 'UPDATE_TWO_COUNTER'

export const DEFAULT_GLOBAL_STATE = {
    appCounter: 0,
    oneCounter: 0,
    twoCounter: 0
}

const updateCounter = (counter, state) => {
    return {...state, ...counter};
}


export default (state, action) => {
    switch(action.type) {
        case UPDATE_APP_COUNTER : 
            return updateCounter({appCounter: action.counter}, state);
        case UPDATE_ONE_COUNTER:
            return updateCounter({oneCounter: action.counter}, state);
        case UPDATE_TWO_COUNTER:
            return updateCounter({twoCounter: action.counter}, state);
        default:
            return state;
    }
}