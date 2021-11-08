import React from "react";
import {Box,Grid,Typography,Button} from "@material-ui/core";

const Course =(props) =>{
    return(
            <Box py={5} bgcolor = "#0a66c2" color = "white">
                <Grid container justify = "center">
                    <Grid item xs = {10}>
                        <Box display = "flex" justifyContent = "space-between">
                <Typography variant = "h5">
                    Course              
                </Typography>
                {/* <Button variant = "contained" color="primary" disableElevation>Post a Job</Button> */}
                </Box>
                </Grid>
                </Grid>
            </Box>
    )
}

export default Course;