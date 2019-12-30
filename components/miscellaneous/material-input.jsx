import React from 'react';

class MaterialInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        }, () => { 
            this.props.callback(this.state.value);
        });
    }
    render() {
        return (
            <div className={"form-group " + this.props.customClass}>
                <input type="text" className="material-input"
                value={this.state.value} onChange={this.onChangeHandler}
                name={this.props.name} required />
                <label htmlFor={this.props.name} className="ianim-fade-inout"><i className={"i-" + this.props.icon}></i> {this.props.name}</label>
            </div>
        );
    }
}

export default MaterialInput;