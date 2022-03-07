import React, {useState} from 'react';
import './Login.css'
import {db, auth} from './firebase';
import {Link, useHistory} from 'react-router-dom';
import validator from "validator";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onRegister = (event) => {
        event.preventDefault();
        if(typeof email == undefined || typeof password == undefined){
            alert('Please enter valid input!');
            return;
        }
        if(email=='' && password==''){
            alert('Please enter valid email id and password!');
            return;
        }
        else if(email=='' && validator.isEmail(email)){
            alert('Please enter valid email!');
            return;
        }
        else if(password==""){
            alert("Please enter valid password!");
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.replace('/');
        })
        .catch((err) => {
            alert(err?.message);
        })
    }

    const onLogin = (event) => {
        event.preventDefault();
        if(typeof email == undefined || typeof password == undefined){
            alert('Please enter valid input!');
            return;
        }
        if(email=='' && password==''){
            alert('Please enter valid email id and password!');
            return;
        }
        else if(email=='' && validator.isEmail(email)){
            alert('Please enter valid email!');
            return;
        }
        else if(password==""){
            alert("Please enter valid password!");
            return;
        }
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.replace('/');

        })
        .catch((err) => {
            alert(err?.message);
        })
    }

    return (
        <div className="login">
            <div className="login-container">
                <div class="login-left-panel">
                    <Link to="/"><h1>FilterCodes</h1></Link>
                    <p>Filtercodes is an online learning platform for young developers who wants to explore the world of coding. If you are a beginner who wants to dive in programming skills carrying zero knowledge then please feel free to access our content. We believe sharing is a way of learning.</p>
                </div>
                <div class="login-right-panel">
                    <h2>REGISTER & LOGIN</h2>
                    <form onSubmit={onLogin}>
                        <label>Your email:</label>
                        <input type="email" name="email" required class="form-control" value={email} onChange={(e) => (setEmail(e.target.value))}/>
                        <label>Your password:</label>
                        <input type="password" name="passowrd" required class="form-control" value={password} onChange={(e) => (setPassword(e.target.value))}/>
                        <button type="submit" name="submit" class="btn btn-login">LOGIN</button>
                        <p>By Clicking Sign Up, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use. You may receive email notifications from us and can opt out at any time.</p>
                        <button class="btn btn-register" onClick={onRegister}>SIGN UP WITH FILTERCODES</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
