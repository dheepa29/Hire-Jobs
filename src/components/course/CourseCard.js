import React from "react";
import {Box,Grid,Typography,Button,makeStyles} from "@material-ui/core";

const useStyles = makeStyles ((theme)=>({
    wrapper:{
        border: "1px solid #e8e8e8",
        cursor:"pointer",
        transition:"0.3s",

        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #4D64E4",
            
        }
    },
    companyName:{
        fontSize : "13.5 px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip :{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        // transition:"0.3s",
        // cursor:"pointer",
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#FFF",
    },
}));

const CourseCard =(props) => {
    const classes = useStyles()
    return(
        <Box p={2} className = {classes.wrapper}>
            <Grid container alignItems="center">
            <Grid item xs>
                    <Typography variant ="subtitle1">{props.title}</Typography>
                    <Typography className={classes.companyName} variant ="subtitle2">{props.companyName}</Typography>
                </Grid>
                <Grid item>
                        <Button href ="/courselist" variant ="outlined">Enroll</Button>
                    </Grid>

            </Grid>
        </Box>

    )
}

export default CourseCard;


