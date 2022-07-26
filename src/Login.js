import { useState} from 'react'
import LoginForm from './LoginForm'

const Login = () => {
    const [user, setUser]= useState({username:"",password:""})
    const [error, setError] = useState("")
    const [token, setToken] = useState("")
    const adminUser={
        username:"agnes",
        password:"123"
    }


    const UserLogin = details => {
        console.log(details);
        if(details.email== adminUser.email&&details.password==adminUser.password){
            console.log("Logged in")
            setUser({
                username:details.username,
                password:details.password
            })
            setToken("2b2ed488-bec6-40b1-8223-21841e3c40b8")
          
        }else{
            setError("Details do not match")
            
        }
    }

    const UserLogout = () => {
        setUser({username:"", password:""})
    }

  return (
    <div>
    { (user.username != "") ? (
        <div className='welcome'>
            <h2>welcome, <span>{user.username}</span></h2>
            <button onClick={UserLogout}>Logout</button>
        </div>
    ):(
       
            <LoginForm UserLogin = {UserLogin} error={error} token={token}/>
       

        
    ) 
    }
    </div>
  )
}

export default Login