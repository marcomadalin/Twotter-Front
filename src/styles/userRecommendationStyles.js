import { makeStyles } from "@mui/styles";

export const userRecommendationStyles = makeStyles((theme) => ({
  listContainer: {
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "20px",
    minWidth: "280px",
    maxWidth: "350px",
    marginBottom: "20px",
  },
  h3: {
    margin: "0px 0px 0px 0px",
    padding: "20px 0px 0 20px",
    fontWeight: "bold",
    fontSize: "23px",
  },
  moreButton: {
    width: "100% !important",
    textTransform: "none !important",
    borderRadius: "0 0 20px 20px !important",
    minHeight: "50px !important",
    justifyContent: "flex-start !important",
    paddingLeft: "20px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.hover} !important`,
    },
  },
  listItem: {
    minWidth: "50px",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.hover,
    },
  },
  secondaryText: {
    margin: "0px 0px 0px 0px",
    fontSize: "14px",
    fontWeight: "500",
    color: theme.palette.text.secondary,
  },
  primaryText: {
    margin: "0px 0px 0px 0px",
    fontSize: "16px",
    fontWeight: "600",
  },
  userList: {
    height: "70px",
  },
  followTag: {
    backgroundColor: `${theme.palette.secondary.tags} !important`,
    borderRadius: "5px !important",
    marginLeft: "5px !important",
    fontSize: "10px !important",
    color: `${theme.palette.text.tags} !important`,
  },
  followButton: {
    backgroundColor: `${theme.palette.icon.main} !important`,
    color: `${theme.palette.background.default} !important`,
    borderRadius: "60px !important",
    textTransform: "none !important",
    fontWeight: "500 !important",
    width: "80px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.hoverFollowButton} !important`,
    },
  },
}));
