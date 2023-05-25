import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import {
  signin,
  signup,
} from "../../store/authentication/authentication.action";
import AUTH_ACTION_TYPES from "../../store/authentication/authentication.types";
import FormInput from "../../components/form-input/form-input";
import Icon from "../../assets/icon";

import useStyles from "./authentication.styles";

const INITIAL_STATE = {
  name: "",
  age: "",
  gender: "",
  Phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevShowPassword) => !prevShowPassword);
    setShowPassword(false);
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
                <FormInput
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
            )}
            {isSignUp && (
              <>
              <FormInput
              name="Age"
              label="Age"
              handleChange={handleChange}
              type="number"
              />
              <InputLabel id="select-label" style={{ margin: "10px", paddingRight: "10px" }}>Select Gender *</InputLabel>
              <Select
                name="gender"
                labelId="select-label"
                id="simple-select"
                style={{padding: "0 10px 0 10px"}}
                onChange={handleChange}
              >
                <MenuItem value="Male" style={{padding: "0 10px 0 10px"}}>Male</MenuItem>
                <MenuItem value="Female" style={{padding: "0 10px 0 10px"}}>Female</MenuItem>
                <MenuItem value="Non-binary" style={{padding: "0 10px 0 10px"}}>Non-binary</MenuItem>
              </Select>
              <FormInput
                name="Phone"
                label="Phone Number"
                handleChange={handleChange}
                type="text"
              />
              </>
            )}
            <FormInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <FormInput
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
