import { makeStyles } from "@mui/styles";

export const twittDialogStyles = makeStyles((theme) => ({
  authDialog: {
    "&.MuiDialog-root": {
      backgroundColor: `${theme.palette.modal.main} !important`,
    },
    "& .MuiPaper-root": {
      width: "600px",
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
    marginTop: "40px",
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
    width: "100%",
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
  twittPost: {
    boxSizing: "border-box",
    width: "100%",
    padding: "15px 15px 15px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  twittWrapper: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
  },
  twittCreate: {
    width: "100% !important",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.background.default} !important`,
      "&:hover": {
        borderColor: `${theme.palette.background.default} !important`,
      },
      "&.Mui-focused": {
        borderColor: `${theme.palette.background.default} !important`,
      },
    },
  },
  twittButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  twittButtons: {
    boxSizing: "border-box",
    display: "flex",
  },
  h2: {
    margin: "0 0 0 15px",
    fontWeight: "200",
    color: theme.palette.text.secondary,
  },
  iconButtonWrapper: {
    "&:hover": {
      backgroundColor: theme.palette.icon.hover,
    },
  },
  twittButton: {
    boxSizing: "borderBox",
    width: 150,
    height: 40,
    marginTop: "10px !important",
    borderRadius: "30px !important",
    fontWeight: "bold !important",
    textTransform: "none !important",
    fontSize: "16px !important",
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.button.disabled} !important`,
      color: `${theme.palette.text.primaryDisabled} !important`,
    },
  },
  blurDivider: {
    height: "1px",
    backgroundColor: theme.palette.blur.main,
    marginTop: "5px !important",
  },
  userComment: {
    fontSize: "14px",
    color: theme.palette.icon.primary,
  },
  username: {
    margin: "0 0 0 5px",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
  retwittText2: {
    margin: "0 5px 0 0",
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
}));
