import { makeStyles } from "@mui/styles";

export const sideBarStyles = makeStyles((theme) => ({
  sideBarContainer: {
    boxSizing: "border-box",
    margin: "20px 0 0 20px",
  },
  search: {
    boxSizing: "border-box",
    borderRadius: "60px",
    height: "40px",
    backgroundColor: theme.palette.secondary.main,
    minWidth: "280px",
    maxWidth: "350px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  searchIconWrapper: {
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
  input: {
    "& .MuiInputBase-input": {
      paddingLeft: `50px`,
      width: "100%",
    },
  },
  listContainer: {
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "20px",
    minWidth: "280px",
    maxWidth: "350px",
    marginBottom: "20px",
    marginRight: "20px",
  },
  listItem: {
    minWidth: "50px",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.hover,
    },
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
  moreIcon: {
    color: theme.palette.icon.secondary,
    "&:hover": {
      color: theme.palette.icon.primary,
    },
  },
  iconButton: {
    marginTop: "-15px !important",
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
  policyTextWrapper: {
    boxSizing: "border-box",
    minWidth: "280px",
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
}));
