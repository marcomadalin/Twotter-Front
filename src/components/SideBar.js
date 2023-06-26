import { Box, Button, Icon, InputBase, Stack } from "@mui/material";
import { sideBarStyles } from "../styles/sideBarStyles";
import { useAuthContext } from "../hooks/useAuthContext";
import UserRecommendation from "./UserRecommendation";
import FormSignupDialog from "./FormSingupDialog";
import { useState } from "react";

export default function SideBar() {
  const classes = sideBarStyles();

  const { user, token } = useAuthContext();

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className={classes.sideBarContainer}>
      {user && token && (
        <div className={classes.search}>
          <div className={classes.searchIconWrapper}>
            <Icon className={classes.searchIcon}>search</Icon>
          </div>
          <InputBase
            className={classes.searchInput}
            placeholder="Search on Twitter"
          />
        </div>
      )}
      {user && token && <UserRecommendation />}
      {!user && (
        <Stack className={classes.signupWrapper}>
          <h2 style={{ fontSize: "22px" }}>Are you new to Twitter?</h2>
          <p className={classes.termsText} style={{ marginTop: "-10px" }}>
            Sign up now to get your own personalized timeline and post on
            Twitter.
          </p>
          <Button
            className={classes.signupButtons}
            onClick={() => setOpenForm(true)}
          >
            Create an account
          </Button>
          <FormSignupDialog
            openForm={openForm}
            closeFormSingup={() => setOpenForm(false)}
          ></FormSignupDialog>
          <p className={classes.termsText} style={{ marginBottom: "0" }}>
            By signing up, you agree to the{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Terms of Service</span>
            </Button>{" "}
            and{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Privacy Policy</span>
            </Button>
            , including the{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Cookie Policy</span>
            </Button>
            .
          </p>
        </Stack>
      )}
      <Box className={classes.policyTextWrapper}>
        <a className={classes.policyText}>Term of Service</a>
        <a className={classes.policyText}>Privacy policy</a>
        <a className={classes.policyText}>Accessibility</a>
        <div>
          <a className={classes.policyText}>Cookie policy</a>
          <span className={classes.copyright}>© 2023 X Corp.</span>
        </div>
      </Box>
    </div>
  );
}
