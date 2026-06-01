import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function UseEffect() {
 const [countA,setCountA ] =  useState(0);
 const [countB,setCountB ] =  useState(0);
 const [name,setName] = useState({name:'tu', family: 'no'})

 useEffect(() =>{
    console.log('No dependency array');
 })

 useEffect(() => {
    if (countB > 0) {
      setName({ name: 'Anh Tuan', family: 'Ha' });
    }
  }, [countB]);

  useEffect(() => {
    console.log('Array Empty');
 }, []);


 useEffect(() => {
console.log('co tham so countA')
 },[countA])

useEffect(() => {
    console.log('co tham so countB', countB);
}, [countB]);

 const handleCountA=()=> { setCountA(countA+1)}
 const handleCountB=()=> { setCountB(countB+1)}
   return (
<div>
Counter A: {countA} <Button onClick={handleCountA} variant='primary' style={{ margin: '5px' }}>Increment A</Button>
Counter B: {countB} <Button onClick={handleCountB} variant='success' style={{ margin: '5px' }}>Increment B</Button>
Name: {name.name} {name.family}
</div>

   )
}

export default UseEffect;