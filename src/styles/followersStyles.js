import { makeStyles } from "@mui/styles";

export const followersStyles = makeStyles((theme) => ({
  mainContainer: {
    boxSizing: "border-box !important",
    height: "100vh",
    padding: "0 0 0 0",
  },
  mainContainerAuth: {
    boxSizing: "border-box !important",
    height: "calc(100vh - 80px) !important",
    padding: "0 0 0 0",
  },
  feedTab: {
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: theme.palette.blurTabs.main,
    },
  },
  homeButtonFeed: {
    color: `${theme.palette.text.primary} !important`,
    background: "transparent !important",
    textTransform: "none !important",
    fontWeight: "bold !important",
    fontSize: "20px !important",
    width: "100% !important",
    display: "flex !important",
    justifyContent: "flex-start !important",
    marginBottom: "0px !important",
    paddingLeft: "0px !important",
    paddingBottom: "0px !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  secondaryText: {
    fontSize: "14px",
    fontWeight: "500",
    color: theme.palette.text.secondary,
  },
  feedGrid: {
    padding: "0px !important",
    width: "100%",
    maxWidth: "700px",
    flexGrow: 1,
    flexShrink: 1,
    position: "sticky !important",
  },
  feedBox: {
    display: "flex",
    flexDirection: "column",
    zIndex: "900 !important",
    position: "relative",
  },
  tabBox: {
    backdropFilter: "blur(6px)",
    backgroundColor: theme.palette.background.lowOpacityBlack,
    position: "sticky",
    top: 0,
    zIndex: "1000 !important",
    height: "80px !important",
    display: "flex !important",
    flexDirection: "row !important",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    width: "inherit",
    padding: "0px 20px 0px 20px",
    alignItems: "center",
  },
  backArrow: {
    color: `${theme.palette.icon.main} !important`,
    height: "45px !important",
    width: "45px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
      color: `${theme.palette.icon.main} !important`,
    },
  },
  listItem: {
    minWidth: "50px",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  secondaryText2: {
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
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  followTag: {
    backgroundColor: `${theme.palette.secondary.tags} !important`,
    borderRadius: "5px !important",
    marginLeft: "5px !important",
    fontSize: "10px !important",
    color: `${theme.palette.text.tags} !important`,
  },
  followButton: {
    zIndex: "5000 !important",
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
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
