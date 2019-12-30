import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/sidebar/sidebar';
import Main from './components/reactive-notes/main';
import { Footer } from './components/footer';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("react-app-container");
const AppExport =

    <Router>
        <div className="page-container">
            <SideBar />
            <div className="full-wrapper">
                <div className="container-fluid page-wrapper">
                    <Main />
                </div>
                <Footer />
            </div>
        </div >
    </Router >;
ReactDom.render(AppExport, container);
