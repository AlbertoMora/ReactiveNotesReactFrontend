import React from 'react';

class RoundedInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: ''
        }
    }
    onInputFocus = () => {
        this.setState({
            focused: true
        });
    }
    onInputLeave = () => {
        this.setState({
            focused: false
        });
    }
    onTextChange (event){
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div className={"md-rounded-icontextbox " + this.props.spClass}>
                <i className={`i-${this.props.icon}` + (this.state.focused ? " i-1x" : " i-0x-8")}></i>
                <input type={this.props.type} className="md-rounded-input" onChange={this.onTextChange.bind(this)}
                    value = {this.state.value} onFocus={this.onInputFocus} onBlur={this.onInputLeave} 
                    placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default RoundedInput;