import {useState}from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Login.css';
function LoginForm({UserLogin, error}) {
  const [details, setDetails] = useState({username:"", password:""})
  const submitHandler = e => {
    e.preventDefault()
    UserLogin(details)
  } 
  return (
    <div  >

      {(error!="")? (<div className='error'>{error}</div>):""}

      <div className='login'>
     <h1 className="text-light">Login</h1>
      <Form onSubmit={submitHandler  }>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>username</Form.Label>
        <Form.Control onChange={e => setDetails({...details, username:e.target.value})} value={details.name} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      </Form>

      </div>
      
 

    </div>
  )

  
}

export default LoginForm