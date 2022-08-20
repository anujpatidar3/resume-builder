import React, { useState, useContext } from 'react';
import { UserContext } from '../../App'
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/SignIn.css'
import { Link, useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const {token}=useParams()

    const PostData = () => {
        fetch("/newpassword", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                token
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    toast(data.error,
                        { position: toast.POSITION.TOP_RIGHT })
                } else {
                    toast(data.message,
                        { position: toast.POSITION.TOP_RIGHT })
                    navigate('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <div className="aboutUs">
                        <h1 className="aboutUsHeading">
                            About Us
                        </h1>
                        <h4>
                            <div className="aboutUsPara">
                                Resume Builder takes various information from users and plug it in visual form which the user can download, edit or delete. Resume builders are interactive online resume templates that allow you to plug in information and build a cohesive resume.
                                The aim of the project is to automate the process of making resumes. The user can make new resume, edit/delete previous resume and see resumes. The project aims to provide secure authentication and registeration.
                            </div>
                            <br />
                            <div className="createdBy">
                                Created By -
                                <a className="githubLinks" href="https://github.com/anujpatidar3"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="Github"/>Anuj Patidar</a>
                                <a className="githubLinks" href="https://github.com/aikansh2001yadav"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="Github"/>Aikansh Yadav</a>
                                <a className="githubLinks" href="https://github.com/Jay2001dave"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="Github"/>Jay Dave</a>
                            </div>
                        </h4>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signInCard">
                        <div className="card AuthCard input-field">
                            <h2 className="loginHeading">RESUME BUILDER</h2>
                            <input
                                type="password"
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="signinButton btn waves-effect waves-light blue darken-1"
                                onClick={() => PostData()}
                            >Update Password</button>
                            <h5 >
                                <Link className="linkStyle" to='/signup'>Don't Have an Account?</Link>
                            </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;