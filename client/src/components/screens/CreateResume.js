import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/createResums.css'

const CreateResume = () => {
    const [instituteName, setInstituteName] = useState("")
    const {majorCourseName, setMajorCourseName} = useState("")
    const {minorCourseName, setMinorCourseName} = useState("")
    const {graduationYear, setGraduationYear} = useState("")
    const {instituteLocation, setInstituteLocation} = useState("")
    const {cgpa, setCGPA} = useState("")

    const {instituteName2, setInsituteName2} = useState("")
    const {majorCourseName2, setMajorCourseName2} = useState("")
    const {minorCourseName2, setMinorCourseName2} = useState("")
    const {graduationYear2, setGraduationYear2} = useState("")
    const {instituteLocation2, setInsituteLocation2} = useState("")
    const {cgpa2, setCGPA2} = useState("")

    const {courseSubject, setCourseSubject} = useState("")
    const {courseSubject2, setCourseSubject2} = useState("")
    const {courseSubject3, setCourseSubject3} = useState("")
    const {courseSubject4, setCOurseSubject4} = useState("")
    const {courseSubject5, setCourseSubject5} = useState("")

    const {programmingLanguage, setProgrammingLanguage} = useState("")
    const {programmingLanguage2, setProgrammingLanguage2} = useState("")
    const {programmingLanguage3, setProgrammingLanguage3} = useState("")
    const {programmingLanguage4, setProgrammingLanguage4} = useState("")
    const {programmingLanguage5, setProgrammingLanguage5} = useState("")
    
    
    const {developmentSkill, setDevelopmentSkill} = useState("")
    const {developmentSkill2, setDevelopmentSkill2} = useState("")
    const {developmentSkill3, setDevelopmentSkill3} = useState("")
    const {developmentSkill4, setDevelopmentSkill4} = useState("")
    const {developmentSkill5, setDevelopmentSkill5} = useState("")

    const {technologicalSkill, setTechnologicalSkill} = useState("")
    const {technologicalSkill2, setTechnologicalSkill2} = useState("")
    const {technologicalSkill3, setTechnologicalSkill3} = useState("")
    const {technologicalSkill4, setTechnologicalSkill4} = useState("")
    const {technologicalSkill5, setTechnologicalSkill5} = useState("")

    const {databaseSkill, setDatabaseSkill} = useState("")
    const {databaseSkill2, setDatabaseSkill2} = useState("")
    const {databaseSkill3, setDatabaseSkill3} = useState("")
    const {databaseSkill4, setDatabaseSkill4} = useState("")
    const {databaseSkill5, setDatabaseSkill5} = useState("")

    const {achievement, setAchievement} = useState("")
    const {achievement2, setAchievement2} = useState("")
    const {achievement3, setAchievement3} = useState("")
    const {achievement4, setAchievement4} = useState("")
    const {achievement5, setAchievement5} = useState("")

    const {position, setPosition} = useState("")
    const {positionDescription, setPositionDescription} = useState("")

    const {githubProfile, setGithubProfile} = useState("")
    const {linkedinProfile, setLinkedinProfile} = useState("")
    const {hackerrankProfile, setHackerrankProfile} = useState("")
    const {codechefProfile, setCodechefProfile} = useState("")
    const {twitterProfile, setTwitterProfile} = useState("")
    const {portfolioLink, setPortfolioLink} = useState("")

    const {projectName, setProjectName} = useState("")
    const {projectDescription, setProjectDescription} = useState("")
    const {projectName2, setProjectName2} = useState("")
    const {projectDescription2, setProjectDescription2} = useState("")
    const {projectName3, setProjectName3} = useState("")
    const {projectDescription3, setProjectDescription3} = useState("")
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
                                onChange={(e)=>setInstituteName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Major Course Name*"
                                onChange={(e)=>setMajorCourseName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Minor Course Name"
                                onChange={(e)=>setMinorCourseName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Graduation Year*"
                                onChange={(e)=>setGraduationYear(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Institue Location*"
                                onChange={(e)=>setInstituteLocation(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="CGPA or Percentage*"
                                onChange={(e)=>setCGPA(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Institute Name #2"
                                onChange={(e)=>setInsituteName2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Major Course Name"
                                onChange={(e)=>setMajorCourseName2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Minor Course Name"
                                onChange={(e)=>setMinorCourseName2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Graduation Year"
                                onChange={(e)=>setGraduationYear2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Institue Location"
                                onChange={(e)=>setInsituteLocation2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="CGPA or Percentage"
                                onChange={(e)=>setCGPA2(e.target.value)}
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
                                    onChange={(e)=>setCourseSubject(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e)=>setCourseSubject2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e)=>setCourseSubject3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e)=>setCOurseSubject4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e)=>setCourseSubject5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">PROGRAMMING LANGUAGES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                    onChange={(e)=>setProgrammingLanguage(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                    onChange={(e)=>setProgrammingLanguage2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                    onChange={(e)=>setProgrammingLanguage3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                    onChange={(e)=>setProgrammingLanguage4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Language"
                                    onChange={(e)=>setProgrammingLanguage5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">DEVELOPMENT</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                    onChange={(e)=>setDevelopmentSkill(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                    onChange={(e)=>setDevelopmentSkill2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                    onChange={(e)=>setDevelopmentSkill3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                    onChange={(e)=>setDevelopmentSkill4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Development"
                                    onChange={(e)=>setDevelopmentSkill5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">TECHNOLOGIES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                    onChange={(e)=>setTechnologicalSkill(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                    onChange={(e)=>setTechnologicalSkill2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                    onChange={(e)=>setTechnologicalSkill3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                    onChange={(e)=>setTechnologicalSkill4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Technology"
                                    onChange={(e)=>setTechnologicalSkill5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">DATABASES</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                    onChange={(e)=>setDatabaseSkill(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                    onChange={(e)=>setDatabaseSkill2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                    onChange={(e)=>setDatabaseSkill3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                    onChange={(e)=>setDatabaseSkill4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Database"
                                    onChange={(e)=>setDatabaseSkill5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">ACHIEVEMENTS</h4>
                            <div className="subHeadingContent ">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                    onChange={(e)=>setAchievement(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                    onChange={(e)=>setAchievement2(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                    onChange={(e)=>setAchievement3(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                    onChange={(e)=>setAchievement4(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Achievement"
                                    onChange={(e)=>setAchievement5(e.target.value)}
                                />
                            </div>
                            <h4 className="skillsHeading">POSITIONS OF RESPONSIBILITY</h4>
                            <div className="">
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Position"
                                    onChange={(e)=>setPosition(e.target.value)}
                                />
                                <input
                                    className="subject"
                                    type="text"
                                    placeholder="Position Description"
                                    onChange={(e)=>setPositionDescription(e.target.value)}
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
                                onChange={(e)=>setGithubProfile(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="LinkedIn Profile"
                                onChange={(e)=>setLinkedinProfile(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Hackerrank Profile"
                                onChange={(e)=>setHackerrankProfile(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Codechef Profile"
                                onChange={(e)=>setCodechefProfile(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Twitter Profile"
                                onChange={(e)=>setTwitterProfile(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Portfolio Website"
                                onChange={(e)=>setPortfolioLink(e.target.value)}
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
                                onChange={(e)=>setProjectName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Project Description*"
                                required
                                onChange={(e)=>setProjectDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Project Name*"
                                required
                                onChange={(e)=>setProjectName2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Project Description*"
                                required
                                onChange={(e)=>setProjectDescription2(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Project Name"
                                onChange={(e)=>setProjectName3(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Project Description"
                                onChange={(e)=>setProjectDescription3(e.target.value)}
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