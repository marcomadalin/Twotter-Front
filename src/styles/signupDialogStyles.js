import { makeStyles } from "@mui/styles";

export const signupDialogStyles = makeStyles((theme) => ({
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
  signupModalWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signupModalBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  closeButton: {
    position: "fixed !important",
    margin: "10px 0 0 20px !important",
  },
  signupButtonsWrapper: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: `${theme.palette.icon.main} !important`,
  },
  signupButtons: {
    borderRadius: "60px !important",
    backgroundColor: "white !important",
    textTransform: "none !important",
    color: "black !important",
    width: "300px !important",
    height: "40px !important",
    marginBottom: "25px !important",
    fontWeight: "bold !important",
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
  termsText: {
    fontSize: "13px",
    color: theme.palette.text.secondary,
  },
  signupText: {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
  blueTermsText: {
    padding: "0 0 0 0 !important",
    textTransform: "none !important",
    fontSize: "13px !important",
    "&:hover": {
      "& span": {
        textDecoration: "underline !important",
      },
    },
  },
  blueText: {
    padding: "0 0 0 0 !important",
    textTransform: "none !important",
    fontSize: "14px !important",
    "&:hover": {
      "& span": {
        textDecoration: "underline !important",
      },
    },
  },
  signupButtonIcon: {
    color: theme.palette.icon.contrary,
    marginRight: "10px",
  },
  loadingBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
}));
