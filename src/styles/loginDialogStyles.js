import { makeStyles } from "@mui/styles";

export const loginDialogStyles = makeStyles((theme) => ({
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
    justifyContent: "space-between",
    height: "100%",
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
