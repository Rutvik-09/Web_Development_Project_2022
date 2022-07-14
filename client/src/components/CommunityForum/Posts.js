import React, { useState } from "react";
import { Grid } from "@mui/material";
import Post from "./Post";
import { Container } from "@mui/system";
import useStyles from "./Style";
import { Button } from "@mui/material";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useEffect } from "react";
import constant from "../../AppConstant.json";
import { useNavigate } from "react-router-dom";

//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//import AppBar  from "../Appbar";

function Posts() {
  const classes = useStyles();
  let navigate = useNavigate();
  const moment = require('moment');

  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [fullname, setFullname] = useState("");

  const [responseData, setResponseData] = React.useState("");

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    axios.post(constant.BE_URL + "createPost", {
      postData:{category:category,
        description:description,
        fullname:"Hardcode name"}
      
    })
    .then(function (response) {
      console.log(response);
      // localStorage.setItem("email",email)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const getInitials = (name) => {
    
    // Referred from: https://www.codegrepper.com/code-examples/javascript/get+initials+from+name+javascript

    console.log(name);
    const fullName = name.split(" ");
    //const initials = fullName[0]+fullName[1];
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();

    
  }

  useEffect(() => {
    axios
      .get(constant.BE_URL + "viewPosts")
      .then((response) => {
        setPosts(response.data.data);
      }).catch((err) => {
        console.log(err)
      });
  });

  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" color="inherit" component="div">
            TakeOnRent
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <AppBar/> */}
      <Container>
        <h1 className={classes.headerCenter}>Community Forum</h1>
        <div className={classes.buttonDiv}>
          {/* <div > */}
          {/* <div> */}
          {/* <Button variant="contained" className={classes.button}>
                  Create
                </Button> */}
          <Button
            sx={{
              marginBottom: "10px",
              backgroundColor: "#979AA1",
              "&:hover": {
                backgroundColor: "#6c757d",
              },
            }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Create
          </Button>
          {/* Referenced from: https://mui.com/material-ui/react-dialog/ */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Post</DialogTitle>
            <form>
              <DialogContent>
                <DialogContentText>
                  To create a post, please fill all the below required
                  information:
                </DialogContentText>

                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Category"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                />
                {/* <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  type="date"
                  fullWidth
                  variant="outlined"
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                /> */}
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Description"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onSubmit={handleClose} onClick={handleClose} type="submit">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </Dialog>

          <div className={classes.filter}>
            {/* <Box sx={{ minWidth: 120 }}> */}
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Filter
              </InputLabel>
              {/* Referenced from: https://mui.com/material-ui/react-select/ */}
              <NativeSelect defaultValue={10}>
                <option value={10}>Select</option>
                <option value={20}>My posts</option>
                <option value={30}>Date</option>
                <option value={40}>Category</option>
              </NativeSelect>
            </FormControl>
            {/* </Box/> */}
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* Referenced from https://mui.com/material-ui/react-grid/ */}
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid item xs={12} md={12}>
            <Post
              name = {post.fullname}
              date= {moment(post.date).format("MMM Do YYYY")}
              initials= {getInitials(post.fullname)}
              category={post.category}
              desc={post.description}
            ></Post>
          </Grid>
          ))}
          </Grid>
          {/* <Grid item>
            <Post
              name="Rushi Patel"
              date="February 25, 2019"
              initials="RP"
              category="Furniture"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Meet Patel"
              date="June 09, 2020"
              initials="MP"
              category="Gardening"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Rutvik Patel"
              date="July 19, 2020"
              initials="RP"
              category="Sports"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Rushi Patel"
              date="August 20, 2020"
              initials="RP"
              category="Kitchen"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Vivek Patel"
              date="October 21, 2020"
              initials="VP"
              category="Electronis"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Tirth Patel"
              date="November 25, 2020"
              initials="TP"
              category="Home Appliances"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
          <Grid item>
            <Post
              name="Paras Patel"
              date="December 27, 2020"
              initials="PP"
              category="Sports"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></Post>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
}

export default Posts;
