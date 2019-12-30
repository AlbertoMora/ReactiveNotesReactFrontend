import React from 'react';
import { Link } from 'react-router-dom';

class ToolButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onButtonClick = () => {
        if (!this.props.isLocked) {
            this.props.onClick();
        }
    }

    render() {
        let element = this.props.link ?
            <Link to={this.props.link}>
                <button className={"tool-button bg-" + (this.props.isSelected ? this.props.selectedColor : this.props.color)}
                    title={this.props.text}>
                    <i className={"i-" + this.props.icon}></i>
                </button>
            </Link> :
            <button className={"tool-button bg-" + (this.props.isSelected ? this.props.selectedColor : this.props.color)}
                title={this.props.text} 
                onClick={this.onButtonClick}>
                <i className={"i-" + this.props.icon}></i>
            </button>
        return (
            <React.Fragment>
                {element}
            </React.Fragment>
        );
    }
}

export default ToolButton;