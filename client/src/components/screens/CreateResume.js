import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/createResums.css'

const CreateResume = () => {
    return (
        <Container className="resume">
            <Row>
                <Col sm={12} md={6}>
                    <div className="card">
                        <div style={{ margin: "10px" }}>
                            <h2 className="education">EDUCATION</h2>
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
                            <input
                                type="text"
                                placeholder="Graduation Year*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Institue Location*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="CGPA or Percentage*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Institute Name"
                            />
                            <input
                                type="text"
                                placeholder="Major Course Name"
                            />
                            <input
                                type="text"
                                placeholder="Minor Course Name"
                            />
                            <input
                                type="text"
                                placeholder="Graduation Year"
                            />
                            <input
                                type="text"
                                placeholder="Institue Location"
                            />
                            <input
                                type="text"
                                placeholder="CGPA or Percentage"
                            />
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} >
                    <div className="card">
                        <div style={{ margin: "10px" }}>
                            <h2 className="skills">SKILLS</h2>
                            <h4 className="skillsHeading">COURSEWORK SUBJECTS</h4>
                            <div className="subHeadingContent">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>
                            <h4 className="skillsHeading">PROGRAMMING LANGUAGES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                />
                            </div>
                            <h4 className="skillsHeading">DEVELOPMENT</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                />
                            </div>
                            <h4 className="skillsHeading">TECHNOLOGIES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                />
                            </div>
                            <h4 className="skillsHeading">DATABASES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                />
                            </div>
                            <h4 className="skillsHeading">ACHIEVEMENTS</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                />
                            </div>
                            <h4 className="skillsHeading">POSITIONS OF RESPONSIBILITY</h4>
                            <div className="">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Position"
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Position Description"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="card">
                        <div style={{ margin: "10px" }}>
                            <h2 className="links">LINKS</h2>
                            <input
                                type="text"
                                placeholder="Github Profile"
                            />
                            <input
                                type="text"
                                placeholder="LinkedIn Profile"
                            />
                            <input
                                type="text"
                                placeholder="Hackerrank Profile"
                            />
                            <input
                                type="text"
                                placeholder="Codechef Profile"
                            />
                            <input
                                type="text"
                                placeholder="Twitter Profile"
                            />
                            <input
                                type="text"
                                placeholder="Portfolio Website"
                            />
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <div className="card">
                        <div style={{ margin: "10px" }}>
                            <h2 className="links">PROJECTS</h2>
                            <input
                                type="text"
                                placeholder="Project Name*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Project Description*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Project Name*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Project Description*"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Project Name"
                            />
                            <input
                                type="text"
                                placeholder="Project Description"
                            />
                        </div>
                    </div>
                </Col>
                <button className="btn waves-effect waves-light submitButton" ><h6 style={{color:"white"}}>SUBMIT DETAILS</h6></button>
            </Row>
        </Container>
    )
}

export default CreateResume;