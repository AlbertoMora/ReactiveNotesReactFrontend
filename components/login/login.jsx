import React from 'react';
import {Footer} from '../footer';
import ReactDom from 'react-dom';
import LoginForm from './login-form';

const container = document.getElementById('react-app-container');

function LoginPage (props) {
    const footerStyle = {width: "100%"};
    return(
        <div className="page-container">
            <div className="page-wrapper">
                <div className="login-page-container">
                    <LoginForm />
                </div>
            </div>

            <Footer style={footerStyle} />
        </div>
    );
}

const exportedElement = LoginPage();

ReactDom.render(exportedElement, container);