import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './SignUpScreen.css'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const register = e => {
        e.preventDefault()
        console.log(auth)
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log(authUser)
            })
            .catch(error => alert(error.message))
    }

    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log(authUser)
            })
            .catch(error => alert(error.message))
        history.push('/')
    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email" 
                    type="email" 
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password" 
                    type="password" 
                />
                <button onClick={signIn} type="submit">Sign In</button>
                <h4><span className="signUpScreen__gray">New to Netflix?</span> <span onClick={register} className="signUpScreen__link">Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
