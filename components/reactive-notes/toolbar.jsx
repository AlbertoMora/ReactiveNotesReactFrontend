import React from 'react';
import RoundedInput from './rounded-input';
import { Col, Row } from 'react-bootstrap';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="toolbar">
                <Row>
                    <Col xs={12} lg={7}>
                        <RoundedInput placeholder="Note name or text" id="search-box"
                            name="search-box" type="text" icon="search" />
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="tool-button-container">
                            {
                                this.props.children
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ToolBar;