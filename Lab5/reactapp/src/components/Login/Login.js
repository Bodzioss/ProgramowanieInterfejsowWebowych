import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

import { auth } from "../firebasee/init";
import {logInWithEmailAndPassword, logInWithGoogle } from "../firebasee/users";
import { useAuthState } from "react-firebase-hooks/auth";

import axios from '../api/axios';
const LOGIN_URL = "/auth";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [userr, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');


    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [userr, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ userr, pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken })
            setUser('');
            setPwd('');
            setSuccess(true)
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            }
            else if (err.respose?.status === 400) {
                setErrMsg('Missing data')
            }
            else if (err.respose?.status === 400) {
                setErrMsg('Unauthorized')
            }
            else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }

    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p><a href='#'>Go to Main Page</a></p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor='password'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Zaloguj się</button>

                        <button onClick={logInWithGoogle}>
                            Login With Google
                        </button>
                    </form>


                </section>
            )}
        </>
    )
}

export default Login