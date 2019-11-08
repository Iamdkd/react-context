import React, {useRef, useEffect, useContext} from 'react';
import GlobalContext from '../contexts/global-context';
import { UPDATE_TWO_COUNTER } from '../reducers/global-reducer';

const Two = () => {
    let initState = useRef(true);

    const { twoCounter, setCounter} = useContext(GlobalContext);

    const incrementTwo = () => {
        setCounter(UPDATE_TWO_COUNTER, twoCounter);
    }

    useEffect(() => {
        if (initState.current) {
            initState.current = false;
            console.log("==> Two CompTwont Created +")
        } else {
            console.log("==> Two CompTwont Updated ++")
        }
    }, [twoCounter]);
    return ( 
    <div> 
         Component Two - { twoCounter } <br/>
        <button onClick={ incrementTwo }>Increment Counter Twe</button>
    </div> 
    );
}
 
export default Two;