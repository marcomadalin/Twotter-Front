import { makeStyles } from "@mui/styles";

export const mainLayoutStyles = makeStyles((theme) => ({
  defaultGrid: {
    minHeight: "100% !important",
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
  banners: {
    width: "100%",
    position: "sticky",
    bottom: "0",
  },
  auth: {
    padding: "0 20% 0 20%",
    height: "80px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  h2: {
    margin: "0 0 0 0",
  },
  p: {
    margin: "0 0 0 0",
  },
  login: {
    borderRadius: "60px !important",
    border: "1px solid white !important",
    textTransform: "none !important",
    color: "white !important",
    width: "100px !important",
    fontWeight: "bold !important",
  },
  signup: {
    borderRadius: "60px !important",
    backgroundColor: "white !important",
    marginLeft: "10px !important",
    textTransform: "none !important",
    color: "black !important",
    width: "100px !important",
    fontWeight: "bold !important",
  },
  coockies: {
    padding: "0 20% 0 20%",
    height: "150px",
    background: theme.palette.background.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coockieHeader: {
    color: "black",
    margin: "0 0 0 0",
  },
  coockieText: {
    color: "black",
    margin: "5px 0 0 0",
    fontSize: "13px",
    maxWidth: "700px",
  },
  buttonsCoockie: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  coockieButton: {
    borderRadius: "60px !important",
    textTransform: "none !important",
    backgroundColor: `${theme.palette.coockie.button} !important`,
    color: "white !important",
    width: "200px !important",
    fontWeight: "bold !important",
  },
}));
