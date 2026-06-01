import React from 'react'
import { Alert } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <h2 style = {{textAlign: 'center' }}>Home</h2>
      <p style = {{textAlign: 'center', color: 'blue' }}>This is the Home component</p>
      <Alert variant='success' className='text-center'>
        Welcome to the Home page!
      </Alert>
    </div>
  )
}

export default Home