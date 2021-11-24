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
                        <h1>
                            About Us
                        </h1>
                        <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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