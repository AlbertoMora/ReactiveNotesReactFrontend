import React from 'react';

class FloattingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button type="button" className={"floatting-button" + (this.props.active?" active":" inactive") + " bg-"+this.props.color}>
                <i className={"i-"+this.props.icon}></i>
            </button>
         );
    }
}
 
export default FloattingButton;