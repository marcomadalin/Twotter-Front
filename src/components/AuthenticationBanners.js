import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { bannerStyles } from "../styles/bannerStyles";
import LoginDialog from "./LoginDialog";
import Grid from "@mui/material/Grid";

export default function AuthenticationBanners() {
  const classes = bannerStyles();

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [showCoockies, setShowCoockies] = useState(true);

  const openLoginModal = () => {
    setOpenLogin(true);
    setShowCoockies(false);
  };

  const closeLoginModal = () => {
    setOpenLogin(false);
    setShowCoockies(true);
  };

  const openSignupModal = () => {
    setOpenSignup(true);
  };

  const closeSignupModal = () => {
    setOpenSignup(false);
  };

  const acceptCoockies = () => {
    setShowCoockies(false);
  };

  return (
    <Box className={classes.banners}>
      <Grid container className={classes.auth}>
        {!isMedium && (
          <Grid item md={8} lg={8} xl={8} className={classes.loginTitle}>
            <h2 className={classes.h2}>Stay up to date with what's going on</h2>
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
          ></LoginDialog>
          <Button
            className={classes.signup}
            onClick={openSignupModal}
            sx={isMedium ? { width: "350px !important" } : {}}
          >
            Signup
          </Button>
          <Dialog open={openSignup} className={classes.authDialog}>
            <DialogTitle>Signup</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={closeSignupModal}>Cancel</Button>
              <Button onClick={closeSignupModal}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
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
