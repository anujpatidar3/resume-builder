import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/SignIn.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast('Invalid Email', { position: toast.POSITION.TOP_RIGHT })
            return
        }
        fetch("/resetpassword", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
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
                                <a className="githubLinks" href="https://github.com/younikarn"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" />Nidhi Karn</a>
                            </div>
                        </h4>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signInCard">
                        <div className="card AuthCard input-field">
                            <h2 className="loginHeading">RESUME BUILDER</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />                            
                            <button className="signinButton btn waves-effect waves-light blue darken-1"
                                onClick={() => PostData()}
                            >Reset Password</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Reset;