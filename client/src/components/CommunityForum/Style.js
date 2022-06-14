import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  // Referenced from: https://mui.com/system/styles/basics/
  flex: {
    display: "flex",
    justifyContent:"space-between",
  },
  avatar:{
    background: "#5BC85B",
  },
  center:{
    margin:"auto",
  },
  headerCenter:{
    textAlign:"center",
    fontWeight:"lighter"
  },
  buttonDiv:{
    margin:"auto",
    display:"flex",
    justifyContent:"center",
  },
  button:{
    backgroundColor:"#a6dced"

  },
  filter:{
    // display:"flex",
    position:"absolute",
    right:0
  }
});

export default useStyles;