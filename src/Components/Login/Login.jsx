import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import video1 from '../../Assets/all-images/truck-img/img1.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios'



function Login() {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate()


  const handleLogin =  (e) => {
      e.preventDefault();
      if( !userid || !password){
        setLoginError('Please enter both userid and password')
        return;
      }
      axios.post('http://localhost:3000/login',{userid, password})
      .then(result => {
          console.log(result)
          if(result.data === "Success"){
              navigate('/tracking')
          }
          else{
            setLoginError(result.data.message)
          }

          
      })
      .catch(err => {console.error(err)
        setLoginError("Error occured please try again later")
      })

  };


  return (
    <>
    <Header />
    <MDBContainer className="my-1">

      <MDBCard >
        <MDBRow className='g-5'>

          <MDBCol md='6'>
            <MDBCardImage src={video1} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='5' >
            <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex justify-content-center align-items-center  '>
            <div className='bg-white p-3 rounded w-50'>
            <h2>Login</h2>
            
            
            
            <form onSubmit={handleLogin}>
                <div className='mb-3'>
                    <label>User ID:</label>
                    <input 
                    type="text" 
                    value={userid} 
                    className='form-control rounded-0'
                    onChange={(e) => setUserid(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label>Password:</label>
                    <input 
                    type="password" 
                    className='form-control rounded-0'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit"
                className='btn btn-success w-100 rounded-0' style={{background: '#7c5f87'}}
                >Login</button>
            {loginError && <p style={{color: "red"}}>{loginError}</p>}            
            </form>
            </div>
        </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    <Footer />
    </>
  );
}

export default Login;
