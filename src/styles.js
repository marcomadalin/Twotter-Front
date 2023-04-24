import { makeStyles } from "@mui/styles";

const marginsFeed = "10px !important";

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
    fontWeight: "bold",
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
  home: {
    color: `${theme.palette.text.primary} !important`,
    background: "transparent !important",
    textTransform: "none !important",
    fontWeight: "bold !important",
    fontSize: "20px !important",
    width: "100% !important",
    display: "flex !important",
    justifyContent: "flex-start !important",
    marginBottom: "20px !important",
    marginLeft: marginsFeed,
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  feedGrid: {
    borderLeft: `1px solid ${theme.palette.blur.main}`,
    borderRight: `1px solid ${theme.palette.blur.main}`,
    padding: "0px !important",
  },
  feedBox: {
    display: "flex",
    flexDirection: "column",
    zIndex: "900 !important",
    position: "relative",
  },
  tabBox: {
    backdropFilter: "blur(6px)",
    position: "sticky",
    top: 0,
    zIndex: "1000 !important",
    height: "130px !important",
    display: "flex !important",
    flexDirection: "column !important",
    justifyContent: "space-between !important",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    width: "inherit",
  },
}));
