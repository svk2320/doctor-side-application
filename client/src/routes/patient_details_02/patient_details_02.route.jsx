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

import useStyles from "./patient_details_02.styles";

const INITIAL_STATE = {
  designation: "",
  hospitalOrClinic: "",
  gender: "",
  Phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const PatientDetails02 = () => {
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
                name="symptoms"
                label="Symptoms"
                handleChange={handleChange}
                autoFocus
            />
            <InputLabel id="medication" style={{ margin: "10px", paddingRight: "10px" }}>Currently On Any Medication *</InputLabel>
              <Select
                name="medication"
                labelId="medication"
                id="medication"
                style={{padding: "0 10px 0 10px"}}
                onChange={handleChange}
              >
                <MenuItem value="Yes" style={{padding: "0 10px 0 10px"}}>Yes</MenuItem>
                <MenuItem value="No" style={{padding: "0 10px 0 10px"}}>No</MenuItem>
              </Select>
            <InputLabel id="diabetesOrLiver" style={{ margin: "10px", paddingRight: "10px" }}>Has Diabetes / Liver Problems *</InputLabel>
              <Select
                name="diabetesOrLiver"
                labelId="diabetesOrLiver"
                id="diabetesOrLiver"
                style={{padding: "0 10px 0 10px"}}
                onChange={handleChange}
              >
                <MenuItem value="Yes" style={{padding: "0 10px 0 10px"}}>Yes</MenuItem>
                <MenuItem value="No" style={{padding: "0 10px 0 10px"}}>No</MenuItem>
              </Select>
            <InputLabel id="heartProblems" style={{ margin: "10px", paddingRight: "10px" }}>Has Heart Problems *</InputLabel>
              <Select
                name="heartProblems"
                labelId="heartProblems"
                id="heartProblems"
                style={{padding: "0 10px 0 10px"}}
                onChange={handleChange}
              >
                <MenuItem value="Yes" style={{padding: "0 10px 0 10px"}}>Yes</MenuItem>
                <MenuItem value="No" style={{padding: "0 10px 0 10px"}}>No</MenuItem>
              </Select>
            <FormInput
              name="medicinePrescribed"
              label="Medicine Prescribed"
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
            {"Submit"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PatientDetails02;
