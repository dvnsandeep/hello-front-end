import React from "react";
import {Col, Row} from 'react-grid';
import landingpage from './landingpage.svg';

class LandingPage extends React.Component{
    render() {
        return(
            <div>
                <Row>
                    <Col sm={6}>
                        <div className="title">HELLO :)</div>
                        <div className="text">
                            This is a Service-oriented Project, this product allows unknown people to interact among themselves to make their travel Easy, Comfortable, Interesting and also reduces their travel expenditure.
                        </div>
                        <button className="button center-button">JOIN THE RIDE</button>
                    </Col>
                    <Col sm={6}>
                        <img className="image" src={landingpage} alt="landing"/>
                    </Col>
                </Row>
                <div className="pl-5" style={{marginTop: '30vh'}}>
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
