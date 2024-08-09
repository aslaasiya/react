import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebase = () => {
    var [val, setval] = useState("asla")
    var [name, setname] = useState()

    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
      <div>
          <Typography variant='h3' gutterBottom>welcome {name}</Typography>
          <TextField variant='outlined' label="enter your name" onChange={handleinput}/><br /><br></br>
          <Button variant='contained' onClick={submit}>SUBMIT</Button>
          </div>
          
          
  )
}

export default Statebase