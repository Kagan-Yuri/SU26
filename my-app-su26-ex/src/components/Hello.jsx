import { React } from 'react';

function Hello(s) {
    const { who, age} = s;
    return(
        <h3>
            Hello, {who}!
            <br />
            Hello {who}! {age && `Age: ${age}`}
        </h3>
    )
}

export default Hello;