import { makeStyles } from "@mui/styles";

export const bannerStyles = makeStyles((theme) => ({
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
  authDialog: {
    backgroundColor: theme.palette.modal.main,
    "& .MuiPaper-root": {
      width: "6000px",
      height: "650px",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: "10px",
    },
  },
  dialogHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginModalWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginModalBody: {
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    position: "fixed !important",
    margin: "10px 0 0 20px !important",
  },
  loginButtonsWrapper: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginButtons: {
    borderRadius: "60px !important",
    backgroundColor: "white !important",
    textTransform: "none !important",
    color: "black !important",
    width: "300px !important",
    height: "40px !important",
    marginBottom: "25px !important",
    fontWeight: "bold !important",
  },
  loginUsername: {
    width: "300px !important",
    marginBottom: "25px !important",
    backgroundColor: `${theme.palette.background.default} !important`,
    "& input": {
      border: `2px solid ${theme.palette.tertiary.main}`,
      borderRadius: "5px",
      backgroundColor: `${theme.palette.background.default} !important`,
      "&:focus": {
        border: `none`,
      },
    },
  },
  dividerWrapper: {
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width: "100% !important",
    marginBottom: "20px !important",
  },
  divider: {
    display: "flex",
    height: "1px",
    width: "130px",
    background: theme.palette.tertiary.main,
  },
  forgotPassword: {
    borderRadius: "60px !important",
    textTransform: "none !important",
    border: `1px solid ${theme.palette.icon.main} !important`,
    color: `${theme.palette.text.primary}  !important`,
    width: "300px !important",
    height: "40px !important",
    marginBottom: "25px !important",
    fontWeight: "bold !important",
  },
  loginText: {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
  signupText: {
    textTransform: "none !important",
    fontSize: "14px !important",
    "&:hover": {
      "& span": {
        textDecoration: "underline !important",
      },
    },
  },
  loginButtonIcon: {
    color: theme.palette.icon.contrary,
    marginRight: "10px",
  },
}));
