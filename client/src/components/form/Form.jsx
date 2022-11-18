import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NumericFormat } from "react-number-format";
import "./styles.css";
import Nav from "../nav/Nav";

import { signIn , signOut } from '../../redux/slices/auth.js'

import {
  TextField,
  Button,
  Typography,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Form = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    age: 0,
    sex: "",
    email: "",
    medicalConditions: [],
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const {
    firstName,
    lastName,
    age,
    email,
    password,
    confirmPassword,
    medicalConditions,
  } = formValues;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    const user = sessionStorage.getItem(isLoggedIn)
    if (user) dispatch(signIn())
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
 
    // axios
    //   .post("http://localhost:5000/api/register", formValues)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const clearForm = () => {
    setFormValues(defaultValues);
  };

  return (
    <> 
    <Nav />
     { isLoggedIn && <h1 style={{textAlign: "center"}}>Hi User</h1>}
    <Paper className="paper">
      <form noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Register Form</Typography>

        <TextField
          name="firstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={formValues.firstName}
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value })
          }
        />

        <TextField
          name="lastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={formValues.lastName}
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value })
          }
        />

        <TextField
          name="email"
          type="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />

        <NumericFormat
          customInput={TextField}
          variant="outlined"
          fullWidth
          label="Age"
          thousandSeparator={true}
          onChange={(e) =>
            setFormValues({ ...formValues, age: e.target.value })
          }
          autoComplete="off"
        />

        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) =>
            setFormValues({ ...formValues, sex: e.target.value })
          }
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => dispatch(signOut())}
          fullWidth
        >
          Sign out
        </Button>
      </form>
    </Paper>
    </>
  );
};

export default Form;
