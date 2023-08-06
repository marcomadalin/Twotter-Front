import { makeStyles } from "@mui/styles";

export const sideBarStyles = makeStyles((theme) => ({
  sideBarContainer: {
    boxSizing: "border-box",
    margin: "20px 0 0 20px",
    width: "100%",
    paddingRight: "20px",
  },
  search: {
    marginLeft: 0,
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "60px",
    height: "40px",
    backgroundColor: theme.palette.secondary.main,
    minWidth: "280px",
    maxWidth: "350px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&:focus-within": {
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    paddingLeft: "15px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    color: theme.palette.text.secondary,
  },
  searchInput: {
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  },
  signupWrapper: {
    maxWidth: "350px",
    minWidth: "200px",
    width: "100%",
    marginBottom: "20px",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.blur.main}`,
    borderRadius: "20px",
    padding: "0px 20px 20px 20px",
  },
  signupButtons: {
    borderRadius: "60px !important",
    backgroundColor: "white !important",
    textTransform: "none !important",
    color: "black !important",
    minWidth: "200px !important",
    height: "40px !important",
    fontWeight: "bold !important",
    fontSize: "16px !important",
    margin: "5px 0 5px 0 !important",
  },
  blueTermsText: {
    padding: "0 0 0 0 !important",
    textTransform: "none !important",
    fontSize: "13px !important",
    "&:hover": {
      "& span": {
        textDecoration: "underline !important",
      },
    },
  },
  termsText: {
    fontSize: "13px",
    color: theme.palette.text.secondary,
  },
  policyTextWrapper: {
    boxSizing: "border-box",
    minWidth: "200px",
    maxWidth: "350px",
    width: "100%",
    marginBottom: "20px",
    marginRight: "20px",
  },
  policyText: {
    color: theme.palette.text.secondary,
    fontSize: "14px",
    whiteSpace: "nowrap",
    marginRight: "10px",
    fontWeight: "500",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  copyright: {
    color: theme.palette.text.secondary,
    fontWeight: "500",
    fontSize: "14px",
  },
  searchList: {
    position: "fixed !important",
    zIndex: "1500 !important",
    minWidth: "280px",
    maxWidth: "350px",
    width: "100% !important",
    minHeight: "50px",
    backgroundColor: `${theme.palette.background.default} !important`,
    borderRadius: "10px !important",
    boxShadow: theme.palette.boxShadow.main,
    overflowX: "hidden !important",
    overflowY: "auto",
    boxSizing: "content-box", // ensures padding and border are outside of box
    // Customize scrollbar for Webkit browsers (Chrome, Safari)
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
      backgroundColor: "transparent", // change as needed
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey", // change as needed
      borderRadius: "10px",
    },
    // Customize scrollbar for Firefox
    scrollbarWidth: "thin",
    scrollbarColor: "darkgrey transparent", // change as needed
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
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  secondaryText: {
    fontSize: "14px",
    fontWeight: "500",
    color: theme.palette.text.secondary,
  },
  moreButton: {
    textTransform: "none !important",
    marginLeft: "10px !important",
    textDecoration: "none",
  },
}));
