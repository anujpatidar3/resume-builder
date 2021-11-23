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
                                                <div>
                                                    <h7>{resume.instituteName}</h7>
                                                    <br />
                                                    <h7>{resume.majorCourseName}</h7><br />
                                                    <h7>{resume.minorCourseName}</h7><br />
                                                    <h7>{resume.gradutionMonthAndYear}</h7><br />
                                                    <h7>{resume.institueLocation}</h7><br />
                                                    <h7>{resume.CGPA}</h7><br />
                                                </div>
                                                <div className="instituteTwo">
                                                    <h7>
                                                        {
                                                            resume.instituteNameSecond !== "" &&
                                                            resume.instituteNameSecond
                                                        }
                                                    </h7>
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
                                                <br />

                                            </div>
                                            <br />
                                            <div className="links">
                                                <h5>Links</h5>
                                                {
                                                    resume.githubProfile !== "" &&
                                                    resume.githubProfile
                                                }
                                                <br />
                                                {
                                                    resume.linkedInProfile !== "" &&
                                                    resume.linkedInProfile
                                                }
                                                Linkedin:// sampleLinkedinLink<br />
                                                Hackerrank:// sampleHackerrankLink<br />
                                                Codechef:// sampleCodechefLink<br />
                                            </div>
                                            <br />
                                            <div className="skills">
                                                <h5>Skills</h5>
                                                <h6>Technical Skills</h6>
                                                <h7>Technologies</h7>
                                                <ol>
                                                    <li>competitive programming</li>
                                                    <li>development</li>
                                                    <li>Git</li>
                                                </ol>
                                                <h7>Development</h7>
                                                <ol>
                                                    <li>Web</li>
                                                    <li>Android</li>
                                                    <li>React Native</li>
                                                </ol>
                                                <h7>Languages</h7>
                                                <ol>
                                                    <li>C++</li>
                                                    <li>Java</li>
                                                    <li>Python</li>
                                                </ol>
                                                <h7>Databases</h7>
                                                <ol>
                                                    <li>SQL</li>
                                                    <li>MySQL</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="secondColumn">
                                            <div>
                                                <h5>Technical Projects</h5>
                                                <div className="appOne">
                                                    <h7>App Name 1 | App Type</h7>
                                                    <br />
                                                    <h7>App date</h7><br />
                                                    <ol>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                    </ol>
                                                    <br />
                                                </div>
                                                <div className="appTwo">
                                                    <h7>App Name 2 | App Type</h7>
                                                    <br />
                                                    <h7>App date</h7><br />
                                                    <ol>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                    </ol>
                                                    <br />
                                                </div>
                                                <br />
                                                <div className="appThree">
                                                    <h7>App Name 3 | App Type</h7>
                                                    <br />
                                                    <h7>App date</h7><br />
                                                    <ol>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                        <li>Lorem ipsum dolor sit amet.m in quia ipsum non totam dolores et numquam neque eos blanditiis nostrum. Aut vitae consequatur aut laboriosam placeat eum eius enim est ducimus porro!</li>
                                                    </ol>
                                                    <br />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="certifications">
                                                <h5>Certifications</h5>
                                                <h6>Certificate Header</h6>
                                                <ol>
                                                    <li>Certificate 1</li>
                                                    <li>Certificate 2</li>
                                                    <li>Certificate 3</li>
                                                    <li>Certificate 4</li>
                                                    <li>Certificate 5</li>
                                                </ol>
                                            </div>
                                            <br />
                                            <div className="achievements">
                                                <h6>Hackerrank</h6>
                                                <ol>
                                                    <li>Bronze Badge:C, C++</li>
                                                    <li>Silver Badge:Java</li>
                                                    <li>Gold Badge:Python</li>
                                                </ol>
                                                <h6>Codechef</h6>
                                                <ol>
                                                    <li>Highest Rating:2 Star Rating</li>
                                                </ol>
                                                <h6>Question Solved</h6>
                                                <ol>
                                                    <li>300+</li>
                                                </ol>
                                            </div>
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