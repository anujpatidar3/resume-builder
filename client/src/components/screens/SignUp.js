import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast('Invalid Email', { position: toast.POSITION.TOP_RIGHT })
            return
        }
        fetch("/signup", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
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
                                <a className="githubLinks" href="https://github.com/anujpatidar3"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" />Anuj Patidar</a>
                                <a className="githubLinks" href="https://github.com/aikansh2001yadav"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" />Aikansh Yadav</a>
                                <a className="githubLinks" href="https://github.com/Jay2001dave"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" />Jay Dave</a>
                            </div>
                        </h4>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signUpCard">
                        <div className="card AuthCard input-field">
                            <h2 className="signUpHeading">RESUME BUILDER</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="signUpButton btn waves-effect waves-light blue darken-1"
                                onClick={() => PostData()}
                            >Sign Up
                            </button>
                            <h5>
                                <Link className="linkStyle" to='/signin'>Already Have an Account?</Link>
                            </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;
