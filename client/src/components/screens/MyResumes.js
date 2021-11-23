import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../CSS/resumeTempOne.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';


const MyResumes = () => {

    const [data, setData] = useState([])
    const componentRef = useRef();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        fetch('/myresumes', {
            headers: {
                "Authorization": localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.myResume);
            })
    }, [])

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {
                data.map(myResume => {
                    return (
                        <div key={myResume._id}>
                            <Container className="card resumeCard">
                                <Row>
                                    <ReactToPrint
                                        trigger={() => <button style={{ display: "none" }}>Print this out!</button>}
                                        content={() => componentRef.current}
                                    />
                                    <div ref={componentRef}>
                                        <div className="heading">
                                            <h3 className="heading">{myResume.name}</h3>
                                        </div>
                                        <div className="subHeading">
                                            <h5 className="subHeading">{myResume.emailID}</h5>
                                            <hr />
                                        </div>
                                        <div className="columns">
                                            <div className="firstColumn">
                                                <div>
                                                    <h5>Education</h5>
                                                    <div className="educationOne">
                                                        <h7>{myResume.instituteName}</h7>
                                                        <h7>{myResume.majorCourseName}</h7>
                                                        <h7>{myResume.minorCourseName}</h7>
                                                        <h7>{myResume.gradutionMonthAndYear}</h7>
                                                        <h7>{myResume.institueLocation}</h7>
                                                        <h7>{myResume.CGPA}</h7>
                                                    </div>
                                                    <div className="instituteTwo">
                                                        <h6>
                                                            {
                                                                myResume.instituteNameSecond !== "" &&
                                                                myResume.instituteNameSecond
                                                            }
                                                        </h6>
                                                        <h7>
                                                            {myResume.majorCourseNameSecond !== "" &&
                                                                myResume.majorCourseNameSecond
                                                            }
                                                        </h7>
                                                        <h7>
                                                            {
                                                                myResume.minorCourseNameSecond !== "" &&
                                                                myResume.minorCourseNameSecond
                                                            }
                                                        </h7>
                                                        <h7>
                                                            {
                                                                myResume.gradutionMonthAndYearSecond !== "" &&
                                                                myResume.gradutionMonthAndYearSecond
                                                            }
                                                        </h7>
                                                        <h7>
                                                            {
                                                                myResume.instituteLocationSecond !== "" &&
                                                                myResume.instituteLocationSecond
                                                            }
                                                        </h7>
                                                        <h7>
                                                            {
                                                                myResume.CGPASecond !== "" &&
                                                                myResume.CGPASecond
                                                            }</h7>
                                                    </div>
                                                </div>
                                                {
                                                    myResume.githubProfile !== "" ||
                                                        myResume.linkedInProfile !== "" ||
                                                        myResume.hackerrankProfile !== "" ||
                                                        myResume.codechefProfile !== "" ||
                                                        myResume.twitterProfile !== "" ?
                                                        <div>
                                                            <div className="links">
                                                                <h5 className="linkHeader">Links</h5>
                                                                {
                                                                    myResume.githubProfile !== "" ? <a className="linksItem" href={myResume.githubProfile}>Github</a> : ""
                                                                }
                                                                {
                                                                    myResume.linkedInProfile !== "" ? <a className="linksItem" href={myResume.linkedInProfile}>Linkedin</a> : ""
                                                                }
                                                                {
                                                                    myResume.hackerrankProfile !== "" ? <a className="linksItem" href={myResume.hackerrankProfile}>Hackerrank</a> : ""
                                                                }
                                                                {
                                                                    myResume.codechefProfile !== "" ? <a className="linksItem" href={myResume.codechefProfile}>Codechef</a> : ""
                                                                }
                                                                {
                                                                    myResume.twitterProfile !== "" ? <a className="linksItem" href={myResume.twitterProfile}>Twitter</a> : ""
                                                                }
                                                            </div>
                                                        </div> : ""
                                                }
                                                {
                                                    myResume.achievementsOne !== "" || myResume.achievementsTwo !== "" || myResume.achievementsThree !== "" ?
                                                        <div className="achievements">
                                                            <h5>Achievements</h5>
                                                            <ul>
                                                                {
                                                                    myResume.achievementsOne !== "" ? <li>{myResume.achievementsOne}</li> : ""
                                                                }
                                                                {
                                                                    myResume.achievementsTwo !== "" ? <li>{myResume.achievementsTwo}</li> : ""
                                                                }
                                                                {
                                                                    myResume.achievementsThree !== "" ? <li>{myResume.achievementsThree}</li> : ""
                                                                }
                                                            </ul>
                                                        </div> :
                                                        ""
                                                }
                                                {
                                                    myResume.positionsofRespobsibility !== "" ?
                                                        <div className="achievements">
                                                            <h5>Positions of Responsibility</h5>
                                                            <h7>
                                                                {
                                                                    myResume.positionsofRespobsibility !== "" ? myResume.positionsofRespobsibility : ""
                                                                }
                                                            </h7>
                                                            <br />
                                                            <h9>
                                                                {
                                                                    myResume.positionDescription !== "" ? myResume.positionDescription : ""
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
                                                            {myResume.firstProjectName}
                                                        </h6>
                                                        <h9 className="projectDescription">{myResume.firstProjectDescription}</h9>
                                                        <br />
                                                    </div>
                                                    <div className="appTwo projectDescription">
                                                        <h6>
                                                            {myResume.secondProjectName}
                                                        </h6>
                                                        <h9 >{myResume.secondProjectDescription}</h9>
                                                        <br />
                                                    </div>
                                                    <br />
                                                    {
                                                        myResume.thirdProjectName !== "" ?
                                                            <div className="appThree">
                                                                <h7>
                                                                    {
                                                                        myResume.thirdProjectName !== "" ? myResume.thirdProjectName : ""
                                                                    }
                                                                </h7>
                                                                <br />
                                                                <h9 className="projectDescription">
                                                                    {
                                                                        myResume.thirdProjectDescription !== "" ? myResume.thirdProjectDescription : ""
                                                                    }
                                                                </h9>
                                                                <br />
                                                            </div> : ""
                                                    }
                                                </div>
                                                <h5>Skills</h5>
                                                {
                                                    myResume.technologyOne !== "" ||
                                                        myResume.technologyTwo !== "" ||
                                                        myResume.technologyFour !== "" ||
                                                        myResume.technologyThree !== "" ||
                                                        myResume.technologyFive !== "" ?
                                                        <div>
                                                            <h6 className="skillHeading">Technologies</h6>
                                                            <ol className="lists">
                                                                {
                                                                    myResume.technologyOne !== "" ? <li className="listElement">{myResume.technologyOne}</li> : ""
                                                                }
                                                                {
                                                                    myResume.technologyTwo !== "" ? <li className="listElement">{myResume.technologyTwo}</li> : ""
                                                                }
                                                                {
                                                                    myResume.technologyThree !== "" ? <li className="listElement">{myResume.technologyThree}</li> : ""
                                                                }
                                                                {
                                                                    myResume.technologyFour !== "" ? <li className="listElement">{myResume.technologyFour}</li> : ""
                                                                }
                                                                {
                                                                    myResume.technologyFive !== "" ? <li className="listElement">{myResume.technologyFive}</li> : ""
                                                                }
                                                            </ol>
                                                        </div> : ""
                                                }
                                                {
                                                    myResume.developmentOne !== "" ||
                                                        myResume.developmentTwo !== "" ||
                                                        myResume.developmentThree !== "" ||
                                                        myResume.developmentFour !== "" ||
                                                        myResume.developmentFive !== "" ?

                                                        <div>
                                                            <h6 className="skillHeading">Development</h6>
                                                            <ol className="lists">
                                                                {
                                                                    myResume.developmentOne !== "" ? <li className="listElement">{myResume.developmentOne}</li> : ""
                                                                }
                                                                {
                                                                    myResume.developmentTwo !== "" ? <li className="listElement">{myResume.developmentTwo}</li> : ""
                                                                }
                                                                {
                                                                    myResume.developmentThree !== "" ? <li className="listElement">{myResume.developmentThree}</li> : ""
                                                                }
                                                                {
                                                                    myResume.developmentFour !== "" ? <li className="listElement">{myResume.developmentFour}</li> : ""
                                                                }
                                                                {
                                                                    myResume.developmentFive !== "" ? <li className="listElement">{myResume.developmentFive}</li> : ""
                                                                }
                                                            </ol>
                                                        </div>
                                                        : ""
                                                }
                                                {
                                                    myResume.programmingLanguagesOne !== "" ||
                                                        myResume.programmingLanguagesTwo !== "" ||
                                                        myResume.programmingLanguagesThree !== "" ||
                                                        myResume.programmingLanguagesFour !== "" ||
                                                        myResume.programmingLanguagesFive !== "" ?
                                                        <div>
                                                            <h6 className="skillHeading">Programming Languages</h6>
                                                            <ol className="lists">
                                                                {
                                                                    myResume.programmingLanguagesOne !== "" ? <li className="listElement">{myResume.programmingLanguagesOne}</li> : ""
                                                                }
                                                                {
                                                                    myResume.programmingLanguagesTwo !== "" ? <li className="listElement">{myResume.programmingLanguagesTwo}</li> : ""
                                                                }
                                                                {
                                                                    myResume.programmingLanguagesThree !== "" ? <li className="listElement">{myResume.programmingLanguagesThree}</li> : ""
                                                                }
                                                                {
                                                                    myResume.programmingLanguagesFour !== "" ? <li className="listElement">{myResume.programmingLanguagesFour}</li> : ""
                                                                }
                                                                {
                                                                    myResume.programmingLanguagesFive !== "" ? <li className="listElement">{myResume.programmingLanguagesFive}</li> : ""
                                                                }
                                                            </ol>
                                                        </div>
                                                        : ""
                                                }

                                                {
                                                    myResume.databaseOne !== "" ||
                                                        myResume.databaseTwo !== "" ||
                                                        myResume.databaseThree !== "" ||
                                                        myResume.databaseFour !== "" ||
                                                        myResume.developmentFive !== ""
                                                        ?
                                                        <div>
                                                            <h6 className="skillHeading">Databases</h6>
                                                            <ol className="lists">
                                                                {
                                                                    myResume.databaseOne !== "" ? <li className="listElement">{myResume.databaseOne}</li> : ""
                                                                }
                                                                {
                                                                    myResume.databaseTwo !== "" ? <li className="listElement">{myResume.databaseTwo}</li> : ""
                                                                }
                                                                {
                                                                    myResume.databaseThree !== "" ? <li className="listElement">{myResume.databaseThree}</li> : ""
                                                                }
                                                                {
                                                                    myResume.databaseFour !== "" ? <li className="listElement">{myResume.databaseFour}</li> : ""
                                                                }
                                                                {
                                                                    myResume.databaseFive !== "" ? <li className="listElement">{myResume.databaseFive}</li> : ""
                                                                }
                                                            </ol>
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" onClick={handlePrint}>Print</button>
                                </Row>
                            </Container>
                        </div>
                    )
                })
            }

        </Carousel>
    )
}

export default MyResumes;