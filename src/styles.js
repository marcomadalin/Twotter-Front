import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  appIcon: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    borderRadius: "50%",
    width: "60px !important",
    height: "60px !important",
    marginLeft: "-10px !important",
    marginBottom: "-10px !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  blurDivider: {
    height: "1px",
    backgroundColor: theme.palette.blur.main,
    boxShadow: theme.palette.boxShadow.main,
    marginTop: "5px !important",
    marginBottom: "5px !important",
  },
  settingsDivider: {
    height: "1px",
    width: "90%",
    marginLeft: "auto !important",
    marginRight: "auto !important",
    backgroundColor: theme.palette.blur.main,
    marginTop: "5px !important",
    marginBottom: "5px !important",
  },
  userMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      width: "250px",
      borderRadius: "20px",
      boxShadow: theme.palette.boxShadow.main,
    },
  },

  settingsMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      width: "250px",
      borderRadius: "20px",
      boxShadow: theme.palette.boxShadow.main,
    },
  },
}));
