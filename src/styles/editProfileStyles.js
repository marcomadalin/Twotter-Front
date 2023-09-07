import { makeStyles } from "@mui/styles";

export const editProfileStyles = makeStyles((theme) => ({
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
  tabBox: {
    backdropFilter: "blur(6px)",
    backgroundColor: theme.palette.background.lowOpacityBlack,
    position: "sticky",
    top: 0,
    zIndex: "1000 !important",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between",
    padding: "0 20px 0px 20px",
    alignItems: "center",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  editCloseWrapper: {
    display: "flex",
    alignItems: "center",
  },
  closeButton: {
    height: "45px !important",
    width: "45px !important",
    marginRight: "10px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
      color: `${theme.palette.icon.main} !important`,
    },
  },
  profileEditBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
  },
  profilePic: {
    marginTop: "-50px !important",
    height: "120px !important",
    width: "120px !important",
    border: "5px solid black !important",
    borderRadius: "120px !important",
    marginLeft: "20px",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    backgroundColor: theme.palette.icon.profile,
  },
  banner: {
    backgroundColor: theme.palette.primary.main,
    height: "200px",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
  picEditButton: {
    height: "45px !important",
    width: "45px !important",
    color: `white !important`,
    backgroundColor: `${theme.palette.icon.transaprent} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain2} !important`,
    },
  },
  loadingBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  saveProfile: {
    borderRadius: "60px !important",
    textTransform: "none !important",
    color: `${theme.palette.background.default} !important`,
    border: `1px solid ${theme.palette.border.main}`,
    width: "80px !important",
    height: "35px !important",
    fontWeight: "bold !important",
    backgroundColor: `${theme.palette.icon.main} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.hoverFollowButton} !important`,
    },
  },
  outlineInput: {
    boxSizing: "border-box",
    width: "100%",
    marginBottom: "20px !important",
    backgroundColor: `${theme.palette.background.default} !important`,
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
  deleteProfile: {
    borderRadius: "60px !important",
    border: `1px solid ${theme.palette.error.main} !important`,
    textTransform: "none !important",
    color: `${theme.palette.error.main} !important`,
    width: "120px !important",
    height: "35px !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.icon.hoverMain} !important`,
    },
  },
}));
