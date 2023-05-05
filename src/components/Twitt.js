import { twittStyles } from "../styles/twittStyles";
import { Avatar, Box, Icon, IconButton } from "@mui/material";

export default function Twitt({ index }) {
  const classes = twittStyles();

  return (
    <Box className={classes.twittBox}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box className={classes.twittContent}>
        <Box className={classes.twittHeader}>
          <Box className={classes.userHeader}>
            <p className={classes.user}>User</p>
            <p className={classes.username}>@username · </p>
            <p className={classes.date}>2 May</p>
          </Box>
          <IconButton
            className={classes.iconButton}
            color="primary"
            size="medium"
          >
            <Icon className={classes.moreIcon}>more_horizontal</Icon>
          </IconButton>
        </Box>
        <Box>
          <p className={classes.twittText}>twit text {index}</p>
          <Box className={classes.twittButtons}>
            <IconButton
              className={classes.comment}
              color="tertiary"
              size="medium"
            >
              <Icon>image</Icon>
            </IconButton>
            <IconButton
              className={classes.retwitt}
              color="tertiary"
              size="medium"
            >
              <Icon>image</Icon>
            </IconButton>
            <IconButton className={classes.like} color="tertiary" size="small">
              <Icon>image</Icon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
