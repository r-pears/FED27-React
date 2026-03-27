import {Child} from "./Child";
import {useState, useMemo, useCallback, memo} from "react";
import {List} from "./List";

export function Parent(){
    const [count, setCount] = useState(0)

    // memo for components
    // useCallback for functions
    // useMemo for values/variables

    const user = useMemo(() => {
        return {username: 'John'}
    }, [])

    const calculateValue = useCallback(() => {
        return count * 2
    }, [count])

    return(
        <>
            {/*<h1>{count}</h1>*/}
            {/*<h2>{calculateValue()}</h2>*/}
            {/*<div>Parent component</div>*/}
            {/*<button onClick={() => setCount(count + 1)}>Increment</button>*/}
            {/*<Child user={user} />*/}
            <List />
        </>
    )
}