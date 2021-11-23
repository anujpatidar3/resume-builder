import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../CSS/resumeTempOne.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyResumes = () => {

    const [data, setData] = useState([])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    useEffect(() => {
        fetch('/allresumes', {
            headers: {
                "Authorization": localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.resume);
            })
    }, [])
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
    
            {
                data.map(resume => {
                    return (
                        <Container className="card resumeCard">
                            <Row>
                                <div >
                                    <div className="heading">
                                        <h3 className="heading">{resume.name}</h3>
                                    </div>
                                    <div className="subHeading">
                                        <h5 className="subHeading">{resume.emailID}</h5>
                                        <hr />
                                    </div>
                                    <div className="columns">
                                        <div className="firstColumn">
                                            <div>
                                                <h5>Education</h5>
                                                <div className="educationOne">
                                                    <h7>{resume.instituteName}</h7>
                                                    <h7>{resume.majorCourseName}</h7>
                                                    <h7>{resume.minorCourseName}</h7>
                                                    <h7>{resume.gradutionMonthAndYear}</h7>
                                                    <h7>{resume.institueLocation}</h7>
                                                    <h7>{resume.CGPA}</h7>
                                                </div>
                                                <div className="instituteTwo">
                                                    <h6>
                                                        {
                                                            resume.instituteNameSecond !== "" &&
                                                            resume.instituteNameSecond
                                                        }
                                                    </h6>
                                                    <h7>
                                                        {resume.majorCourseNameSecond !== "" &&
                                                            resume.majorCourseNameSecond
                                                        }
                                                    </h7>
                                                    <h7>
                                                        {
                                                            resume.minorCourseNameSecond !== "" &&
                                                            resume.minorCourseNameSecond
                                                        }
                                                    </h7>
                                                    <h7>
                                                        {
                                                            resume.gradutionMonthAndYearSecond !== "" &&
                                                            resume.gradutionMonthAndYearSecond
                                                        }
                                                    </h7>
                                                    <h7>
                                                        {
                                                            resume.instituteLocationSecond !== "" &&
                                                            resume.instituteLocationSecond
                                                        }
                                                    </h7>
                                                    <h7>
                                                        {
                                                            resume.CGPASecond !== "" &&
                                                            resume.CGPASecond
                                                        }</h7>
                                                </div>
                                            </div>
                                            {
                                                resume.githubProfile !== "" ||
                                                    resume.linkedInProfile !== "" ||
                                                    resume.hackerrankProfile !== "" ||
                                                    resume.codechefProfile !== "" ||
                                                    resume.twitterProfile !== "" ?
                                                    <div>
                                                        <div className="links">
                                                            <h5 className="linkHeader">Links</h5>
                                                            {
                                                                resume.githubProfile !== "" ? <a className="linksItem" href={resume.githubProfile}>Github</a> : ""
                                                            }
                                                            {
                                                                resume.linkedInProfile !== "" ? <a className="linksItem" href={resume.linkedInProfile}>Linkedin</a> : ""
                                                            }
                                                            {
                                                                resume.hackerrankProfile !== "" ? <a className="linksItem" href={resume.hackerrankProfile}>Hackerrank</a> : ""
                                                            }
                                                            {
                                                                resume.codechefProfile !== "" ? <a className="linksItem" href={resume.codechefProfile}>Codechef</a> : ""
                                                            }
                                                            {
                                                                resume.twitterProfile !== "" ? <a className="linksItem" href={resume.twitterProfile}>Twitter</a> : ""
                                                            }
                                                        </div>
                                                    </div> : ""
                                            }
                                            {
                                                resume.achievementsOne !== "" || resume.achievementsTwo !== "" || resume.achievementsThree !== "" ?
                                                    <div className="achievements">
                                                        <h5>Achievements</h5>
                                                        <ul>
                                                            {
                                                                resume.achievementsOne !== "" ? <li>{resume.achievementsOne}</li> : ""
                                                            }
                                                            {
                                                                resume.achievementsTwo !== "" ? <li>{resume.achievementsTwo}</li> : ""
                                                            }
                                                            {
                                                                resume.achievementsThree !== "" ? <li>{resume.achievementsThree}</li> : ""
                                                            }
                                                        </ul>
                                                    </div> :
                                                    ""
                                            }
                                            {
                                                resume.positionsofRespobsibility !== "" ?
                                                    <div className="achievements">
                                                        <h5>Positions of Responsibility</h5>
                                                        <h7>
                                                            {
                                                                resume.positionsofRespobsibility !== "" ? resume.positionsofRespobsibility : ""
                                                            }
                                                        </h7>
                                                        <br />
                                                        <h9>
                                                            {
                                                                resume.positionDescription !== "" ? resume.positionDescription : ""
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
                                                        {resume.firstProjectName}
                                                    </h6>
                                                    <h9 className="projectDescription">{resume.firstProjectDescription}</h9>
                                                    <br />
                                                </div>
                                                <div className="appTwo projectDescription">
                                                    <h6>
                                                        {resume.secondProjectName}
                                                    </h6>
                                                    <h9 >{resume.secondProjectDescription}</h9>
                                                    <br />
                                                </div>
                                                <br />
                                                {
                                                    resume.thirdProjectName !== "" ?
                                                        <div className="appThree">
                                                            <h7>
                                                                {
                                                                    resume.thirdProjectName !== "" ? resume.thirdProjectName : ""
                                                                }
                                                            </h7>
                                                            <br />
                                                            <h9 className="projectDescription">
                                                                {
                                                                    resume.thirdProjectDescription !== "" ? resume.thirdProjectDescription : ""
                                                                }
                                                            </h9>
                                                            <br />
                                                        </div> : ""
                                                }
                                            </div>
                                            <h5>Skills</h5>
                                            {
                                                resume.technologyOne !== "" ||
                                                    resume.technologyTwo !== "" ||
                                                    resume.technologyFour !== "" ||
                                                    resume.technologyThree !== "" ||
                                                    resume.technologyFive !== "" ?
                                                    <div>
                                                        <h6 className="skillHeading">Technologies</h6>
                                                        <ol className="lists">
                                                            {
                                                                resume.technologyOne !== "" ? <li className="listElement">{resume.technologyOne}</li> : ""
                                                            }
                                                            {
                                                                resume.technologyTwo !== "" ? <li className="listElement">{resume.technologyTwo}</li> : ""
                                                            }
                                                            {
                                                                resume.technologyThree !== "" ? <li className="listElement">{resume.technologyThree}</li> : ""
                                                            }
                                                            {
                                                                resume.technologyFour !== "" ? <li className="listElement">{resume.technologyFour}</li> : ""
                                                            }
                                                            {
                                                                resume.technologyFive !== "" ? <li className="listElement">{resume.technologyFive}</li> : ""
                                                            }
                                                        </ol>
                                                    </div> : ""
                                            }
                                            {
                                                resume.developmentOne !== "" ||
                                                    resume.developmentTwo !== "" ||
                                                    resume.developmentThree !== "" ||
                                                    resume.developmentFour !== "" ||
                                                    resume.developmentFive !== "" ?

                                                    <div>
                                                        <h6 className="skillHeading">Development</h6>
                                                        <ol className="lists">
                                                            {
                                                                resume.developmentOne !== "" ? <li className="listElement">{resume.developmentOne}</li> : ""
                                                            }
                                                            {
                                                                resume.developmentTwo !== "" ? <li className="listElement">{resume.developmentTwo}</li> : ""
                                                            }
                                                            {
                                                                resume.developmentThree !== "" ? <li className="listElement">{resume.developmentThree}</li> : ""
                                                            }
                                                            {
                                                                resume.developmentFour !== "" ? <li className="listElement">{resume.developmentFour}</li> : ""
                                                            }
                                                            {
                                                                resume.developmentFive !== "" ? <li className="listElement">{resume.developmentFive}</li> : ""
                                                            }
                                                        </ol>
                                                    </div>
                                                    : ""
                                            }
                                            {
                                                resume.programmingLanguagesOne !== "" ||
                                                    resume.programmingLanguagesTwo !== "" ||
                                                    resume.programmingLanguagesThree !== "" ||
                                                    resume.programmingLanguagesFour !== "" ||
                                                    resume.programmingLanguagesFive !== "" ?
                                                    <div>
                                                        <h6 className="skillHeading">Programming Languages</h6>
                                                        <ol className="lists">
                                                            {
                                                                resume.programmingLanguagesOne !== "" ? <li className="listElement">{resume.programmingLanguagesOne}</li> : ""
                                                            }
                                                            {
                                                                resume.programmingLanguagesTwo !== "" ? <li className="listElement">{resume.programmingLanguagesTwo}</li> : ""
                                                            }
                                                            {
                                                                resume.programmingLanguagesThree !== "" ? <li className="listElement">{resume.programmingLanguagesThree}</li> : ""
                                                            }
                                                            {
                                                                resume.programmingLanguagesFour !== "" ? <li className="listElement">{resume.programmingLanguagesFour}</li> : ""
                                                            }
                                                            {
                                                                resume.programmingLanguagesFive !== "" ? <li className="listElement">{resume.programmingLanguagesFive}</li> : ""
                                                            }
                                                        </ol>
                                                    </div>
                                                    : ""
                                            }

                                            {
                                                resume.databaseOne !== "" ||
                                                    resume.databaseTwo !== "" ||
                                                    resume.databaseThree !== "" ||
                                                    resume.databaseFour !== "" ||
                                                    resume.developmentFive !== ""
                                                    ?
                                                    <div>
                                                        <h6 className="skillHeading">Databases</h6>
                                                        <ol className="lists">
                                                            {
                                                                resume.databaseOne !== "" ? <li className="listElement">{resume.databaseOne}</li> : ""
                                                            }
                                                            {
                                                                resume.databaseTwo !== "" ? <li className="listElement">{resume.databaseTwo}</li> : ""
                                                            }
                                                            {
                                                                resume.databaseThree !== "" ? <li className="listElement">{resume.databaseThree}</li> : ""
                                                            }
                                                            {
                                                                resume.databaseFour !== "" ? <li className="listElement">{resume.databaseFour}</li> : ""
                                                            }
                                                            {
                                                                resume.databaseFive !== "" ? <li className="listElement">{resume.databaseFive}</li> : ""
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
                    )
                })
            }
    
        </Carousel>
    )
}

export default MyResumes;