import React, {useState } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"
import {useEffect} from "react";
import {getUserAuth} from "./actions";
import {connect} from "react-redux";
import "./app.css";
import Feedback from "./components/feedback";
import {box,ThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import Job from "./components/Job/";
import {Box,Grid,Typography,CircularProgress} from "@material-ui/core";
import Searchbar from "./components/Searchbar/index";
import JobCard from "./components/JobCard/JobCard";
import NewJobModal from "./components/JobCard/NewJobModal";
import jobData from './dummyData';
import Course from "./components/course/course";
import SearchCourse from "./components/Searchbar/searchcourse";
import courseData from './dummyData1';
import CourseCard from './components/course/CourseCard';
import {db} from './firebase';
import Courselist from "./components/course/courselist";
import Aboutus from "./components/aboutus";



function App(props) {
  const [jobs,setJobs] = useState ([]);
  const [loading,setLoading] = useState(true);

  const fetchJobs = async() =>{
    const req = await db.collection('jobs').orderBy('postedOn','desc').get();
    const tempJobs =req.docs.map((job) => ({...job.data(),id:job.id,postedOn:job.data().postedOn.toDate()}));
    setJobs(tempJobs);
    setLoading(false);

  };

  useEffect(() =>{
    fetchJobs();
  },[]) 


  useEffect(() =>{
    props.getUserAuth();
  },[]);
  return (
    <div className = "App">
      <Router>
        <Switch>
          <Route exact path ="/">
            <Login/>
          </Route>
          <Route exact path = "/home">
          <Header/>
            <Home/>
            
          </Route>
          <Route exact path ="/course">
            <Course/>
            <SearchCourse/>
            {courseData.map(course =><CourseCard key ={course.id }{...course}/>)}
          </Route>
          <Route exact path ="/feedback">
            <Feedback/>
          </Route>
          <Route exact path ="/courselist">
            <Courselist/>
          </Route>
          <Route exact path ="/aboutus">
            <Aboutus/>
          </Route>
          <Route exact path ="/job">
          <ThemeProvider theme ={theme}>
            <Job/>
            {/* <NewJobModal/> */}
            <Grid container justify = "center">
              <Grid item xs={10}>
                <Searchbar/>
                {
                  loading ? (<Box display ="flex" justifyContent ="center"><CircularProgress/></Box>
                  ):( jobData.map(job =><JobCard key ={job.id }{...job}/>)
                  )}
                {/* {jobData.map(job =><JobCard key ={job.id }{...job}/>)} */}
                <JobCard/>
              </Grid>
            </Grid>
          </ThemeProvider>
          </Route>
        </Switch>
      </Router>
      

    </div>
    
  )
}

const mapStateToProps = (state) =>{
  return{};
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth :  () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App)