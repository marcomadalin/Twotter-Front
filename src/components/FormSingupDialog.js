import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  FormControl,
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
      }}
    >
      <IconButton
        color="icon"
        size="small"
        disableRipple
        className={classes.closeButton}
        onClick={props.closeFormSingup}
      >
        <Icon>close</Icon>
      </IconButton>
      <DialogTitle className={classes.dialogHeader}>
        <Box className={classes.stepperWrapper}>
          <h4 style={{ margin: "0 0 0 0" }}>Step {step} of 3</h4>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.signupModalWrapper}>
        <Box className={classes.signupModalBody}>
          {step === 1 && (
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
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className={`${classes.textInput} ${classes.outlineInput}`}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
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
          {step === 2 && (
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
                className={`${classes.textInput} ${classes.outlineInput}`}
              />
              <FormControl className={classes.passwordField}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`${classes.textInput} ${classes.outlineInput}`}
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
                  className={`${classes.textInput} ${classes.outlineInput}`}
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
          {step < 3 && (
            <Button
              disabled={nextDisabled}
              className={classes.formButton}
              onClick={nextStep}
            >
              Next
            </Button>
          )}
          {step >= 3 && (
            <Button className={classes.formButton}>Create account</Button>
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
