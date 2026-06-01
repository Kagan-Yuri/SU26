import {useState} from 'react';
import {Button} from 'react-bootstrap';
function UseState() {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);

    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h2>UseState Example</h2>
            <p>Count: {count}</p>
            <Button onClick={increment} variant="primary" className="me-2">
                Increment
            </Button>
            <Button onClick={decrement} variant="secondary" className="me-2">
                Decrement
            </Button>
            <Button onClick={reset} variant="danger">
                Reset
            </Button>
        </div>
    )

}

export default UseState;
