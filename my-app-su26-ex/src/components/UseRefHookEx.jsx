import { useRef, useState } from "react";
import { Button } from "react-bootstrap"

function UseRefHookEx(){
    const [c,setC] = useState(0);
    const refC = useRef(0);
    const objectC={
        count:0
}
    const handleIncreasing=()=>{
        setC(c+1);
        refC.current++;
        objectC.c++;
    }
    console.log(c);
    console.log(refC);
    console.log(objectC);
    return (
        <div>
            Ref:{refC.current} <br/>
            <Button variant='primary' onClick={handleIncreasing}>
                Increase
            </Button>
        </div>
    );
}

export default UseRefHookEx;