import { makeStyles } from "@mui/styles";

export const drawerStyles = makeStyles((theme) => ({
  drawerGrid: {
    flexGrow: "1 !important",
    paddingBottom: "10px !important",
    paddingTop: "0px !important",
    height: "100vh !important",
    overflowY: "auto !important",
    overflowX: "hidden !important",
  },
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
    marginLeft: "-15px !important",
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
  twittButtonBig: {
    boxSizing: "borderBox",
    width: 250,
    height: 50,
    borderRadius: "30px !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    fontSize: "20px !important",
  },
  twittButtonSmall: {
    height: "50px !important",
    width: "50px !important",
    backgroundColor: theme.palette.primary.main,
    background: "solid",
  },
  settingsMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      width: "250px",
      borderRadius: "20px",
      boxShadow: theme.palette.boxShadow.main,
    },
    "& .MuiAccordion-root": {
      borderRadius: "0px",
      boxShadow: "none",
    },
    "& .Mui-expanded": {
      marginBottom: "0 !important",
      marginTop: "0 !important",
    },
  },
  settingsHover: {
    height: "50px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.main} !important`,
    },
  },
}));
