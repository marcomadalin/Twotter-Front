import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { formSignupDialogStyles } from "../styles/formSignupDialogStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useLogin } from "../hooks/useLogin";
import { redirect } from "react-router-dom";

export default function FormSignupDialog(props) {
  const theme = useTheme();
  const classes = formSignupDialogStyles();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [nextDisabled, setNextDisabled] = useState(false);

  const [month, setMonth] = useState("");

  const [day, setDay] = useState("");

  const [days, setDays] = useState([...Array(31).keys()].map((i) => i + 1));

  const [year, setYear] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [confirmation, setConfiramtion] = useState("");

  const [checked1, setChecked1] = useState(false);

  const [checked2, setChecked2] = useState(false);

  const [checked3, setChecked3] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const { login } = useLogin();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [...Array(111).keys()]
    .reverse()
    .map((i) => i + new Date().getFullYear() - 110);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const changeMonth = (event) => {
    setMonth(event.target.value);
    if (
      event.target.value === "April" ||
      event.target.value === "June" ||
      event.target.value === "September" ||
      event.target.value === "November"
    ) {
      setDays([...Array(30).keys()].map((i) => i + 1));
      if (day > 30) setDay(30);
    } else if (event.target.value === "February") {
      setDays([...Array(28).keys()].map((i) => i + 1));
      if (day > 28) setDay(28);
    } else setDays([...Array(31).keys()].map((i) => i + 1));
  };

  const changeDay = (event) => {
    setDay(event.target.value);
  };

  const changeYear = (event) => {
    setYear(event.target.value);
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfiramtion("");
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setMonth("");
    setDay("");
    setYear("");
    setEmailError(false);
  };

  const loginUser = async () => {
    setLoading(true);
    await login(username, password)
      .then(() => {
        props.closeFormSingup();
        redirect("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createAccount = async () => {
    setLoading(true);
    const user = {
      name: name,
      username: username,
      email: email,
      password: password,
      birthdate: day + "-" + month + "-" + year,
      followers: [],
      following: [],
    };

    await axios
      .post("http://localhost:4000/users/new", user)
      .then(async (response) => {
        setLoading(false);
        await loginUser();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setStep(1);
  }, [props.openForm]);

  const menuProps = {
    classes: {
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };

  return (
    <Dialog
      open={props.openForm}
      className={classes.authDialog}
      onClose={() => {
        setStep(1);
        clearInputs();
      }}
    >
      {step === 1 && (
        <IconButton
          color="icon"
          size="small"
          disableRipple
          className={classes.closeButton}
          onClick={() => {
            clearInputs();
            props.closeFormSingup();
          }}
        >
          <Icon>close</Icon>
        </IconButton>
      )}
      {step > 1 && (
        <IconButton
          color="icon"
          size="small"
          disableRipple
          className={classes.closeButton}
          onClick={prevStep}
        >
          <Icon>arrow_back_ios</Icon>
        </IconButton>
      )}
      <DialogTitle className={classes.dialogHeader}>
        <Box className={classes.stepperWrapper}>
          <h4 style={{ margin: "0 0 0 0" }}>Step {step} of 3</h4>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.signupModalWrapper}>
        <Box className={classes.signupModalBody}>
          {step === 1 && !loading && (
            <Box className={classes.signupInputsWrapper}>
              <h1
                style={{
                  width: "400px",
                  fontSize: "28px",
                  marginBottom: "40px",
                }}
              >
                Create an account
              </h1>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                error={name.length > 50}
                onChange={(event) => {
                  if (event.target.value.length <= 50) {
                    setName(event.target.value);
                  }
                }}
                inputProps={{
                  maxLength: 50,
                }}
                className={`${classes.textInput} ${classes.outlineInput}`}
              />
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError(!/\S+@\S+\.\S+/.test(event.target.value));
                }}
                error={emailError}
                className={`${classes.textInput} ${classes.outlineInput}`}
              />
              <Box sx={{ marginBottom: "10px !important" }}>
                <h5 style={{ margin: "0 0 0 0" }}>Birth date</h5>
                <p className={classes.termsText}>
                  This information will not be public. Confirm your own age,
                  even if this account is for a business, a pet, or something
                  else.
                </p>
              </Box>
              <Box className={classes.dateWrapper}>
                <FormControl fullWidth>
                  <InputLabel>Month</InputLabel>
                  <Select
                    value={month}
                    label="Month"
                    onChange={changeMonth}
                    MenuProps={menuProps}
                    className={`${classes.dateSelect} ${classes.outlineInput} ${classes.icon}`}
                  >
                    {months.map((value, key) => {
                      return (
                        <MenuItem key={key} value={value}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  sx={{
                    maxWidth: "75px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <InputLabel>Day</InputLabel>
                  <Select
                    value={day}
                    label="Day"
                    onChange={changeDay}
                    MenuProps={menuProps}
                    className={`${classes.dateSelect} ${classes.outlineInput} ${classes.icon}`}
                  >
                    {days.map((value, key) => {
                      return (
                        <MenuItem key={key} value={value}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ maxWidth: "100px" }}>
                  <InputLabel>Year</InputLabel>
                  <Select
                    value={year}
                    label="Year"
                    onChange={changeYear}
                    MenuProps={menuProps}
                    className={`${classes.dateSelect} ${classes.outlineInput} ${classes.icon}`}
                  >
                    {years.map((value, key) => {
                      return (
                        <MenuItem key={key} value={value}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          )}
          {step === 2 && !loading && (
            <Box className={classes.signupInputsWrapper}>
              <h1
                style={{
                  width: "400px",
                  fontSize: "28px",
                  marginBottom: "40px",
                }}
              >
                Create an account
              </h1>
              <Box className={classes.usernameWrapper}>
                <p className={classes.termsText}>
                  This username will be used to tag you in twitts and threads.
                </p>
              </Box>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(event) => {
                  if (event.target.value.length <= 15) {
                    setUsername(event.target.value);
                  }
                }}
                inputProps={{
                  maxLength: 15,
                }}
                className={`${classes.textInput} ${classes.outlineInput}`}
              />
              <FormControl className={classes.passwordField}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  error={password !== confirmation}
                  className={`${classes.textInput} ${classes.outlineInput}`}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className={classes.icon}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl className={classes.passwordField}>
                <InputLabel htmlFor="confirmPassword">Password</InputLabel>
                <OutlinedInput
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  error={password !== confirmation}
                  className={`${classes.textInput} ${classes.outlineInput}`}
                  value={confirmation}
                  onChange={(event) => {
                    setConfiramtion(event.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className={classes.icon}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
          )}
          {step === 3 && !loading && (
            <Box
              className={`${classes.overflowYContainer} ${classes.checkboxStepWrapper}`}
            >
              <h1
                style={{
                  width: "400px",
                  fontSize: "28px",
                  marginBottom: "30px",
                  marginLeft: "-10px",
                }}
              >
                Customize your experience
              </h1>
              <FormGroup className={classes.checkboxWrapper}>
                <Box className={classes.checkboxItem}>
                  <Box className={classes.checkboxTextWrapper}>
                    <h3 className={classes.checkboxTitle}>
                      Take advantage of Twitter even more
                    </h3>
                    <p className={classes.checkboxText}>
                      Receive an email about your Twitter activity and
                      recommendations.
                    </p>
                  </Box>
                  <Checkbox
                    sx={{ mr: "20px" }}
                    checked={checked1}
                    onChange={(event) => {
                      setChecked1(event.target.checked);
                    }}
                  />
                </Box>
                <Box className={classes.checkboxItem}>
                  <Box className={classes.checkboxTextWrapper}>
                    <h3 className={classes.checkboxTitle}>
                      Connect with people you know
                    </h3>
                    <p className={classes.checkboxText}>
                      Allow other users to find your Twitter account by your
                      email address.
                    </p>
                  </Box>
                  <Checkbox
                    sx={{ mr: "20px" }}
                    checked={checked2}
                    onChange={(event) => {
                      setChecked2(event.target.checked);
                    }}
                  />
                </Box>
                <Box className={classes.checkboxItem}>
                  <Box className={classes.checkboxTextWrapper}>
                    <h3 className={classes.checkboxTitle}>Personalized ads</h3>
                    <p className={classes.checkboxText}>
                      The ads you see on Twitter always depend on your activity
                      on Twitter. If you turn this setting on, Twitter will be
                      able to better personalize ads from Twitter advertisers,
                      on and off Twitter, by combining your activity on Twitter
                      with other online activities and information provided by
                      our partners.
                    </p>
                  </Box>
                  <Checkbox
                    sx={{ mr: "20px" }}
                    checked={checked3}
                    onChange={(event) => {
                      setChecked3(event.target.checked);
                    }}
                  />
                </Box>
                <p
                  className={classes.termsCheckboxText}
                  style={{ marginTop: "40px" }}
                >
                  By signing up, you agree to our
                  <Button
                    disableRipple
                    className={classes.blueCheckboxTermsText}
                  >
                    <span>Terms</span>
                  </Button>
                  ,
                  <Button
                    disableRipple
                    className={classes.blueCheckboxTermsText}
                  >
                    <span>Privacy Policy</span>
                  </Button>{" "}
                  and
                  <Button
                    disableRipple
                    className={classes.blueCheckboxTermsText}
                  >
                    <span>Cookie Policy</span>
                  </Button>
                  . Twitter may use your contact information, such as your email
                  address and phone number, for the purposes described in our
                  Privacy Policy.
                  <Button
                    disableRipple
                    className={classes.blueCheckboxTermsText}
                  >
                    <span>More information</span>
                  </Button>
                </p>
              </FormGroup>
            </Box>
          )}
          {step < 3 && !loading && (
            <Button
              disabled={nextDisabled}
              className={classes.formButton}
              onClick={nextStep}
            >
              Next
            </Button>
          )}
          {step >= 3 && !loading && (
            <Button
              disabled={!(checked1 && checked2 && checked3)}
              className={classes.formButton}
              onClick={createAccount}
            >
              Create account
            </Button>
          )}
          {loading && (
            <Box className={classes.loadingBox}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
