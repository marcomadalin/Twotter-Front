import { makeStyles } from "@mui/styles";

export const mainLayoutStyles = makeStyles((theme) => ({
  defaultGrid: {
    minHeight: "100% !important",
    marginTop: "0 !important",
  },
  defaultGridAuth: {
    height: "calc(100vh - 80px) !important",
    marginTop: "0 !important",
  },
  drawerGrid: {
    flexGrow: "1 !important",
    paddingBottom: "10px !important",
    paddingTop: "0px !important",
    height: "100vh !important",
    overflowY: "auto !important",
    overflowX: "hidden !important",
  },
  outletGrid: {
    padding: "0 0 0 0 !important",
    overflowY: "auto !important",
    flexGrow: "1 !important",
  },
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
}));
