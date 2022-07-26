import { useState} from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { Blog } from './Blogs'
import { GuestNavigation, AdminNavigation } from './Navigation'
const Login = () => {
    const [user, setUser]= useState({username:"",password:""})
    const [error, setError] = useState("")
    const getToken = localStorage.getItem("tokens");
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
            localStorage.setItem("tokens","2b2ed488-bec6-40b1-8223-21841e3c40b8")
            
          
        }else{
            setError("Details do not match")
            
        }
    }

    const UserLogout = () => {
        setUser({username:"", password:""})
        localStorage.setItem("tokens","")
    }

  return (
    <div>
        
    { (getToken == "2b2ed488-bec6-40b1-8223-21841e3c40b8") ? (
        <div className='welcome'>
            <AdminNavigation></AdminNavigation>
            <h2>welcome, <span>{user.username}</span></h2>
            <button onClick={UserLogout}>Logout</button>
        </div>
    ):(
        <div>
            <GuestNavigation></GuestNavigation>

        <LoginForm UserLogin = {UserLogin} error={error}/>
        <p><Link to={'/blogs'}>Continue as a guest?</Link></p>
       
        </div>
       

        
    ) 
    }
    </div>
  )
}

export default Login