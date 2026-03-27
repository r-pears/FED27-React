import {memo} from "react";

export const Child = memo(({user}) =>{
    console.log('child component rendered');
    return <div>Child component {user.username}</div>
})
