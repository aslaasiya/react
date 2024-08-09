import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
    var [val, setval] = useState()
    const input1 = () => {
        setval("React")
    }
    const input2 = () => {
        setval("angular")
    }
    const input3 = () => {
        setval("view")
    }
    
    
  return (
      <div>
          <Typography variant='h5'> welcome to {val }</Typography>
          <Button variant='contained' color='primary'onClick={input1}>React</Button>
          <Button variant='contained' color='secondary'onClick={input2}>Angular</Button>
          <Button variant='contained' color='success'onClick={input3}>view</Button>


    </div>
  )
}

export default Welcome