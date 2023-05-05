import { makeStyles } from "@mui/styles";

export const twittStyles = makeStyles((theme) => ({
  twittBox: {
    boxSizing: "border-box",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    padding: "15px 15px 15px 15px",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "100px",
  },
  twittContent: {
    boxSizing: "border-box",
    marginLeft: "15px",
    height: "100%",
    flexGrow: "1",
  },
  twittHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  moreIcon: {
    color: theme.palette.icon.secondary,
    "&:hover": {
      color: theme.palette.icon.primary,
    },
  },
  userHeader: {
    display: "flex",
    alignItems: "flex-start",
  },
  user: {
    margin: "0 0 0 0",
    fontWeight: "bold",
    fontSize: "16px",
  },
  username: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "15px",
  },
  date: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "15px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  twittText: {
    margin: "0 0 0 0",
  },
  twittButtons: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: "-6px",
    marginTop: "5px",
    maxWidth: "270px",
  },
  comment: {
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hover} !important`,
      color: `${theme.palette.icon.primary} !important`,
    },
  },
  retwitt: {},
  like: {},
}));
