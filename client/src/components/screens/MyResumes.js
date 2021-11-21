import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/resumeTempOne.css'

const MyResumes = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="card">
                        <Col className="heading">
                            <h3 className="heading">Anuj Patidar</h3>
                        </Col>
                        <Col className="subHeading">
                            <h5 className="subHeading">anujpatidar3@gmail.com</h5>
                            <hr />
                        </Col>
                        <Col className="firstColumn">
                            <div>
                                <h6>Education</h6>
                                <div>
                                    <h7>Institue Name</h7>
                                    <br />
                                    <h7>majorCourseName</h7><br />
                                    <h7>minorCourseName</h7><br />
                                    <h7>gradutionMonthAndYear</h7><br />
                                    <h7>institueLocation</h7><br />
                                    <h7>CGPA</h7><br />
                                </div>
                                <div className="instituteTwo">
                                    <h7>Institue Name Two</h7>
                                    <br />
                                    <h7>majorCourseName</h7><br />
                                    <h7>minorCourseName</h7><br />
                                    <h7>gradutionMonthAndYear</h7><br />
                                    <h7>institueLocation</h7><br />
                                    <h7>CGPA</h7><br />
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MyResumes;