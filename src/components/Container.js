import React, {useRef, useEffect} from 'react';
import One from './One';
import Two from './Two';

const Container = () => {
    let initState = useRef(true);

    useEffect(() => {
        if (initState.current) {
        initState.current = false;
        console.log("==> Container CompTwont Created +")
        } else {
        console.log("==> Container CompTwont Updated ++")
        }
    });

    return ( 
        <div>
            ----- Container Component -----
            <One/>
            <Two/>
            -----------------------------------------
        </div>
    );
}
 
export default Container;