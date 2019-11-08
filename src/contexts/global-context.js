import React, { useReducer } from 'react';
import GlobalReducer, { DEFAULT_GLOBAL_STATE }  from './../reducers/global-reducer';

const GlobalContext = React.createContext({});

export const GlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(GlobalReducer, DEFAULT_GLOBAL_STATE);

    const stateChangeHandler = (actionType, value) => {
        dispatch({ type: actionType, counter: (value + 1)});
    }

    return (
        <GlobalContext.Provider value={{...state, setCounter: stateChangeHandler}}>
            {props.children}
        </GlobalContext.Provider>
    );
}
 
export default GlobalContext;



