import { makeStyles } from "@mui/styles";

export const profileStyles = makeStyles((theme) => ({
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
  profileBox: {
    borderBottom: `1px solid ${theme.palette.blur.main}`,
  },
  profileEditBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
  },
  profilePic: {
    top: "-50px !important",
    height: "120px !important",
    width: "120px !important",
    border: "5px solid black",
    marginLeft: "20px",
  },
  editProfile: {
    borderRadius: "60px !important",
    border: `1px solid ${theme.palette.background.secondary} !important`,
    textTransform: "none !important",
    color: `${theme.palette.background.secondary} !important`,
    width: "120px !important",
    height: "35px !important",
    fontWeight: "bold !important",
    marginTop: "20px !important",
    marginRight: "20px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
    },
  },
  followButton: {
    borderRadius: "60px !important",
    textTransform: "none !important",
    backgroundColor: `${theme.palette.background.secondary} !important`,
    color: `${theme.palette.background.default} !important`,
    width: "120px !important",
    height: "35px !important",
    fontWeight: "bold !important",
    marginTop: "20px !important",
    marginRight: "20px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.profile} !important`,
    },
  },
  username: {
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "20px",
  },
  secondaryText: {
    fontSize: "14px",
    fontWeight: "500",
    color: theme.palette.text.secondary,
  },
  userInfoBox: {
    display: "flex",
    padding: "0 20px 0 20px",
  },
  userInfoIcon: {
    marginRight: "5px",
    color: theme.palette.text.secondary,
  },
  userInfoIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
  navLink: {
    textDecoration: "none ! important",
    "&:hover": {
      textDecoration: "underline !important",
    },
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
  contactsGrid: {
    padding: "0 20px 0 0 !important",
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    position: "sticky !important",
    top: 0,
    overflowY: "auto !important",
    scrollbarWidth: "none !important",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-msOverflowStyle": "none",
  },
  redBorder: {
    border: `2px solid ${theme.palette.error.main} !important`,
  },

  feedTab: {
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: theme.palette.blurTabs.main,
    },
  },
}));
