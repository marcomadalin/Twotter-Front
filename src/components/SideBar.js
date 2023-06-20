import {
  Avatar,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  InputBase,
  ListItemAvatar,
  Menu,
  MenuItem,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { sideBarStyles } from "../styles/sideBarStyles";
import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useAuthContext } from "../hooks/useAuthContext";

export default function SideBar() {
  const classes = sideBarStyles();
  const [anchorElList, setAnchorElList] = useState([]);

  const { user, token } = useAuthContext();

  const handleMenuOpen = (event, index) => {
    const newAnchorElList = [...anchorElList];
    newAnchorElList[index] = event.currentTarget;
    setAnchorElList(newAnchorElList);
  };

  const handleMenuClose = (index) => {
    const newAnchorElList = [...anchorElList];
    newAnchorElList[index] = null;
    setAnchorElList(newAnchorElList);
  };

  const topics = [
    { area: "Hot in Spain", topic: "Cataluña", interest: "300,5k Tweets" },
    { area: "NBA", topic: "Clippers", interest: "20,5k Tweets" },
    { area: "Hot in Spain", topic: "Madrid", interest: "2568 Tweets" },
    { area: "#Gaming", topic: "Withcer 4", interest: "1,3M Tweets" },
  ];

  const users = [
    { username: "Jonny Macarroni", tag: "@macarron", followed: true },
    { username: "Peter Parker", tag: "@spiderman", followed: false },
    { username: "Barack Obama", tag: "@obama", followed: false },
  ];

  return (
    <div className={classes.sideBarContainer}>
      {user && token && (
        <div className={classes.search}>
          <div className={classes.searchIconWrapper}>
            <Icon className={classes.searchIcon}>search</Icon>
          </div>
          <InputBase
            className={classes.searchInput}
            placeholder="Search on Twitter"
          />
        </div>
      )}
      {user && token && (
        <Box className={classes.listContainer}>
          <h3 className={classes.h3}>What's hot</h3>
          <List>
            {topics.map((topic, index) => (
              <ListItem key={index} disablePadding className={classes.listItem}>
                <ListItemText>
                  <p className={classes.secondaryText}>{topic.area}</p>
                  <p className={classes.primaryText}>{topic.topic}</p>
                  <p className={classes.secondaryText}>{topic.interest}</p>
                </ListItemText>
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  onClick={(event) => handleMenuOpen(event, index)}
                >
                  <Icon className={classes.moreIcon}>more_horizontal</Icon>
                </IconButton>
                <Menu
                  className={classes.feedbackMenu}
                  anchorEl={anchorElList[index]}
                  open={Boolean(anchorElList[index])}
                  onClose={() => handleMenuClose(index)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={() => handleMenuClose(index)}>
                    <ListItemIcon>
                      <Icon className={classes.sadIcon}>
                        sentiment_dissatisfied
                      </Icon>
                    </ListItemIcon>
                    <ListItemText>Not interested</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClose(index)}>
                    <ListItemIcon>
                      <Icon className={classes.sadIcon}>
                        sentiment_dissatisfied
                      </Icon>
                    </ListItemIcon>
                    <ListItemText>Spam or harmful</ListItemText>
                  </MenuItem>
                </Menu>
              </ListItem>
            ))}
          </List>
          <Button disableRipple size="large" className={classes.moreButton}>
            More
          </Button>
        </Box>
      )}
      {user && token && (
        <Box className={classes.listContainer}>
          <h3 className={classes.h3}>Who to follow</h3>
          <List>
            {users.map((user, index) => (
              <ListItem
                key={index}
                disablePadding
                className={`${classes.listItem} ${classes.userList}`}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={user.username}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <p className={classes.primaryText}>{user.username}</p>
                  <span className={classes.secondaryText}>
                    {user.tag}
                    {user.followed && (
                      <Chip
                        label="Followed"
                        size="small"
                        className={classes.followTag}
                      />
                    )}
                  </span>
                </ListItemText>
                <Button
                  disableRipple
                  size="medium"
                  className={classes.followButton}
                >
                  Follow
                </Button>
              </ListItem>
            ))}
          </List>
          <Button disableRipple size="large" className={classes.moreButton}>
            More
          </Button>
        </Box>
      )}
      {user && token && (
        <Box className={classes.policyTextWrapper}>
          <a className={classes.policyText}>Term of Service</a>
          <a className={classes.policyText}>Privacy policy</a>
          <a className={classes.policyText}>Accessibility</a>
          <div>
            <a className={classes.policyText}>Cookie policy</a>
            <span className={classes.copyright}>© 2023 X Corp.</span>
          </div>
        </Box>
      )}
    </div>
  );
}
