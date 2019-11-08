import React, {useRef, useEffect, useContext} from 'react';
import GlobalContext from '../contexts/global-context';
import { UPDATE_ONE_COUNTER } from './../reducers/global-reducer';


const One = () => {
    let initState = useRef(true);

    const { oneCounter, setCounter } = useContext(GlobalContext);

    const incrementOne = () => {
        setCounter(UPDATE_ONE_COUNTER, oneCounter )
    }

    useEffect(() => {
        if (initState.current) {
        initState.current = false;
        console.log("==> One Component Created +")
        } else {
        console.log("==> One Component Updated ++")
        }
    }, [oneCounter]);

    return ( 
    <div> 
        Component One - { oneCounter } <br/>
        <button onClick={incrementOne}>Increment Counter One</button>
    </div> 
    );
}
 
export default One;