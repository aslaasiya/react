import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
        <Toolbar>
          <Typography variant="h6">myapp</Typography>
          <Link to='/login'>
          <Button variant="contained">login</Button>
          </Link>
          <Link to='/signup'><Button variant='contained'>signup</Button></Link>
          <Link to='/halo mann'><Button variant='contained'>mann</Button></Link>
          <Link to='/ADI'><Button variant='contained'>VADI</Button></Link>

          <Link to='/ASHRAF'><Button variant='contained'>shahal</Button></Link>
        
              </Toolbar>
      </AppBar><br></br><br></br>
      </div>
  )
}

export default Navbar