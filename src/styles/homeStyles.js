import { makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) => ({
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
    paddingLeft: "10px !important",
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
  contactsGrid: {
    padding: "0 0 0 0 !important",
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
}));
