import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/edit.css'

const EditResumes = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("resume")))
    }, [])

    const [emailID, setEmailID] = useState(data.emailID)
    const [name, setName] = useState(data.name)
    const [instituteName, setInstituteName] = useState(data.instituteName)
    const [majorCourseName, setMajorCourseName] = useState(data.majorCourseName)
    const [minorCourseName, setMinorCourseName] = useState(data.minorCourseName)
    const [gradutionMonthAndYear, setGraduationYear] = useState(data.gradutionMonthAndYear)
    const [instituteLocation, setInstituteLocation] = useState(data.instituteLocation)
    const [CGPA, setCGPA] = useState(data.CGPA)

    const [instituteNameSecond, setInsituteName2] = useState(data.instituteNameSecond)
    const [majorCourseNameSecond, setMajorCourseName2] = useState(data.majorCourseNameSecond)
    const [minorCourseNameSecond, setMinorCourseName2] = useState(data.minorCourseNameSecond)
    const [gradutionMonthAndYearSecond, setGraduationYear2] = useState(data.gradutionMonthAndYearSecond)
    const [instituteLocationSecond, setInsituteLocation2] = useState(data.instituteLocationSecond)
    const [CGPASecond, setCGPA2] = useState(data.CGPASecond)

    const [courseWorkSubjectsOne, setCourseSubject] = useState(data.courseWorkSubjectsOne)
    const [courseWorkSubjectsTwo, setCourseSubject2] = useState(data.courseWorkSubjectsTwo)
    const [courseWorkSubjectsThree, setCourseSubject3] = useState(data.courseWorkSubjectsThree)
    const [courseWorkSubjectsFour, setCOurseSubject4] = useState(data.courseWorkSubjectsFour)
    const [courseWorkSubjectsFive, setCourseSubject5] = useState(data.courseWorkSubjectsFive)

    const [programmingLanguagesOne, setProgrammingLanguage] = useState(data.programmingLanguagesOne)
    const [programmingLanguagesTwo, setProgrammingLanguage2] = useState(data.programmingLanguagesTwo)
    const [programmingLanguagesThree, setProgrammingLanguage3] = useState(data.programmingLanguagesThree)
    const [programmingLanguagesFour, setProgrammingLanguage4] = useState(data.programmingLanguagesFour)
    const [programmingLanguagesFive, setProgrammingLanguage5] = useState(data.programmingLanguagesFive)


    const [developmentOne, setDevelopmentSkill] = useState(data.developmentOne)
    const [developmentTwo, setDevelopmentSkill2] = useState(data.developmentTwo)
    const [developmentThree, setDevelopmentSkill3] = useState(data.developmentThree)
    const [developmentFour, setDevelopmentSkill4] = useState(data.developmentFour)
    const [developmentFive, setDevelopmentSkill5] = useState(data.developmentFive)

    const [technologyOne, setTechnologicalSkill] = useState(data.technologyOne)
    const [technologyTwo, setTechnologicalSkill2] = useState(data.technologyTwo)
    const [technologyThree, setTechnologicalSkill3] = useState(data.technologyThree)
    const [technologyFour, setTechnologicalSkill4] = useState(data.technologyFour)
    const [technologyFive, setTechnologicalSkill5] = useState(data.technologyFive)

    const [databaseOne, setDatabaseSkill] = useState(data.databaseOne)
    const [databaseTwo, setDatabaseSkill2] = useState(data.databaseTwo)
    const [databaseThree, setDatabaseSkill3] = useState(data.databaseThree)
    const [databaseFour, setDatabaseSkill4] = useState(data.databaseFour)
    const [databaseFive, setDatabaseSkill5] = useState(data.databaseFive)

    const [achievementsOne, setAchievement] = useState(data.achievementsOne)
    const [achievementsTwo, setAchievement2] = useState(data.achievementsTwo)
    const [achievementsThree, setAchievement3] = useState(data.achievementsThree)

    const [positionsofRespobsibility, setPosition] = useState(data.positionsofRespobsibility)
    const [positionDescription, setPositionDescription] = useState(data.positionDescription)

    const [githubProfile, setGithubProfile] = useState(data.githubProfile)
    const [linkedInProfile, setLinkedinProfile] = useState(data.linkedInProfile)
    const [hackerrankProfile, setHackerrankProfile] = useState(data.hackerrankProfile)
    const [codechefProfile, setCodechefProfile] = useState(data.codechefProfile)
    const [twitterProfile, setTwitterProfile] = useState(data.twitterProfile)
    const [PortfolioProfile, setPortfolioLink] = useState(data.PortfolioProfile)

    const [firstProjectName, setProjectName] = useState(data.firstProjectName)
    const [firstProjectDescription, setProjectDescription] = useState(data.firstProjectDescription)
    const [secondProjectName, setProjectName2] = useState(data.secondProjectName)
    const [secondProjectDescription, setProjectDescription2] = useState(data.secondProjectDescription)
    const [thirdProjectName, setProjectName3] = useState(data.thirdProjectName)
    const [thirdProjectDescription, setProjectDescription3] = useState(data.thirdProjectDescription)


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

    const PostData = () => {
        fetch("/createresume", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                name,
                emailID,
                instituteName,
                majorCourseName,
                minorCourseName,
                gradutionMonthAndYear,
                instituteLocation,
                CGPA,
                instituteNameSecond,
                majorCourseNameSecond,
                minorCourseNameSecond,
                gradutionMonthAndYearSecond,
                instituteLocationSecond,
                CGPASecond,
                githubProfile,
                linkedInProfile,
                hackerrankProfile,
                codechefProfile,
                twitterProfile,
                PortfolioProfile,
                courseWorkSubjectsOne,
                courseWorkSubjectsTwo,
                courseWorkSubjectsThree,
                courseWorkSubjectsFour,
                courseWorkSubjectsFive,
                technologyOne,
                technologyTwo,
                technologyThree,
                technologyFour,
                technologyFive,
                developmentOne,
                developmentTwo,
                developmentThree,
                developmentFour,
                developmentFive,
                programmingLanguagesOne,
                programmingLanguagesTwo,
                programmingLanguagesThree,
                programmingLanguagesFour,
                programmingLanguagesFive,
                databaseOne,
                databaseTwo,
                databaseThree,
                databaseFour,
                databaseFive,
                achievementsOne,
                achievementsTwo,
                achievementsThree,
                firstProjectName,
                firstProjectDescription,
                secondProjectName,
                secondProjectDescription,
                thirdProjectName,
                thirdProjectDescription,
                positionsofRespobsibility,
                positionDescription
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    toast(data.error,
                        { position: toast.POSITION.TOP_RIGHT })
                } else {
                    toast("Resume Created Succesfully",
                        { position: toast.POSITION.TOP_RIGHT })
                    navigate('/myresumes')
                }
            }).catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        setEmailID(data.emailID)
        setName(data.name)
        setInstituteName(data.instituteName)
        setMajorCourseName(data.majorCourseName)
        setMinorCourseName(data.minorCourseName)
        setGraduationYear(data.setGraduationYear)
        setInstituteLocation(data.instituteLocation)
        setCGPA(data.CGPA)

        setInsituteName2(data.instituteNameSecond)
        setMajorCourseName2(data.majorCourseNameSecond)
        setMinorCourseName2(data.minorCourseNameSecond)
        setGraduationYear2(data.setGraduationYear2)
        setInsituteLocation2(data.instituteLocationSecond)
        setCGPA2(data.CGPASecond)


        setCourseSubject(data.courseWorkSubjectsOne)
        setCourseSubject2(data.courseWorkSubjectsTwo)
        setCourseSubject3(data.courseWorkSubjectsThree)
        setCOurseSubject4(data.courseWorkSubjectsFour)
        setCourseSubject5(data.courseWorkSubjectsFive)


        setProgrammingLanguage(data.programmingLanguagesOne)
        setProgrammingLanguage2(data.programmingLanguagesTwo)
        setProgrammingLanguage3(data.programmingLanguagesThree)
        setProgrammingLanguage4(data.programmingLanguagesFour)
        setProgrammingLanguage5(data.programmingLanguagesFive)

        setDevelopmentSkill(data.developmentOne)
        setDevelopmentSkill2(data.developmentTwo)
        setDevelopmentSkill3(data.developmentThree)
        setDevelopmentSkill4(data.developmentFour)
        setDevelopmentSkill5(data.developmentFive)

        setTechnologicalSkill(data.technologyOne)
        setTechnologicalSkill2(data.technologyTwo)
        setTechnologicalSkill3(data.technologyThree)
        setTechnologicalSkill4(data.technologyFour)
        setTechnologicalSkill5(data.technologyFive)

        setDatabaseSkill(data.databaseOne)
        setDatabaseSkill2(data.databaseTwo)
        setDatabaseSkill3(data.databaseThree)
        setDatabaseSkill4(data.databaseFour)
        setDatabaseSkill5(data.databaseFive)

        setAchievement(data.achievementsOne)
        setAchievement2(data.achievementsTwo)
        setAchievement3(data.achievementsThree)


        setPosition(data.positionsofRespobsibility)
        setPositionDescription(data.positionDescription)




        setGithubProfile(data.githubProfile)
        setLinkedinProfile(data.linkedInProfile)
        setHackerrankProfile(data.hackerrankProfile)
        setCodechefProfile(data.codechefProfile)
        setTwitterProfile(data.twitterProfile)
        setPortfolioLink(data.PortfolioProfile)


        setProjectName(data.firstProjectName)
        setProjectDescription(data.firstProjectDescription)
        setProjectName2(data.secondProjectName)
        setProjectDescription2(data.secondProjectDescription)
        setProjectDescription3(data.thirdProjectDescription)
        setProjectName3(data.thirdProjectName)
    }, [data])



    return (
        <Carousel
            className="editResumeCard"
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={false}
            sliderClass={'react-multi-carousel-list'}
            infinite={true}
            keyBoardControl={true}
            customTransition='transform 300ms ease-in-out'
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            <div>
                <div className="card educationCard">
                    <div style={{ margin: "10px" }}>
                        <h2 className="education">EDUCATION</h2>
                        <input
                            type="text"
                            placeholder="Name*"
                            onChange={(e) => setName(e.target.value)}
                            required
                            value={name}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Email Address*"
                            onChange={(e) => setEmailID(e.target.value)}
                            required
                            value={emailID}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Institute Name*"
                            onChange={(e) => setInstituteName(e.target.value)}
                            required
                            value={instituteName}
                            tabIndex={-1}
                        />
                        <div className="subHeadingContent">
                            <input
                                type="text"
                                className="subject"
                                placeholder="Major Course Name*"
                                onChange={(e) => setMajorCourseName(e.target.value)}
                                required
                                value={majorCourseName}
                                tabIndex={-1}
                            />
                            <input
                                type="text"
                                className="subject"
                                placeholder="Minor Course Name"
                                onChange={(e) => setMinorCourseName(e.target.value)}
                                value={minorCourseName}
                                tabIndex={-1}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Graduation Year*"
                            onChange={(e) => setGraduationYear(e.target.value)}
                            required
                            value={gradutionMonthAndYear}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Institue Location*"
                            onChange={(e) => setInstituteLocation(e.target.value)}
                            required
                            value={instituteLocation}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="CGPA or Percentage*"
                            onChange={(e) => setCGPA(e.target.value)}
                            required
                            value={CGPA}
                            tabIndex={-1}

                        />
                        <input
                            type="text"
                            placeholder="Institute Name 2"
                            onChange={(e) => setInsituteName2(e.target.value)}
                            value={instituteNameSecond}
                            tabIndex={-1}
                        />
                        <div className="subHeadingContent">
                            <input
                                type="text"
                                className="subject"
                                placeholder="Major Course Name"
                                onChange={(e) => setMajorCourseName2(e.target.value)}
                                value={majorCourseNameSecond}
                                tabIndex={-1}
                            />
                            <input
                                type="text"
                                className="subject"
                                placeholder="Minor Course Name"
                                onChange={(e) => setMinorCourseName2(e.target.value)}
                                value={minorCourseNameSecond}
                                tabIndex={-1}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Graduation Year"
                            onChange={(e) => setGraduationYear2(e.target.value)}
                            value={gradutionMonthAndYearSecond}
                            tabIndex={-1}

                        />
                        <input
                            type="text"
                            placeholder="Institue Location"
                            onChange={(e) => setInsituteLocation2(e.target.value)}
                            value={instituteLocationSecond}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="CGPA or Percentage"
                            onChange={(e) => setCGPA2(e.target.value)}
                            value={CGPASecond}
                            tabIndex={-1}

                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="card skillsCard">
                    <div style={{ margin: "10px" }}>
                        <h2 className="skills">SKILLS</h2>
                        <h4 className="skillsHeading">COURSEWORK SUBJECTS</h4>
                        <div className="subHeadingContent">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) => setCourseSubject(e.target.value)}
                                value={courseWorkSubjectsOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) => setCourseSubject2(e.target.value)}
                                value={courseWorkSubjectsTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) => setCourseSubject3(e.target.value)}
                                value={courseWorkSubjectsThree}
                                tabIndex={-1}

                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) => setCOurseSubject4(e.target.value)}
                                value={courseWorkSubjectsFour}
                                tabIndex={-1}

                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={(e) => setCourseSubject5(e.target.value)}
                                value={courseWorkSubjectsFive}
                                tabIndex={-1}

                            />
                        </div>
                        <h4 className="skillsHeading">PROGRAMMING LANGUAGES</h4>
                        <div className="subHeadingContent ">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Language"
                                onChange={(e) => setProgrammingLanguage(e.target.value)}
                                value={programmingLanguagesOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Language"
                                onChange={(e) => setProgrammingLanguage2(e.target.value)}
                                value={programmingLanguagesTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Language"
                                onChange={(e) => setProgrammingLanguage3(e.target.value)}
                                value={programmingLanguagesThree}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Language"
                                onChange={(e) => setProgrammingLanguage4(e.target.value)}
                                value={programmingLanguagesFour}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Language"
                                onChange={(e) => setProgrammingLanguage5(e.target.value)}
                                value={programmingLanguagesFive}
                                tabIndex={-1}
                            />
                        </div>
                        <h4 className="skillsHeading">DEVELOPMENT</h4>
                        <div className="subHeadingContent ">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Development"
                                onChange={(e) => setDevelopmentSkill(e.target.value)}
                                value={developmentOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Development"
                                onChange={(e) => setDevelopmentSkill2(e.target.value)}
                                value={developmentTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Development"
                                onChange={(e) => setDevelopmentSkill3(e.target.value)}
                                value={developmentThree}
                                tabIndex={-1}

                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Development"
                                onChange={(e) => setDevelopmentSkill4(e.target.value)}
                                value={developmentFour}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Development"
                                onChange={(e) => setDevelopmentSkill5(e.target.value)}
                                value={developmentFive}
                                tabIndex={-1}
                            />
                        </div>
                        <h4 className="skillsHeading">TECHNOLOGIES</h4>
                        <div className="subHeadingContent ">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Technology"
                                onChange={(e) => setTechnologicalSkill(e.target.value)}
                                value={technologyOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Technology"
                                onChange={(e) => setTechnologicalSkill2(e.target.value)}
                                value={technologyTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Technology"
                                onChange={(e) => setTechnologicalSkill3(e.target.value)}
                                value={technologyThree}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Technology"
                                onChange={(e) => setTechnologicalSkill4(e.target.value)}
                                value={technologyFour}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Technology"
                                onChange={(e) => setTechnologicalSkill5(e.target.value)}
                                value={technologyFive}
                                tabIndex={-1}
                            />
                        </div>
                        <h4 className="skillsHeading">DATABASES</h4>
                        <div className="subHeadingContent ">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Database"
                                onChange={(e) => setDatabaseSkill(e.target.value)}
                                value={databaseOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Database"
                                onChange={(e) => setDatabaseSkill2(e.target.value)}
                                value={databaseTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Database"
                                onChange={(e) => setDatabaseSkill3(e.target.value)}
                                value={databaseThree}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Database"
                                onChange={(e) => setDatabaseSkill4(e.target.value)}
                                value={databaseFour}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Database"
                                onChange={(e) => setDatabaseSkill5(e.target.value)}
                                value={databaseFive}
                                tabIndex={-1}
                            />
                        </div>
                        <h4 className="skillsHeading">ACHIEVEMENTS</h4>
                        <div className="subHeadingContent ">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Achievement"
                                onChange={(e) => setAchievement(e.target.value)}
                                value={achievementsOne}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Achievement"
                                onChange={(e) => setAchievement2(e.target.value)}
                                value={achievementsTwo}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Achievement"
                                onChange={(e) => setAchievement3(e.target.value)}
                                value={achievementsThree}
                                tabIndex={-1}
                            />
                        </div>
                        <h4 className="skillsHeading">POSITIONS OF RESPONSIBILITY</h4>
                        <div className="">
                            <input
                                className="subject"
                                type="text"
                                placeholder="Position"
                                onChange={(e) => setPosition(e.target.value)}
                                value={positionsofRespobsibility}
                                tabIndex={-1}
                            />
                            <input
                                className="subject"
                                type="text"
                                placeholder="Position Description"
                                onChange={(e) => setPositionDescription(e.target.value)}
                                value={positionDescription}
                                tabIndex={-1}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card linksCard">
                    <div style={{ margin: "10px" }}>
                        <h2 className="links">LINKS</h2>
                        <input
                            type="text"
                            placeholder="Github Profile"
                            onChange={(e) => setGithubProfile(e.target.value)}
                            value={githubProfile}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="LinkedIn Profile"
                            onChange={(e) => setLinkedinProfile(e.target.value)}
                            value={linkedInProfile}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Hackerrank Profile"
                            onChange={(e) => setHackerrankProfile(e.target.value)}
                            value={hackerrankProfile}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Codechef Profile"
                            onChange={(e) => setCodechefProfile(e.target.value)}
                            value={codechefProfile}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Twitter Profile"
                            onChange={(e) => setTwitterProfile(e.target.value)}
                            value={twitterProfile}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Portfolio Website"
                            onChange={(e) => setPortfolioLink(e.target.value)}
                            value={PortfolioProfile}
                            tabIndex={-1}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="card projectCard">
                    <div style={{ margin: "10px" }}>
                        <h2 className="links">PROJECTS</h2>
                        <input
                            type="text"
                            placeholder="Project Name*"
                            required
                            onChange={(e) => setProjectName(e.target.value)}
                            value={firstProjectName}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Project Description*"
                            required
                            onChange={(e) => setProjectDescription(e.target.value)}
                            value={firstProjectDescription}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Project Name*"
                            required
                            onChange={(e) => setProjectName2(e.target.value)}
                            value={secondProjectName}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Project Description*"
                            required
                            onChange={(e) => setProjectDescription2(e.target.value)}
                            value={secondProjectDescription}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Project Name"
                            onChange={(e) => setProjectName3(e.target.value)}
                            value={thirdProjectName}
                            tabIndex={-1}
                        />
                        <input
                            type="text"
                            placeholder="Project Description"
                            onChange={(e) => setProjectDescription3(e.target.value)}
                            value={thirdProjectDescription}
                            tabIndex={-1}
                        />
                    </div>
                </div>
                <button
                    className="btn waves-effect waves-light submitButton"
                    tabIndex={-1}
                    onClick={() => PostData()}
                >
                    <h6 style={{ color: "white" }}>SUBMIT DETAILS</h6>
                </button>
            </div>
        </Carousel>
    )

}

export default EditResumes;