import React, { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LocalHospitalOutlined from '@material-ui/icons/LocalHospitalOutlined';
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

import useStyles from "./professional_details.styles";

const INITIAL_STATE = {
  designation: "",
  hospitalOrClinic: "",
  gender: "",
  Phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const ProDetails = () => {
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
      history.push("/home");
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
          <LocalHospitalOutlined />
        </Avatar>
        <Typography variant="h5">{"Professional details"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <FormInput
                name="designation"
                label="Designation"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="hospitalOrClinic"
                label="Hospital/Clinic"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="city"
                label="City"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="state"
                label="State"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="state"
                label="Years of Experience"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="highestQualification"
                label="Highest Qualification"
                handleChange={handleChange}
                autoFocus
            />
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
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            {"Submit"}
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid> */}
        </form>
      </Paper>
    </Container>
  );
};

export default ProDetails;
