import { Avatar, Box, Button, Chip, ListItemAvatar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { userRecommendationStyles } from "../styles/userRecommendationStyles";

export default function UserRecommendation() {
  const classes = userRecommendationStyles();

  const users = [
    { username: "Jonny Macarroni", tag: "@macarron", followed: true },
    { username: "Peter Parker", tag: "@spiderman", followed: false },
    { username: "Barack Obama", tag: "@obama", followed: false },
  ];

  return (
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
  );
}
