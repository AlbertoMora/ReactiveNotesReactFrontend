import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        }
      }
      clickHandle = () => {
        this.setState({
          open: (this.state.open ? false : true)
        });
      }
      render() {
        return (
          <div className="wrapper">
            <div className={"nav" + (this.state.open ? " nav-open" : " nav-close")} id="side-nav">
              <i className="nav-icon" onClick={this.clickHandle}>
                <div className="rect"></div>
                <div className="rect"></div>
                <div className="rect"></div>
              </i>
              <div className="nav-body">
                <div className="nav-item">
                    <i className="item-icon i-user i-1-5x"></i>
                    <h2 className={"item-title" + (this.state.open?" show":" hide")}>
                      Mi item
                    </h2>
                </div>
            </div>
            </div>
          </div>
        )
      }
}
export default SideBar;