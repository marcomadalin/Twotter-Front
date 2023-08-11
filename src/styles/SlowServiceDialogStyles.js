import { makeStyles } from "@mui/styles";

export const slowServiceDialogStyles = makeStyles((theme) => ({
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
    height: "45px !important",
    width: "45px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
      color: `${theme.palette.icon.main} !important`,
    },
  },
  loginButtonsWrapper: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginText: {
    fontSize: "14px",
    color: theme.palette.text.secondary,
  },
  loginButtonBox: {
    display: "flex",
    alignSelf: "center",
  },
  loginButtonBig: {
    width: "300px !important",
    marginBottom: "20px !important",
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
