import React from "react";
import {Col, Row} from 'react-grid';
import placeholder from './placeholder.png';
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
                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-2 pt-4">
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
                                        <h3><i className="far fa-check-circle"/> Feature One</h3>
                                        <p>This is the description of the first feature</p>
                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div>
                                        <h3><i className="far fa-check-circle"/> Feature Two</h3>
                                        <p>This is the description of the second feature</p>
                                    </div>
                                </Col>


                                <Col sm={4}>
                                    <div>
                                        <h3><i className="far fa-check-circle"/> Feature Three</h3>
                                        <p>This is the description of the third feature </p>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-2 pt-4">
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
                    <Col sm={8} className="ml-2 pt-4">
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

                
                <Col sm={2}/>
                <Col sm={8}>
                    <textarea placeholder="Message" style={{ width: 700 }}></textarea>
                </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2} />
                    <Col sm={3}>
                        <textarea placeholder="Email address" style={{ width: 240 }}></textarea>
                    </Col>
                    <Col sm={3}>
                        <textarea placeholder="Full name" style={{ width: 240 }}></textarea>
                    </Col>
                    <Col sm={3}>
                    <Button color="black" fluid size="large">
            			Send
          			</Button>
                    </Col>
     
                </Row>
                <br></br>

                <Row>
                    <Col sm={2} />
                    <Col sm={8} className="ml-2 pt-1">
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}/>
                    <Col sm={8}>
                        <h1>Promote Hello</h1>
                        <p>Encourage us through sponsoring s or promoting us</p>
                        <p>Contact us at - hello@gmail.com</p>
                        <p>Thankyou</p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                        <a href="">SignIn</a>
                        <a>        |       </a>
                        <a href="">SignUp</a>

                    </Col>
                </Row>
            </div>
            
        )
    }
}
export default LandingPage