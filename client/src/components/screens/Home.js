import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../CSS/Home.css'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={4}>
                    <div className="card homeCard">
                        <div className="card-content">
                            <span className="card-title headingStyle"><Link className="linkStyle" to='/createresume'>CREATE A RESUME</Link></span>
                            <p className="homeText">You can create a resume from here, you will be asked to fill a form and then you will be provided with different formats of the resume.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div className="card homeCard">
                        <div className="card-content">
                            <span className="card-title headingStyle"><Link className="linkStyle" to='/myresumes'>SHOW MY RESUMES</Link></span>
                            <p className="homeText">You can see your Previous Resumes. Here you can choose to edit, download or delete resume. </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div className="card homeCard">
                        <div className="card-content">
                            <span className="card-title headingStyle"><Link className="linkStyle" to='/editresume'>EDIT RESUME</Link></span>
                            <p className="homeText">You can see your Previous Resumes. Here you can choose to edit the resume. </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;