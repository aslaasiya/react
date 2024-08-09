import React from 'react'

const Signup = () => {
  return (
      <div>
          <h2>Signup form</h2>
          name:
          <input type="text" name="" id="" /><br></br><br></br>
          email:
          <input type="email" name="" id="" /><br></br><br></br>
          phone:
          <input type="number" name="" id="" /><br></br><br></br>
          password:
          <input type="password" name="" id="" /><br></br><br></br>
          gender:
          <input type="radio" name="gender" id="" />male<br></br>
          <input type="radio" name="gender" id="" />female<br></br>
          submit:
          <input type="submit" value="submit" />
    </div>
  )
}

export default Signup