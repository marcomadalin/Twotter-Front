import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { bannerStyles } from "../styles/bannerStyles";
import LoginDialog from "./LoginDialog";
import Grid from "@mui/material/Grid";
import SignupDialog from "./SignupDialog";
import FormSignupDialog from "./FormSingupDialog";
import { useAuthContext } from "../hooks/useAuthContext";

export default function AuthenticationBanners() {
  const classes = bannerStyles();

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [showCoockies, setShowCoockies] = useState(false);

  const { user, token } = useAuthContext();

  const openLoginModal = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const closeLoginModal = () => {
    setOpenLogin(false);
    setShowCoockies(true);
  };

  const openSignupModal = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const closeSignupModal = () => {
    setOpenSignup(false);
  };

  const acceptCoockies = () => {
    localStorage.setItem("coockieAccepted", JSON.stringify(true));
    setShowCoockies(false);
  };

  const openFormSignup = () => {
    closeSignupModal();
    setOpenForm(true);
  };

  const closeFormSingup = () => {
    setOpenForm(false);
  };

  useEffect(() => {
    const coockieAccepted = localStorage.getItem("coockieAccepted");

    if (coockieAccepted != null && JSON.parse(coockieAccepted))
      setShowCoockies(false);
    else setShowCoockies(true);
  }, []);

  return (
    <Box className={classes.banners}>
      {!(user && token) && (
        <Grid container className={classes.auth}>
          {!isMedium && (
            <Grid item md={8} lg={8} xl={8} className={classes.loginTitle}>
              <h2 className={classes.h2}>
                Stay up to date with what's going on
              </h2>
              <p className={classes.p}>
                Twitter users are always the first ones to know.
              </p>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className={classes.buttons}
          >
            <Button
              className={classes.login}
              onClick={openLoginModal}
              sx={isMedium ? { width: "350px !important" } : {}}
            >
              Login
            </Button>
            <LoginDialog
              openLogin={openLogin}
              closeLoginModal={closeLoginModal}
              openSignupModal={openSignupModal}
            ></LoginDialog>
            <Button
              className={classes.signup}
              onClick={openSignupModal}
              sx={isMedium ? { width: "350px !important" } : {}}
            >
              Signup
            </Button>
            <SignupDialog
              openSignup={openSignup}
              closeSignupModal={closeSignupModal}
              openLoginModal={openLoginModal}
              openFormSignup={openFormSignup}
            ></SignupDialog>
            <FormSignupDialog
              openForm={openForm}
              closeFormSingup={closeFormSingup}
            ></FormSignupDialog>
          </Grid>
        </Grid>
      )}
      {showCoockies && (
        <Grid container className={classes.coockies}>
          <Grid
            item
            sm={12}
            md={12}
            lg={8}
            xl={8}
            className={classes.textCoockiesWrapper}
          >
            <h4 className={classes.coockieHeader}>Did someone say… cookies?</h4>
            <p className={classes.coockieText}>
              Twitter and its partners use cookies to provide you with a better,
              safer and faster service and to support our business. Some cookies
              are necessary to use our services, improve them and make sure they
              work properly.
            </p>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className={classes.buttonsCoockie}
          >
            <Button
              className={classes.coockieButton}
              onClick={acceptCoockies}
              sx={isLarge ? { width: "400px !important", mt: 1 } : {}}
            >
              Accept coockies
            </Button>
            <Button
              className={classes.coockieButton}
              sx={isLarge ? { width: "400px !important", mt: 1 } : { mt: 1 }}
            >
              Reject coockies
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
