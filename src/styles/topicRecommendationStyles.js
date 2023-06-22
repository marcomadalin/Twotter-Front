import { makeStyles } from "@mui/styles";

export const topicRecommendationStyles = makeStyles((theme) => ({
  sadIcon: {
    color: theme.palette.icon.main,
  },
  searchInput: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
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
  feedbackMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      width: "400px",
      borderRadius: "20px",
      boxShadow: theme.palette.boxShadow.main,
    },
  },
}));
