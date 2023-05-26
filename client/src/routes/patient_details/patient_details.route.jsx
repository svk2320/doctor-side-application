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

import useStyles from "./patient_details.styles";

const INITIAL_STATE = {
  designation: "",
  hospitalOrClinic: "",
  gender: "",
  Phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const PatientDetails = () => {
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
      history.push("/patient-details-02");
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
        <Typography variant="h5">{"Patient Details"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <FormInput
                name="name"
                label="Name"
                handleChange={handleChange}
                autoFocus
            />
            <FormInput
                name="age"
                label="Age"
                handleChange={handleChange}
                autoFocus
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
                name="gender"
                label="Gender"
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
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <FormInput
              name="phone"
              label="Phone"
              handleChange={handleChange}
              type="text"
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            {"Next"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PatientDetails;
