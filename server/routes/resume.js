const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin')
const Resume = mongoose.model("Resume")

router.get('/allresumes',requireLogin, async (req, res) => {
    try {
        await Resume.find()
        .populate("createdBy","_id name")
        .then(posts=>{
          res.json({posts})
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
})

router.get('/myresumes',requireLogin, async (req, res) => {
    try {
        await Resume.find({createdBy:req.user._id})
        .populate("createdBy","_id name")
        .then(myPosts=>{
          res.json({myPosts})
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
})

router.post('/createresume', requireLogin, async (req, res) => {
    try {
        const { name, emailID, institueName, majorCourseName, minorCourseNam, gradutionMonthAndYear, institueLocation, CGPA, institueNameSecond, majorCourseNameSecond, minorCourseNameSecond, gradutionMonthAndYearSecond, institueLocationSecond, CGPASecond, githubProfile, linkedInProfile, hackerrankProfile, codechefProfile, twitterProfile, PortfolioProfile, courseWorkSubjectsOne, courseWorkSubjectsTwo, courseWorkSubjectsThree, courseWorkSubjectsFour, courseWorkSubjectsFive, technologyOne, technologyTwo, technologyThree, technologyFour, technologyFive, developmentOne ,developmentTwo ,developmentThree, developmentFour, developmentFive, programmingLanguagesOne, programmingLanguagesTwo, programmingLanguagesThree, programmingLanguagesFour, programmingLanguagesFive, databaseOne, databaseTwo, databaseThree, databaseFour, databaseFive, achievementsOne, achievementsTwo, achievementsThree, firstProjectName, firstProjectDescription, secondProjectName, secondProjectDescription, thirdProjectName, thirdProjectDescription, positionsofRespobsibility, positionDescription, createdBy } = req.body;
        if (!name || !emailID || !institueName || !majorCourseName || !minorCourseNam || !gradutionMonthAndYear || !institueLocation || !CGPA || !firstProjectName || !firstProjectDescription || !secondProjectName || !secondProjectDescription ) {
            return res.status(422).json({ error: "Please Add All the Fields" })
        }
        req.user.password = undefined
        const resume = new Resume({
            name, emailID, institueName, majorCourseName, minorCourseNam, gradutionMonthAndYear, institueLocation, CGPA, institueNameSecond, majorCourseNameSecond, minorCourseNameSecond, gradutionMonthAndYearSecond, institueLocationSecond, CGPASecond, githubProfile, linkedInProfile, hackerrankProfile, codechefProfile, twitterProfile, PortfolioProfile, courseWorkSubjectsOne, courseWorkSubjectsTwo, courseWorkSubjectsThree, courseWorkSubjectsFour, courseWorkSubjectsFive, technologyOne, technologyTwo, technologyThree, technologyFour, technologyFive, developmentOne ,developmentTwo ,developmentThree, developmentFour, developmentFive, programmingLanguagesOne, programmingLanguagesTwo, programmingLanguagesThree, programmingLanguagesFour, programmingLanguagesFive, databaseOne, databaseTwo, databaseThree, databaseFour, databaseFive, achievementsOne, achievementsTwo, achievementsThree, firstProjectName, firstProjectDescription, secondProjectName, secondProjectDescription, thirdProjectName, thirdProjectDescription, positionsofRespobsibility, positionDescription,
            createdBy: req.user
        })
        resume.save().then(result => {
            res.json({ resume: result })
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json("Error")

    }
})

module.exports = router