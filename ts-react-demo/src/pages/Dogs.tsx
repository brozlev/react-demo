import React, { useCallback, useEffect, useState } from "react";
import { getDogs } from "../api";

export const Dogs = () => {

    const [dogs, setDogs] = useState([]);
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        getDogs().then(dogs => {
            console.log(dogs);

            setDogs(dogs);
        });
    }, [])

    const dosmth = () => {
        // 
    }

    const doSomethingWithDogs = useCallback(() => {
        dogs.forEach(dog => {
            // 
        })
    }, [dogs])

    useEffect(() => {

        const onKeyDown = (event: KeyboardEvent) => {
            const {keyCode} = event;

            console.log("running")

            if(keyCode === 38) {
                setCounter(counter + 1);
            }
            if(keyCode === 40) {
                setCounter(counter - 1);
            }
        }

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }

    }, [])

    return (
            // React components must return JSX with a single root. There might be cases when you don't want to wrape your whole returned JSX into div
            // just to create single root. In that case a React Fragment can be used. React Fragments are empty tags that don't render anything.
            // https://reactjs.org/docs/fragments.html
            <>
            {/* Any javascript expression can be put between curly brackets. If the expression has a return value, it's going to be rendered.
            Retrun value can be React components, HTML elements or literals.
            This is how conditional rendering can be done. */}
            {
                flag ? 1 : "string"
            }
            {
                dogs.map(dog => {
                    return <p>{dog}</p>
                })
            }
            <button onClick={() => setFlag(!flag)}>Switch the rendering</button>
            </>
    )
}