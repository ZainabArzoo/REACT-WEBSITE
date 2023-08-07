import { useState } from 'react';
import Swal from 'sweetalert2';
import './Signup.css'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const usersignup = (e) => {
    e.preventDefault();
    const result = { name, email, password }
    console.log(result)
  }

  const success = () => {
    Swal.fire({
      title: 'Successfully Submitted!',
      icon: 'success',
      confirmButtonColor: 'Black',
      confirmButtonText: 'Done',
      iconColor: '#ff2828',
      color: 'black'
    })

  }

  return (


<>
<div className='container justify-content-center d-flex py-5'>
<form className="form_main" onSubmit={usersignup} >
  <p className="heading"><span style={{color:"#ff2828"}}>S</span>IGN <span style={{color:"#ff2828"}}>U</span>P</p>
  <div className="inputContainer">

    <input
      placeholder="Username"
      id="username"
      className="inputField"
      type="text"
      value={name} onChange={(e) => setName(e.target.value)} required
    />
  </div>
  <div className="inputContainer">
    
    <input
      placeholder="Email"
      id="email"
      className="inputField"
      type="text"
      value={email} onChange={(e) => setEmail(e.target.value)} required
    />
  </div>
  <div className="inputContainer">
    
    <input
      placeholder="Password"
      id="password"
      className="inputField"
      type="password"
      value={password} onChange={(e) => setPassword(e.target.value)} required
    />
  </div>
  <button className="btn btn-outline-dark fw-bold mx-1" id="button" onClick={success}>Submit</button>
  <div className="signupContainer">
    <p>Already have account?</p>
    <a href="./Login">Login</a>
  </div>
</form>
</div>
</>


    
  );
}

export default Signup;





