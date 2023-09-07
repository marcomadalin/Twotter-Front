import { makeStyles } from "@mui/styles";

export const twittStyles = makeStyles((theme) => ({
  twittBox: {
    boxSizing: "border-box",
    padding: "15px 15px 15px 15px",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "100px",
  },
  twittBox2: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "100px",
    width: "100%",
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
  userComment: {
    fontSize: "14px",
    color: theme.palette.icon.primary,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
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
    fontSize: "14px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  dot: {
    color: theme.palette.text.secondary,
    fontSize: "14px",
    margin: "0 0 0 5px",
  },
  username: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "14px",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  retwittText: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
  retwittText2: {
    margin: "0 5px 0 0",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
  retwittIcon: {
    color: theme.palette.text.secondary,
  },
  date: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
  twittText: {
    display: "inline !important",
    margin: "0 0 0 0",
    "&:hover": {
      cursor: "text !important",
    },
  },
  twittButtons: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: "-6px",
    marginTop: "15px",
    maxWidth: "350px",
  },
  twittButtons2: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "20px",
    marginBottom: "20px",
    width: "100%",
  },
  twittButtons3: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginTop: "5px",
    marginBottom: "-5px",
    width: "100%",
  },
  noComment: {
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
  comment: {
    display: "flex !important",
    alignItems: "center !important",
    "&:hover": {
      cursor: "pointer",
    },
    "& p": {
      color: `${theme.palette.icon.primary} !important`,
    },
    "& #comment": {
      color: `${theme.palette.icon.primary} !important`,
    },
    "&:hover #comment": {
      backgroundColor: `${theme.palette.icon.hover} !important`,
    },
  },
  retwitt: {
    display: "flex !important",
    alignItems: "center !important",
    "&:hover": {
      cursor: "pointer",
    },
    "& p": {
      color: `${theme.palette.retwitt.main} !important`,
    },
    "& #retwitt": {
      color: `${theme.palette.retwitt.main} !important`,
    },
    "&:hover #retwitt": {
      backgroundColor: `${theme.palette.retwitt.hover} !important`,
    },
  },
  notRetwitt: {
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
  notLiked: {
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
  liked: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "& p": {
      color: `${theme.palette.like.main} !important`,
    },
    "& #like": {
      color: `${theme.palette.like.main} !important`,
    },
    "&:hover #like": {
      backgroundColor: `${theme.palette.like.hover} !important`,
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
      padding: "0px 0px 0px 0px !important",
    },
    "& ul": {
      padding: "0px 0px 0px 0px !important",
    },
  },
  margins: {
    paddingTop: "10px !important",
    paddingBottom: "10px !important",
  },
  whiteIcon: {
    color: theme.palette.icon.main,
  },
  blurDivider: {
    height: "1px",
    backgroundColor: theme.palette.blur.main,
    marginTop: "10px !important",
    marginBottom: "10px !important",
  },
  postInfo: {
    display: "flex",
    alignItems: "center",
    maxHeight: "20px",
    marginRight: "30px",
  },
  banner: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px !important",
    height: "200px",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    marginBottom: "10px",
  },
  redIcon: {
    color: theme.palette.error.main,
  },
}));
