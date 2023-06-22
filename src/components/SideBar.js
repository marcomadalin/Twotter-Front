import { Box, Icon, InputBase } from "@mui/material";
import { sideBarStyles } from "../styles/sideBarStyles";
import { useAuthContext } from "../hooks/useAuthContext";
import UserRecommendation from "./UserRecommendation";

export default function SideBar() {
  const classes = sideBarStyles();

  const { user, token } = useAuthContext();

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
