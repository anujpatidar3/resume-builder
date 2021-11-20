import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/SignIn.css'

const SignIn = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <div className="aboutUs">
                        <h1>
                            About Us
                        </h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h3>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signInCard">
                        <div className="card ">
                            <h2>Resume Builder</h2>
                            <input
                            type="email"
                            placeholder="Email"
                            />
                            <input
                            type="password"
                            placeholder="Password"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;