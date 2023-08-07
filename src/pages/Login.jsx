import { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const userLogin = (e) => {
      e.preventDefault();
      const result = {email, password}
      console.log(result)
    }
  
  
    const success = () => {
      Swal.fire({
        title: 'Successfully Submitted!',
        icon: 'success',
        confirmButtonText: 'Done',
        confirmButtonColor: 'Black',
        iconColor: '#ff2828',
        color: 'black'
      })
    }

  
  
    return (

<>
<div className='container justify-content-center d-flex py-5'>
<form className="form_main" action="" onSubmit={userLogin}>
  <p className="heading"><span style={{color:"#ff2828"}}>L</span>OGIN</p>
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
    <p>Don't have any account?</p>
    <a href="./Signup">Sign up</a>
  </div>
</form>
</div>
</>





      
    );
  }
  
  export default Login;


  