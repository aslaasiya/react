import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
      <div>
          <TextField variant='outlined' label='name' /><br></br><br />
          <TextField variant='outlined' label='age' /><br></br><br />
          <TextField variant='outlined' label='number'/><br></br><br />
          
          <TextField variant='outlined' label='password' /><br></br><br />
          <Button variant="outlined">submit</Button>
    </div>
  )
}

export default Signup2