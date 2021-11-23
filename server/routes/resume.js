const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin')
const Resume = mongoose.model("Resume")

router.get('/allresumes',requireLogin,  (req, res) => {
    try {
        Resume.find()
        .populate("createdBy","_id name")
        .then(resume=>{
          res.json({resume})
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
})

router.get('/myresumes',requireLogin,  (req, res) => {
    try {
        Resume.find({createdBy:req.user._id})
        .populate("createdBy","_id name")
        .then(myResume=>{
          res.json({myResume})
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error")
    }
})

router.post('/createresume', requireLogin, (req, res,next) => {
        const { name, emailID, instituteName, majorCourseName, minorCourseName, gradutionMonthAndYear, instituteLocation, CGPA, instituteNameSecond, majorCourseNameSecond, minorCourseNameSecond, gradutionMonthAndYearSecond, instituteLocationSecond, CGPASecond, githubProfile, linkedInProfile, hackerrankProfile, codechefProfile, twitterProfile, PortfolioProfile, courseWorkSubjectsOne, courseWorkSubjectsTwo, courseWorkSubjectsThree, courseWorkSubjectsFour, courseWorkSubjectsFive, technologyOne, technologyTwo, technologyThree, technologyFour, technologyFive, developmentOne ,developmentTwo ,developmentThree, developmentFour, developmentFive, programmingLanguagesOne, programmingLanguagesTwo, programmingLanguagesThree, programmingLanguagesFour, programmingLanguagesFive, databaseOne, databaseTwo, databaseThree, databaseFour, databaseFive, achievementsOne, achievementsTwo, achievementsThree, firstProjectName, firstProjectDescription, secondProjectName, secondProjectDescription, thirdProjectName, thirdProjectDescription, positionsofRespobsibility, positionDescription } = req.body;
        if (!name || !emailID || !instituteName || !majorCourseName || !gradutionMonthAndYear || !instituteLocation || !CGPA || !firstProjectName || !firstProjectDescription || !secondProjectName || !secondProjectDescription ) {
            return res.status(422).json({ error: "Please Add All the Fields" })
        }
        const resume = new Resume({
            name, emailID, instituteName, majorCourseName, minorCourseName, gradutionMonthAndYear, instituteLocation, CGPA, instituteNameSecond, majorCourseNameSecond, minorCourseNameSecond, gradutionMonthAndYearSecond, instituteLocationSecond, CGPASecond, githubProfile, linkedInProfile, hackerrankProfile, codechefProfile, twitterProfile, PortfolioProfile, courseWorkSubjectsOne, courseWorkSubjectsTwo, courseWorkSubjectsThree, courseWorkSubjectsFour, courseWorkSubjectsFive, technologyOne, technologyTwo, technologyThree, technologyFour, technologyFive, developmentOne ,developmentTwo ,developmentThree, developmentFour, developmentFive, programmingLanguagesOne, programmingLanguagesTwo, programmingLanguagesThree, programmingLanguagesFour, programmingLanguagesFive, databaseOne, databaseTwo, databaseThree, databaseFour, databaseFive, achievementsOne, achievementsTwo, achievementsThree, firstProjectName, firstProjectDescription, secondProjectName, secondProjectDescription, thirdProjectName, thirdProjectDescription, positionsofRespobsibility, positionDescription,
            createdBy: req.user
        })
        resume.save().then(result => {
            res.json({ resume: result })
        })
})

router.post('/editresume',requireLogin,(req,res)=>{
   
})

router.delete('/deleteresume/:resumeId', requireLogin, (req, res) => {
    Resume.findOne({ _id: req.params.resumeId })
        .populate("createBy", "id")
        .exec((err, resume) => {
            if (err || !resume) {
                return res.status(422).json({ error: err })
            }
            if (resume.postedBy._id.toString() === req.user._id.toString()) {
                resume.remove()
                    .then(result => {
                        console.log(result)
                        res.json(result)
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
})



module.exports = router