import { makeStyles } from "@mui/styles";

export const loginDialogStyles = makeStyles((theme) => ({
  authDialog: {
    "&.MuiDialog-root": {
      backgroundColor: `${theme.palette.modal.main} !important`,
    },
    "& .MuiPaper-root": {
      width: "600px",
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
  icon: {
    color: `${theme.palette.icon.main} !important`,
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
  loadingBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  passwordField: {
    width: "300px !important",
    marginBottom: "25px !important",
    borderRadius: "5px",
    backgroundColor: `${theme.palette.background.default} !important`,
  },
  outlineInput: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.tertiary.main,
      "&:hover": {
        borderColor: theme.palette.border.main,
      },
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  passWordLoginWrapper: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  loginButtonBox: {
    position: "relative",
    marginBottom: 0,
    marginTop: "auto",
  },
  loginButtonBig: {
    width: "300px !important",
    backgroundColor: `${theme.palette.icon.main} !important`,
    color: `${theme.palette.background.default} !important`,
    borderRadius: "60px !important",
    textTransform: "none !important",
    fontWeight: "bold !important",
    fontSize: "18px !important",
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.tertiary.main} !important`,
    },
  },
}));
