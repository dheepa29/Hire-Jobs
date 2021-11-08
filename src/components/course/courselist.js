import React from "react";
import ReactPlayer from"react-player";
import {Box,Grid,Typography,Select,MenuItem,makeStyles} from "@material-ui/core";
import styled from "styled-components";





const Courselist = (props) =>{
 
    return(
        <><Box py={10} bgcolor="#0B0B15" color="white">
            <Grid container justify="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">
                            CourseInfo
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Tom>TRMS</Tom>
        <Deepa>
                <ReactPlayer url="https://youtu.be/K6yTcYIfW-s" controls={true} />
            </Deepa>
            <Gokul>
                <h1>Description:</h1>
                <Points>
                    <h2>Qualification</h2>
                    <ul>
                        <li>1. Graduate in any discipline is required.</li>
                        <li>2.Exceptional operational, managerial, analytical and interpersonal skills</li>
                        <p>Researches and evaluates facts surrounding buyer and/or seller transactions.

Takes appropriate action on investigated transactions based on established SOPs and tools.

Documents their actions by providing detailed annotations.

Communicates with external customers via phone and email during the investigation process.

Communicates with internal customers and peers in person, via email, annotations and phone during and following the investigation process.</p>
                    </ul>
                </Points>

            </Gokul>
            {/* <Button  variant = "contained" disableElevation color="primary">Apply</Button> */}
            <Button>Apply</Button>
            </>

    )
}

const Deepa = styled.div`
justify-content:center;
margin-left:190px;
`;

const Gokul = styled.div`
font-size:20px;
font-weight:200;
`;

const Tom = styled.div`
font-size:30px;
/* color: #0a66c2; */
font-weight:600;
`;


const Points = styled.div`
h2{
    font-size:17px;
}
ul{
    font-size:15px;
    font-weight:200;
}
`;

const Button =styled.button`
box-shadow : inset 0 0 0 1px #0a66c2;
color:#FFF;
border-radius: 59px;
transition-duration : 167ms;
font-size : 16px;
font-weight :600;
/* line-height:40px; */
padding:10px 24px;
text-align:center;
margin-left:478px;
margin-top:40px;
background-color : #0a66c2;
&:hover{
    background-color:rgba(112,181,249,0.15);
    color:#0a66c2;
    text-decoration:none;
}
`;

export default Courselist;