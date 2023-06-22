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
}));
