import { makeStyles } from "@mui/styles";

export const signupDialogStyles = makeStyles((theme) => ({
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
    height: "45px !important",
    width: "45px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
      color: `${theme.palette.icon.main} !important`,
    },
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
    backgroundColor: `${theme.palette.background.secondary} !important`,
    textTransform: "none !important",
    color: `${theme.palette.background.default} !important`,
    width: "300px !important",
    height: "44px !important",
    fontWeight: "bold !important",
    fontSize: "16px !important",
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
    marginBottom: "25px",
    "&:hover": {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
  },
  blueTermsText: {
    padding: "0 0 0 0 !important",
    textTransform: "none !important",
    fontSize: "13px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.background.default} !important`,
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
      backgroundColor: `${theme.palette.background.default} !important`,
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
