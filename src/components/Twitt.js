import { twittStyles } from "../styles/twittStyles";
import { Avatar, Box, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Twitt({ index }) {
  const classes = twittStyles();

  const feedbackMenuOptions = [
    { text: "Not interested", icon: "sentiment_dissatisfied" },
    { text: "Follow user", icon: "person_add" },
    { text: "Add/remove user from list", icon: "list_alt" },
    { text: "Mute", icon: "volume_off" },
    { text: "Block", icon: "block" },
    { text: "Insert twitt", icon: "code" },
    { text: "Report twitt", icon: "flag" },
  ];
  const [anchorEl, setAnchorEl] = useState();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
            onClick={(event) => handleMenuOpen(event)}
          >
            <Icon>more_horizontal</Icon>
          </IconButton>
          <Menu
            className={classes.feedbackMenu}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose()}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {feedbackMenuOptions.map((option, index) => (
              <MenuItem key={index} onClick={() => handleMenuClose()}>
                <ListItemIcon>
                  <Icon className={classes.whiteIcon}>{option.icon}</Icon>
                </ListItemIcon>
                <ListItemText>{option.text}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box>
          <p className={classes.twittText}>twitt text {index}</p>
          <Box className={classes.twittButtons}>
            <Box className={classes.comment}>
              <IconButton id="comment" color="tertiary" size="medium">
                <Icon fontSize="small">chat_bubble</Icon>
              </IconButton>
              <p className={classes.buttonText}>50,2k</p>
            </Box>
            <Box className={classes.retwitt}>
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
              <p className={classes.buttonText}>133,4k</p>
            </Box>
            <Box className={classes.like}>
              <IconButton id="like" color="tertiary" size="medium">
                <Icon fontSize="small">favorite</Icon>
              </IconButton>
              <p className={classes.buttonText}>222,4k</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
