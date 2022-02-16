import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../Css/Login.css";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import logo from "../../assest/image/fluntologo.png";
import logimg from "../../assest/image/logimg.png";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
// import "./Newlogin.css"
import "../../assest/Css/user/Login.css"

function Login() {
    
    return (
        <>
            <div className="newin-login">
                <Row className="newin-mar-row-lr" >
                <Col xs={12} className="newin-mb-sm"> <div className="newin-card-smimg"><img src={logo} /></div></Col>
                    <Col xs={5} className="newin-mar-row-col">
                        <Card className="newin-card-sh">
                            <div className="newin-card-img1"><img src={logo} /></div>
                            <h2>Hi, Welcome Back</h2>
                            <div className="newin-card-img2"><img src={logimg} /></div>
                        </Card>
                    </Col>
                    <Col xs={12} lg={7}>
                    <div className="newin-left-col">
                           
                           
                            <p className="newin-labg">Don’t have an account?<span >
                            <NavLink to="/signup" style={{ color: "green",textDecoration:"none"}}>Get started</NavLink>
                                </span> </p>
                           <div className="newin-left-p">
                            <h5>Sign in to Fluntoo studio</h5>
                            <div className="newin-div-m">Enter your details below.</div>
                            <Form>
                                <Form.Group  controlId="exampleForm.ControlInput1" className="newin-space">
                                   
                                    <Form.Control type="tel" placeholder="Enter mobile number" className="newin-mb-3"/>
                                </Form.Group>
                                <Form.Group  controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control type="password" placeholder="Enter Password" className="newin-mb-3"/>
                                </Form.Group>
                            </Form>
                            <div className="newin-flex-login">
                                <div>
                                    <FormGroup>
                                    <FormControlLabel control={<Checkbox  />} color="success" label="Remember me" />
                                    </FormGroup>
                                    </div> 
                                <div><h6 style={{color:"green",paddingTop:"0.5em"}}>Forgot password?</h6></div>
                            
                        </div>
                        <Button variant="contained" color="success" className="newin-width-left">
                                Login
                        </Button>
                        <div className="newin-mbtm">Don’t have an account?<span style={{ color: "green" }}>
                        <NavLink to="/signup" style={{ color: "green",textDecoration:"none"}}>Get started</NavLink></span> </div>
                       </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Login;