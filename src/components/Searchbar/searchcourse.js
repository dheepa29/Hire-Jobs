import React from "react";
import {Box,Button,Select,MenuItem,makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    wrapper:{
        backgroundColor: "#FFF",
        display : "flex",
        boxShadow : "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius : "5px",
        "& >*" : {
            flex : 1,
            height : "45px",
            margin : "8px",
        },
    },
});

const SearchCourse =(props) => {
    const classes = useStyles()
    return(
        <Box p={2} mt={-5} mb={2} className ={classes.wrapper}>
            <Select disableUnderline variant = "filled" defaultValue ="Sales">
                <MenuItem value ="Sales">Sales</MenuItem>
                <MenuItem value ="Testing">Testing</MenuItem>
                <MenuItem value ="Voice Support">Voice Support</MenuItem>
            </Select>
            {/* <Select disableUnderline variant = "filled" defaultValue ="Office">
                <MenuItem value ="Office">Office</MenuItem>
                <MenuItem value ="Work from home">Work from home</MenuItem>
            </Select> */}
            <Button variant = "contained" color="primary" disableElevation>Search</Button>
        </Box>

    )
}

export default SearchCourse;