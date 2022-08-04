import React from 'react'
import '../../App.css';
import { auth, provider } from '../../fireabase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuth }) {

    const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
        })
    }

    return (
        <div className='loginPage'>
            <p>
                Sign in With Google to Continue
            </p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login