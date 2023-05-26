import { makeStyles } from "@mui/styles";

export const formSignupDialogStyles = makeStyles((theme) => ({
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
  stepperWrapper: {
    display: "flex",
    alignItems: "flex-start",
    width: "400px",
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
  signupInputsWrapper: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: `${theme.palette.icon.main} !important`,
    "& svg": {
      color: theme.palette.icon.main,
    },
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
  textInput: {
    width: "400px !important",
    marginBottom: "25px !important",
    backgroundColor: `${theme.palette.background.default} !important`,
  },
  dateSelect: {
    marginBottom: "25px !important",
    backgroundColor: `${theme.palette.background.default} !important`,
    width: "100%",
  },
  termsText: {
    fontSize: "13px",
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
  loadingBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: `${theme.palette.background.default} !important`,
    borderRadius: "10px !important",
    border: `1px solid ${theme.palette.blur.main} !important`,
    maxHeight: "200px !important",
    overflowX: "hidden !important",
    overflowY: "auto",
    boxSizing: "content-box", // ensures padding and border are outside of box
    // Customize scrollbar for Webkit browsers (Chrome, Safari)
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
      backgroundColor: "transparent", // change as needed
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey", // change as needed
      borderRadius: "10px",
    },
    // Customize scrollbar for Firefox
    scrollbarWidth: "thin",
    scrollbarColor: "darkgrey transparent", // change as needed
  },
  dateWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly !important",
    alignItems: "center",
  },
  formButton: {
    borderRadius: "60px !important",
    backgroundColor: "white !important",
    textTransform: "none !important",
    color: "black !important",
    width: "400px !important",
    height: "50px !important",
    marginBottom: "25px !important",
    fontWeight: "bold !important",
    fontSize: "18px !important",
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.tertiary.main} !important`,
    },
  },
  usernameWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxWrapper: {
    width: "100% !important",
  },
  checkboxItem: {
    width: "100% !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkboxTextWrapper: {
    width: "80%",
  },
  checkboxTitle: {
    fontSize: "16px",
    marginTop: "20px",
    marginBottom: "5px",
    fontWeight: "bolder",
  },
  checkboxText: {
    fontSize: "14px",
    margin: "0 0 0 0",
  },
  overflowYContainer: {
    maxHeight: "480px",
    boxSizing: "content-box !important", // ensures padding and border are outside of box
    // Customize scrollbar for Webkit browsers (Chrome, Safari)
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px !important",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px !important",
      backgroundColor: "transparent !important", // change as needed
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey !important", // change as needed
      borderRadius: "10px !important",
    },
    // Customize scrollbar for Firefox
    scrollbarWidth: "thin !important",
    scrollbarColor: "darkgrey transparent !important", // change as needed
  },
  termsCheckboxText: {
    fontSize: "13px",
    color: theme.palette.text.secondary,
  },
  blueCheckboxTermsText: {
    padding: "0 0 0 0 !important",
    textTransform: "none !important",
    fontSize: "13px !important",
    "&:hover": {
      "& span": {
        textDecoration: "underline !important",
      },
    },
  },
  checkboxStepWrapper: {
    width: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
