import React from "react";
import {Box,Grid,Typography,Button} from "@material-ui/core";
import styled from "styled-components";

const Job = (props) => {
    return(
        <Box py={10} bgcolor = "#0B0B15" color = "white">
            <Grid container justify = "center">
                <Grid item xs = {10}>
                    <Box display = "flex" justifyContent = "space-between">
            <Typography variant = "h5">
                HireJobs                
            </Typography>
            <Button variant = "contained" color="primary" disableElevation>Post a Job</Button>
            </Box>
            </Grid>
            </Grid>
        </Box>
    )
}

// const Button = styled.button`
// font-weight: 600;
// text-transform: none;
// color: #0B0B15;
// padding: 6px 24px;
// border-radius: 35px;
// background-color : #18E1D9;
// &:hover{
//     background-color:#1885de;
//     color:#FFF;
//     text-decoration:none;
// }
// `;

export default Job;