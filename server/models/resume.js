const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    instituteName: {
        type: String,
        required: true
    },
    majorCourseName: {
        type: String,
        required: true
    },
    minorCourseName: {
        type: String,
    },
    gradutionMonthAndYear: {
        type: String,
        required: true
    },
    instituteLocation: {
        type: String,
        required: true
    },
    CGPA: {
        type: String,
        required: true
    },
    instituteNameSecond: {
        type: String,
    },
    majorCourseNameSecond: {
        type: String,
    },
    minorCourseNameSecond: {
        type: String,
    },
    gradutionMonthAndYearSecond: {
        type: String,
    },
    instituteLocationSecond: {
        type: String,
    },
    CGPASecond: {
        type: String,
    },
    githubProfile: {
        type: String,
    },
    linkedInProfile: {
        type: String,
    },
    hackerrankProfile: {
        type: String,
    },
    codechefProfile: {
        type: String,
    },
    twitterProfile: {
        type: String,
    },
    PortfolioProfile: {
        type: String,
    },
    courseWorkSubjectsOne: {
        text: String,
    },
    courseWorkSubjectsTwo: {
        text: String,
    },
    courseWorkSubjectsThree: {
        text: String,
    },
    courseWorkSubjectsFour: {
        text: String,
    },
    courseWorkSubjectsFive: {
        text: String,
    },
    technologyOne: {
        type: String,
    },
    technologyTwo: {
        type: String,
    },
    technologyThree: {
        type: String,
    },
    technologyFive: {
        type: String,
    },
    technologyFour: {
        type: String,
    },
    developmentOne: {
        type: String,
    },
    developmentTwo: {
        type: String,
    },
    developmentThree: {
        type: String,
    },
    developmentFour: {
        type: String,
    },
    developmentFive: {
        type: String,
    },
    programmingLanguagesOne: {
        type: String,
    },
    programmingLanguagesTwo: {
        type: String,
    },
    programmingLanguagesThree: {
        type: String,
    },
    programmingLanguagesFour: {
        type: String,
    },
    programmingLanguagesFive: {
        type: String,
    },
    databaseOne: {
        type: String,
    },
    databaseTwo: {
        type: String,
    },
    databaseThree: {
        type: String,
    },
    databaseFour: {
        type: String,
    },
    databaseFive: {
        type: String,
    },
    achievementsOne: {
        type: String,
    },
    achievementsTwo: {
        type: String,
    },
    achievementsThree: {
        type: String,
    },
    firstProjectName: {
        type: String,
        required: true
    },
    firstProjectDescription: {
        type: String,
        required: true
    },
    secondProjectName: {
        type: String,
        required: true
    },
    secondProjectDescription: {
        type: String,
        required: true
    },
    thirdProjectName: {
        type: String,
    },
    thirdProjectDescription: {
        type: String,
    },
    positionsofRespobsibility: {
        type: String
    },
    positionDescription: {
        type: String
    },
    createdBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Resume", resumeSchema);