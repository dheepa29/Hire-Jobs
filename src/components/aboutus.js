import React from "react";
import styled from "styled-components";
import "./style.css";


const Aboutus = (props) => {
    return(
        <>
        {/* <Header>Our Team</Header> */}
<head>
	<title>Team Section</title>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" href="style.css"/>
</head>
<body>
        <section class="team-section">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h1>Our Team</h1>
                        <p>Hirejobs ,a Job hiring web application was built by reactjs as frontend and firebase as back end .Some features will be added to it in future enhancement.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="team-items">
                        <div class="item">
                            <img src="images/Tom.jpg" alt="team" />
                            <div class="inner">
                                <div class="info">
                                    <h5>GOKUL S</h5>
                                    <p>Team Lead</p>
                                    <div class="social-links">
                                        <a href=""><span class="fa fa-facebook"></span></a>
                                        <a href=""><span class="fa fa-twitter"></span></a>
                                        <a href="https://www.linkedin.com/in/gokul-s-47608b216"><span class="fa fa-linkedin"></span></a>
                                        <a href=""><span class="fa fa-youtube"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/Jerry eruma.jpg" alt="team" />
                            <div class="inner">
                                <div class="info">
                                    <h5>DHEEPA K</h5>
                                    <p>Member 1</p>
                                    <div class="social-links">
                                        <a href=""><span class="fa fa-facebook"></span></a>
                                        <a href=""><span class="fa fa-twitter"></span></a>
                                        <a href=""><span class="fa fa-linkedin"></span></a>
                                        <a href=""><span class="fa fa-youtube"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/anu1.jpg" alt="team" />
                            <div class="inner">
                                <div class="info">
                                    <h5>ANUVARSHINI S</h5>
                                    <p>Member 2</p>
                                    <div class="social-links">
                                        <a href=""><span class="fa fa-facebook"></span></a>
                                        <a href=""><span class="fa fa-twitter"></span></a>
                                        <a href=""><span class="fa fa-linkedin"></span></a>
                                        <a href=""><span class="fa fa-youtube"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/dharani.jpg" alt="team" />
                            <div class="inner">
                                <div class="info">
                                    <h5>DHARANI S</h5>
                                    <p>Member 3</p>
                                    <div class="social-links">
                                        <a href=""><span class="fa fa-facebook"></span></a>
                                        <a href=""><span class="fa fa-twitter"></span></a>
                                        <a href=""><span class="fa fa-linkedin"></span></a>
                                        <a href=""><span class="fa fa-youtube"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </body>
        
        </>


    );
};

const Header =styled.div`
font-size: 40px;
text-align: center;
margin:0;
color: #ffffff;
font-weight: 700;
`;



export default Aboutus;