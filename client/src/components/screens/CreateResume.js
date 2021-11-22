import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/createResums.css'


const CreateResume = () => {
    return (
        <Container className="resume">
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div className="card ">

                        <div style={{margin:"10px"}}>
                        <h1 className="personal">Personal Information</h1>
                            <input
                                type="text"
                                placeholder="Name*"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Institute Name*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Major Course Name*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Minor Course Name"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateResume;