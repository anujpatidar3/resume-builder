import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../CSS/Home.css'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} >
                    <Link className="linkStyle" to='/createresume'>
                        <div className="card homeCard">
                            <div className="card-content">
                                <span className="card-title headingStyle">CREATE A RESUME</span>
                                <p className="homeText">You can create a resume from here, you will be asked to fill a form and then you will be provided with different formats of the resume.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col sm={12} md={6} >
                    <Link className="linkStyle" to='/myresumes'>
                        <div className="card homeCard">
                            <div className="card-content">
                                <span className="card-title headingStyle">SHOW MY RESUMES</span>
                                <p className="homeText">You can see your Previous Resumes. Here you can choose to edit, download or delete resume. </p>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;