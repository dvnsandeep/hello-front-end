import React from "react";
import {Col, Row} from 'react-grid';
import placeholder from './placeholder.png';


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

                <button>Add your location</button>
                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-5 pt-4">
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm ={8}>
                        <div className="page-container">
                            <h1>Main Features/Benefits</h1>
                            <p>This is a Service-oriented Project, this product allows unknown people to interact among themselves to make their travel Easy, Comfortable, Interesting and also reduces their travel expenditure.</p>
                            <Row>
                                <Col sm={4}>
                                    <div>
                                        <h3>Feature One</h3>
                                        <p>dsfafa faf aw f a fa df  fa f ae f r a f  rf f  f </p>
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div>
                                        <h3>Feature One</h3>
                                        <p>dsfafa faf aw f a fa df  fa f ae f r a f  rf f  f </p>
                                    </div>
                                </Col>


                                <Col sm={4}>
                                    <div>
                                        <h3>Feature One</h3>
                                        <p>dsfafa faf aw f a fa df  fa f ae f r a f  rf f  f </p>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-5 pt-4">
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                        <div className="page-container">
                            <h1>Image Gallery/Product Shop</h1>
                            <p>This is a Service-oriented Project, this product allows unknown people to interact among themselves to make their travel Easy, Comfortable, Interesting and also reduces their travel expenditure.</p>
                            <Row>
                                <Col sm={4}>
                                    <div>
                                     <img src={placeholder} />   
                                        
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div>
                                    <img src={placeholder} /> 
                                    </div>
                                </Col>


                                <Col sm={4}>
                                    <div>
                                        <img src={placeholder} />     
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-5 pt-4">
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                    <div>
                    <h1>Get in touch</h1>
                    <p>This is a Service-oriented Project, this product allows unknown people to interact among themselves to make their travel Easy, Comfortable, Interesting and also reduces their travel expenditure.</p>


                </div>
                <br></br>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Col sm={2}/>
                <Col sm={8}>
                    <textarea placeholder="Message" style={{ width: 400 }}></textarea>
                </Col>
                <Row>
                    <Col sm={2} />
                    <Col sm={3}>
                        <textarea placeholder="Email" style={{ width: 200 }}></textarea>
                    </Col>
                    <Col sm={3}>
                        <textarea placeholder="Email" style={{ width: 200 }}></textarea>
                    </Col>
                    <Col sm={3}>
                        <textarea placeholder="Email" style={{ width: 200 }}></textarea>
                    </Col>
                </Row>
                
            </div>
            
        )
    }
}
export default LandingPage
