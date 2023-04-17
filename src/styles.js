import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  blurDivider: {
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    boxShadow: theme.palette.boxShadow.main,
    marginTop: "5px !important",
    marginBottom: "5px !important",
  },
  userMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "black",
      width: "250px",
      borderRadius: "20px",
      marginTop: "-85px",
      boxShadow: theme.palette.boxShadow.main,
    },
  },
}));
