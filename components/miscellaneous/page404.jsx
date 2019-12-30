import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="react-404-page">
                <h1><i className="i-chain"></i> 404! - Page not Found</h1>
                <h4>We're sorry, this page could had lost into the internet deeps.</h4>
                <div className="page404-img"></div>
                <p>
                    Seems like this note isn't there anymore. 
                    <Link to="/home"> Please click here to get back to your notes list</Link>
                </p>
            </div>
        );
    }
}

export default Page404;