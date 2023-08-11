import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";


function Login(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.logIn(e.target.elements.email.value, e.target.elements.password.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (email !== '' && password !== '') {
            setEnableSubmit(true);
        } else {
            if (enableSubmit !== false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);

    return (
        <>
            <div className={css(styles.App)}>
                <div className={css(styles.AppBody)}>
                    <p>Login to access the full dashboard</p>

                    <form onSubmit={handleLoginSubmit}>
                        <div className={css(styles.inputGroup)}>
                            <label htmlFor="email">Email: </label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className={css(styles.input)}
                            value={email}
                            onChange={handleChangeEmail}  
                            />
                        </div>

                        <div className={css(styles.inputGroup)}>
                            <label htmlFor="password">Password: </label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className={css(styles.input)}
                            value={password}
                            onChange={handleChangePassword} 
                            />
                        </div>
                        <input 
                        type='submit' 
                        value='Ok' 
                        disabled={!enableSubmit} 
                        />
                    </form>
                </div>  
            </div>
        </>
    )
}

Login.propTypes = {
    logIn: PropTypes.func
};

const styles = StyleSheet.create({
    App: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        '@media (max-width: 900px)': {
            display: 'block',
        },
    },          
    AppBody: {
        margin: '10px',
        textAlign: 'left',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    input: {
        marginRight: '10px',
    }
});

export default Login;