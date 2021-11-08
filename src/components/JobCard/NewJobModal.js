import React from "react";
import {Box,Grid,IconButton,Typography,Button,FilledInput,Select,makeStyles,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions} from "@material-ui/core";
import {Close as CloseIcon} from "@material-ui/icons";

// const handleSubmit =async() =>{
//     closeModal();
// };

// const closeModal = () =>{
//     props.closeModal();
// };

const useStyles = makeStyles(theme=>({
    skillChip :{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5 px",
        borderRadius:"5 px",
        // transition:"0.3s",
    //  cursor:"pointer",
        fontWeight:600,
        border:'1 px solid ${theme.palette.secondary.main}',
        color:theme.palette.secondary.main,
        cursor:"pointer",

        "&:hover":{
            backgroundColor:theme.palette.secondary.main,
            color:"#FFF",
        }
       
    },

}));


const NewJobModal =(props) =>{
    const classes = useStyles();
    const skills = [
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MangoDB",
        "SQL",
    ];

    return(
        <Dialog open ={true} fullWidth>
    
                <Box display = "flex" justifyContent="space-between" alignItems = "center">
                Post a Job
                <IconButton  >
                    <CloseIcon/>
                </IconButton>
                </Box>
            {/* </DialogTitle> */}
            <DialogContent>
                <Grid container spacing ={2}>
                    <Grid item xs ={6}>
                        <FilledInput placeholder ="Job title *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={6}>
                    <Select  fullWidth disableUnderline variant = "filled" defaultValue ="Full time">
                    <MenuItem value ="Full time">Full time</MenuItem>
                    <MenuItem value ="Part time">Part time</MenuItem>
                    <MenuItem value ="Contract">Contract</MenuItem>
            </Select>
                    </Grid>
                    <Grid item xs ={6}>
                        <FilledInput placeholder ="Company name *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={6}>
                        <FilledInput placeholder ="Company URL *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={6}>
                    <Select fullWidth disableUnderline variant = "filled" defaultValue ="Office">
                    <MenuItem value ="Office">Office</MenuItem>
                    <MenuItem value ="Work from home">Work from home</MenuItem>
            </Select>
                    </Grid>
                    <Grid item xs ={6}>
                        <FilledInput placeholder ="Job Link *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={12}>
                        <FilledInput placeholder ="Description*" disableUnderline fullWidth multiline rows={4}/>
                    </Grid>
                </Grid>
                <Box mt ={2}>
                    <Typography>Skills</Typography>
                    <Box display ="flex">
                        {skills.map (skill => <Box  className = {classes.skillChip} key ={skill}>{skill}</Box> )}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color ="red" width = "100%" display ="flex" justifyContent ="space-between" alignItems ="center"> 
                    <Typography variant ="caption">*Required field</Typography>
                    <Button  variant = "contained" disableElevation color="primary">Post a Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}


export default NewJobModal;