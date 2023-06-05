import { twittStyles } from "../styles/twittStyles";
import { Avatar, Box, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Twitt({ data }) {
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

  const getDate = (timestamp) => {
    const date = timestamp.split("T")[0].split("-");
    return date[2] + "-" + date[1] + "-" + date[0];
  };

  return (
    <Box className={classes.twittBox}>
      <Avatar alt={data.username} src="/static/images/avatar/1.jpg" />
      <Box className={classes.twittContent}>
        <Box className={classes.twittHeader}>
          <Box className={classes.userHeader}>
            <p className={classes.user}>{data.username}</p>
            <p className={classes.username}>{"@" + data.username} · </p>
            <p className={classes.date}>{getDate(data.createdAt)}</p>
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
          <p className={classes.twittText}>{data.text}</p>
          <Box className={classes.twittButtons}>
            <Box className={classes.comment}>
              <IconButton id="comment" color="tertiary" size="medium">
                <Icon fontSize="small">chat_bubble</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.comments.length}</p>
            </Box>
            <Box className={classes.retwitt}>
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.retwitts}</p>
            </Box>
            <Box className={classes.like}>
              <IconButton id="like" color="tertiary" size="medium">
                <Icon fontSize="small">favorite</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.likes}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
