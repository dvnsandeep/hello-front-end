import React from "react";
import {Col, Row} from 'react-grid';
import {
  Button,
} from 'semantic-ui-react';


class LandingPage extends React.Component{
    render() {
        return(
            <div className="page-container text-center">
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                        <div className="title">Hello :)</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                        <div className="description pb-4">
                            This is a Service-oriented Project, this product allows unknown people to interact among themselves to make their travel Easy, Comfortable, Interesting and also reduces their travel expenditure.
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col sm={5} />
                <Col sm={3}>
                	<Button color="black" fluid size="large">
            			Add your location
          			</Button>
                </Col>
                </Row>
                <div className="pb-4" style={{marginTop: '30vh'}}>
                <h1>What Is This ?</h1>
                    <iframe width="95%" height="1030px" title="What Is This?"
                    src="https://biteable.com/watch/embed/hello-app-1931812" allowFullScreen="true"
                    allow="autoplay"/>
                </div>
            </div>
        )
    }
}
export default LandingPage
