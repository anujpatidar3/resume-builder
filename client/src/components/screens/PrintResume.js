import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { Container, Row } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';


const PrintResume = () => {
    const componentRef = useRef();
    const [data, setData] = useState([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("myResume")))
    }, [])

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            <ReactToPrint
                trigger={() => <button style={{ display: "none" }}>Print this out!</button>}
                content={() => componentRef.current}
            />
                <Container className="card resumeCard" style={{border:"none"}} >
                    <Row>
                        <div ref={componentRef}>
                            <div className="heading">
                                <h3 className="heading">{data.name}</h3>
                            </div>
                            <div className="subHeading">
                                <h5 className="subHeading">{data.emailID}</h5>
                                <hr />
                            </div>
                            <div className="columns">
                                <div className="firstColumn">
                                    <div>
                                        <h5>Education</h5>
                                        <div className="educationOne">
                                            <h7>{data.instituteName}</h7>
                                            <h7>{data.majorCourseName}</h7>
                                            <h7>{data.minorCourseName}</h7>
                                            <h7>{data.gradutionMonthAndYear}</h7>
                                            <h7>{data.institueLocation}</h7>
                                            <h7>{data.CGPA}</h7>
                                        </div>
                                        <div className="instituteTwo">
                                            <h6>
                                                {
                                                    data.instituteNameSecond !== "" &&
                                                    data.instituteNameSecond
                                                }
                                            </h6>
                                            <h7>
                                                {data.majorCourseNameSecond !== "" &&
                                                    data.majorCourseNameSecond
                                                }
                                            </h7>
                                            <h7>
                                                {
                                                    data.minorCourseNameSecond !== "" &&
                                                    data.minorCourseNameSecond
                                                }
                                            </h7>
                                            <h7>
                                                {
                                                    data.gradutionMonthAndYearSecond !== "" &&
                                                    data.gradutionMonthAndYearSecond
                                                }
                                            </h7>
                                            <h7>
                                                {
                                                    data.instituteLocationSecond !== "" &&
                                                    data.instituteLocationSecond
                                                }
                                            </h7>
                                            <h7>
                                                {
                                                    data.CGPASecond !== "" &&
                                                    data.CGPASecond
                                                }</h7>
                                        </div>
                                    </div>
                                    {
                                        data.githubProfile !== "" ||
                                            data.linkedInProfile !== "" ||
                                            data.hackerrankProfile !== "" ||
                                            data.codechefProfile !== "" ||
                                            data.twitterProfile !== "" ?
                                            <div>
                                                <div className="links">
                                                    <h5 className="linkHeader">Links</h5>
                                                    {
                                                        data.githubProfile !== "" ? <a className="linksItem" href={data.githubProfile}>Github</a> : ""
                                                    }
                                                    {
                                                        data.linkedInProfile !== "" ? <a className="linksItem" href={data.linkedInProfile}>Linkedin</a> : ""
                                                    }
                                                    {
                                                        data.hackerrankProfile !== "" ? <a className="linksItem" href={data.hackerrankProfile}>Hackerrank</a> : ""
                                                    }
                                                    {
                                                        data.codechefProfile !== "" ? <a className="linksItem" href={data.codechefProfile}>Codechef</a> : ""
                                                    }
                                                    {
                                                        data.twitterProfile !== "" ? <a className="linksItem" href={data.twitterProfile}>Twitter</a> : ""
                                                    }
                                                </div>
                                            </div> : ""
                                    }
                                    {
                                        data.achievementsOne !== "" || data.achievementsTwo !== "" || data.achievementsThree !== "" ?
                                            <div className="achievements">
                                                <h5>Achievements</h5>
                                                <ul>
                                                    {
                                                        data.achievementsOne !== "" ? <li>{data.achievementsOne}</li> : ""
                                                    }
                                                    {
                                                        data.achievementsTwo !== "" ? <li>{data.achievementsTwo}</li> : ""
                                                    }
                                                    {
                                                        data.achievementsThree !== "" ? <li>{data.achievementsThree}</li> : ""
                                                    }
                                                </ul>
                                            </div> :
                                            ""
                                    }
                                    {
                                        data.positionsofRespobsibility !== "" ?
                                            <div className="achievements">
                                                <h5>Positions of Responsibility</h5>
                                                <h7>
                                                    {
                                                        data.positionsofRespobsibility !== "" ? data.positionsofRespobsibility : ""
                                                    }
                                                </h7>
                                                <br />
                                                <h9>
                                                    {
                                                        data.positionDescription !== "" ? data.positionDescription : ""
                                                    }
                                                </h9>
                                                <br />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="secondColumn">
                                    <div>
                                        <h5>Technical Projects</h5>
                                        <div className="appOne projectDescription">
                                            <h6>
                                                {data.firstProjectName}
                                            </h6>
                                            <h9 className="projectDescription">{data.firstProjectDescription}</h9>
                                            <br />
                                        </div>
                                        <div className="appTwo projectDescription">
                                            <h6>
                                                {data.secondProjectName}
                                            </h6>
                                            <h9 >{data.secondProjectDescription}</h9>
                                            <br />
                                        </div>
                                        <br />
                                        {
                                            data.thirdProjectName !== "" ?
                                                <div className="appThree">
                                                    <h7>
                                                        {
                                                            data.thirdProjectName !== "" ? data.thirdProjectName : ""
                                                        }
                                                    </h7>
                                                    <br />
                                                    <h9 className="projectDescription">
                                                        {
                                                            data.thirdProjectDescription !== "" ? data.thirdProjectDescription : ""
                                                        }
                                                    </h9>
                                                    <br />
                                                </div> : ""
                                        }
                                    </div>
                                    <h5>Skills</h5>
                                    {
                                        data.technologyOne !== "" ||
                                            data.technologyTwo !== "" ||
                                            data.technologyFour !== "" ||
                                            data.technologyThree !== "" ||
                                            data.technologyFive !== "" ?
                                            <div>
                                                <h6 className="skillHeading">Technologies</h6>
                                                <ol className="lists">
                                                    {
                                                        data.technologyOne !== "" ? <li className="listElement">{data.technologyOne}</li> : ""
                                                    }
                                                    {
                                                        data.technologyTwo !== "" ? <li className="listElement">{data.technologyTwo}</li> : ""
                                                    }
                                                    {
                                                        data.technologyThree !== "" ? <li className="listElement">{data.technologyThree}</li> : ""
                                                    }
                                                    {
                                                        data.technologyFour !== "" ? <li className="listElement">{data.technologyFour}</li> : ""
                                                    }
                                                    {
                                                        data.technologyFive !== "" ? <li className="listElement">{data.technologyFive}</li> : ""
                                                    }
                                                </ol>
                                            </div> : ""
                                    }
                                    {
                                        data.developmentOne !== "" ||
                                            data.developmentTwo !== "" ||
                                            data.developmentThree !== "" ||
                                            data.developmentFour !== "" ||
                                            data.developmentFive !== "" ?

                                            <div>
                                                <h6 className="skillHeading">Development</h6>
                                                <ol className="lists">
                                                    {
                                                        data.developmentOne !== "" ? <li className="listElement">{data.developmentOne}</li> : ""
                                                    }
                                                    {
                                                        data.developmentTwo !== "" ? <li className="listElement">{data.developmentTwo}</li> : ""
                                                    }
                                                    {
                                                        data.developmentThree !== "" ? <li className="listElement">{data.developmentThree}</li> : ""
                                                    }
                                                    {
                                                        data.developmentFour !== "" ? <li className="listElement">{data.developmentFour}</li> : ""
                                                    }
                                                    {
                                                        data.developmentFive !== "" ? <li className="listElement">{data.developmentFive}</li> : ""
                                                    }
                                                </ol>
                                            </div>
                                            : ""
                                    }
                                    {
                                        data.programmingLanguagesOne !== "" ||
                                            data.programmingLanguagesTwo !== "" ||
                                            data.programmingLanguagesThree !== "" ||
                                            data.programmingLanguagesFour !== "" ||
                                            data.programmingLanguagesFive !== "" ?
                                            <div>
                                                <h6 className="skillHeading">Programming Languages</h6>
                                                <ol className="lists">
                                                    {
                                                        data.programmingLanguagesOne !== "" ? <li className="listElement">{data.programmingLanguagesOne}</li> : ""
                                                    }
                                                    {
                                                        data.programmingLanguagesTwo !== "" ? <li className="listElement">{data.programmingLanguagesTwo}</li> : ""
                                                    }
                                                    {
                                                        data.programmingLanguagesThree !== "" ? <li className="listElement">{data.programmingLanguagesThree}</li> : ""
                                                    }
                                                    {
                                                        data.programmingLanguagesFour !== "" ? <li className="listElement">{data.programmingLanguagesFour}</li> : ""
                                                    }
                                                    {
                                                        data.programmingLanguagesFive !== "" ? <li className="listElement">{data.programmingLanguagesFive}</li> : ""
                                                    }
                                                </ol>
                                            </div>
                                            : ""
                                    }

                                    {
                                        data.databaseOne !== "" ||
                                            data.databaseTwo !== "" ||
                                            data.databaseThree !== "" ||
                                            data.databaseFour !== "" ||
                                            data.developmentFive !== ""
                                            ?
                                            <div>
                                                <h6 className="skillHeading">Databases</h6>
                                                <ol className="lists">
                                                    {
                                                        data.databaseOne !== "" ? <li className="listElement">{data.databaseOne}</li> : ""
                                                    }
                                                    {
                                                        data.databaseTwo !== "" ? <li className="listElement">{data.databaseTwo}</li> : ""
                                                    }
                                                    {
                                                        data.databaseThree !== "" ? <li className="listElement">{data.databaseThree}</li> : ""
                                                    }
                                                    {
                                                        data.databaseFour !== "" ? <li className="listElement">{data.databaseFour}</li> : ""
                                                    }
                                                    {
                                                        data.databaseFive !== "" ? <li className="listElement">{data.databaseFive}</li> : ""
                                                    }
                                                </ol>
                                            </div>
                                            : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            <button className="btn btn-primary" style={{marginLeft:"47%",justifyContent:"center",marginBottom:"20px"}} onClick={handlePrint}>Print</button>
        </div>
    )
}

export default PrintResume;