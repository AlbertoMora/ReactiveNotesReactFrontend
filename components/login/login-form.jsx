import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MaterialInput from './../miscellaneous/material-input';
import MaterialButton from './../miscellaneous/material-button';
import axios from 'axios';

function LoginForm(props) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const formPosition = {
        span: 6,
        offset: 3
    };

    const submitLoginInfo = () => {
        console.log('Ejecutando');
        axios.post('/api/users/login', {
            user,
            pass
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <Row>
            <Col xs={12} md={formPosition} >
                <div className="login-form-container">
                    <Row>
                        <Col md={7}>

                        </Col>
                        <Col md={4} className="text-align-center">
                            <h2 className="login-header">User Login</h2>
                            <hr />
                            <MaterialInput
                                callback={setUser}
                                name="user"
                                icon="user"
                                label="Username or email"
                            />
                            <MaterialInput
                                callback={setPass}
                                name="pass"
                                icon="lock"
                                label="Password"
                            />
                            <MaterialButton 
                                bgColor="black"
                                action={submitLoginInfo}
                                text="Sign In"
                            />
                            <p className="forgot-password-caption">
                                <a href="/user/account_recovery">Did you forget your account / password?</a>
                            </p>
                            <hr/>
                            <p className="register-caption">New to Reactive Notes?</p>
                            <a href="/user/signup" className="material-button bg-deep-blue"> Create an Account</a>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default LoginForm;