import { makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) => ({
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
    marginBottom: "20px !important",
    paddingLeft: "20px !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  feedGrid: {
    borderLeft: `1px solid ${theme.palette.blur.main}`,
    borderRight: `1px solid ${theme.palette.blur.main}`,
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
  tabBox: {
    backdropFilter: "blur(6px)",
    backgroundColor: theme.palette.background.lowOpacityBlack,
    position: "sticky",
    top: 0,
    zIndex: "1000 !important",
    display: "flex !important",
    flexDirection: "column !important",
    justifyContent: "space-between !important",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    width: "inherit",
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
  feedTab: {
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: theme.palette.blurTabs.main,
    },
  },
  twittPost: {
    boxSizing: "border-box",
    width: "inherit",
    minHeight: "125px",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    padding: "15px 15px 15px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  twittWrapper: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
  },
  twittCreate: {
    width: "100% !important",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.background.default} !important`,
      "&:hover": {
        borderColor: `${theme.palette.background.default} !important`,
      },
      "&.Mui-focused": {
        borderColor: `${theme.palette.background.default} !important`,
      },
    },
  },
  twittButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  twittButtons: {
    boxSizing: "border-box",
    display: "flex",
    marginTop: "20px",
    marginLeft: "50px",
  },
  h2: {
    margin: "0 0 0 15px",
    fontWeight: "200",
    color: theme.palette.text.secondary,
  },
  iconButtonWrapper: {
    "&:hover": {
      backgroundColor: theme.palette.icon.hover,
    },
  },
  twittButton: {
    boxSizing: "borderBox",
    width: 150,
    height: 40,
    borderRadius: "30px !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    fontSize: "16px !important",
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.button.disabled} !important`,
      color: `${theme.palette.text.primaryDisabled} !important`,
    },
  },
  moreTwitts: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.blur.main}`,
    height: "50px",
  },
  loadTwitts: {
    textTransform: "none !important",
  },
}));
