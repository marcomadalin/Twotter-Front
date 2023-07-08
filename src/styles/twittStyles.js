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
  iconButton: {
    color: `${theme.palette.icon.secondary} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hover} !important`,
      color: `${theme.palette.icon.primary} !important`,
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
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  username: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "15px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
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
    maxWidth: "350px",
  },
  comment: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover p": {
      color: `${theme.palette.icon.primary} !important`,
    },
    "&:hover #comment": {
      backgroundColor: `${theme.palette.icon.hover} !important`,
      color: `${theme.palette.icon.primary} !important`,
    },
  },
  retwitt: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover p": {
      color: `${theme.palette.retwitt.main} !important`,
    },
    "&:hover #retwitt": {
      backgroundColor: `${theme.palette.retwitt.hover} !important`,
      color: `${theme.palette.retwitt.main} !important`,
    },
  },
  like: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover p": {
      color: `${theme.palette.like.main} !important`,
    },
    "&:hover #like": {
      backgroundColor: `${theme.palette.like.hover} !important`,
      color: `${theme.palette.like.main} !important`,
    },
  },
  buttonText: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
  feedbackMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      borderRadius: "20px",
      boxShadow: theme.palette.boxShadow.main,
    },
  },
  whiteIcon: {
    color: theme.palette.icon.main,
  },
}));
