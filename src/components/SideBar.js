import {
  Avatar,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  InputBase,
  ListItemAvatar,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { sideBarStyles } from "../styles/sideBarStyles";

export default function SideBar() {
  const classes = sideBarStyles();
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
      <div className={classes.search}>
        <div className={classes.searchIconWrapper}>
          <Icon className={classes.searchIcon}>search</Icon>
        </div>
        <InputBase className={classes.input} placeholder="Search on Twitter" />
      </div>
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
              <IconButton className={classes.iconButton} color="primary">
                <Icon className={classes.moreIcon}>more_horizontal</Icon>
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Button disableRipple size="large" className={classes.moreButton}>
          More
        </Button>
      </Box>
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
                <Avatar alt={user.username} src="/static/images/avatar/1.jpg" />
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
              <IconButton className={classes.iconButton} color="primary">
                <Icon className={classes.moreIcon}>more_horizontal</Icon>
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Button disableRipple size="large" className={classes.moreButton}>
          More
        </Button>
      </Box>
      <Box className={classes.policyTextWrapper}>
        <a className={classes.policyText}>Term of Service</a>
        <a className={classes.policyText}>Privacy policy</a>
        <a className={classes.policyText}>Accessibility</a>
        <div>
          <a className={classes.policyText}>Cookie policy</a>
          <span className={classes.copyright}>© 2023 X Corp.</span>
        </div>
      </Box>
    </div>
  );
}
