import { Box, Button, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { topicRecommendationStyles } from "../styles/topicRecommendationStyles";

export default function TopicRecommendation() {
  const classes = topicRecommendationStyles();
  const [anchorElList, setAnchorElList] = useState([]);

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

  return (
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
  );
}
