import React from 'react';
import Row from 'react-bootstrap/Row';

class NotesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className="grid-body">
                {this.props.children}
            </Row>
         );
    }
}
 
export default NotesGrid;