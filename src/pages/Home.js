import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import { homeStyles } from "../styles/homeStyles";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import SideBar from "../components/SideBar";

export default function Home() {
  const classes = homeStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [activeTab, setActiveTab] = useState(0);

  const posts = [...Array(30).keys()];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `feed-tab-${index}`,
      "aria-controls": `feed-tabpanel-${index}`,
    };
  }

  return (
    <Grid
      container
      id="homeContainer"
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      sx={{ overflowY: "auto" }}
    >
      <Grid item className={classes.feedGrid}>
        <Box className={classes.tabBox}>
          <Button
            disableRipple
            disableFocusRipple
            className={classes.homeButtonFeed}
          >
            Home
          </Button>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="feed tabs"
            variant="fullWidth"
          >
            <Tab
              label="For you"
              className={classes.feedTab}
              {...a11yProps(0)}
            />
            <Tab
              label="Following"
              className={classes.feedTab}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box className={classes.twittPost}>
          <Box className={classes.twittWrapper}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h2 className={classes.h2}>What's going on ?</h2>
          </Box>
          <Box className={classes.twittButtonsWrapper}>
            <Box className={classes.twittButtons}>
              <IconButton
                className={classes.iconButtonWrapper}
                color="primary"
                size="small"
                disableRipple
              >
                <Icon>image</Icon>
              </IconButton>
              <IconButton
                className={classes.iconButtonWrapper}
                color="primary"
                size="small"
                disableRipple
              >
                <Icon>gif_box</Icon>
              </IconButton>
              <IconButton
                className={classes.iconButtonWrapper}
                color="primary"
                size="small"
                disableRipple
              >
                <Icon>mood</Icon>
              </IconButton>
            </Box>
            <Button
              variant="contained"
              size="small"
              disabled
              className={classes.twittButton}
            >
              Twitt
            </Button>
          </Box>
        </Box>
        <Box className={classes.moreTwitts}>
          <Button disableRipple size="large" className={classes.loadTwitts}>
            Show 56 Tweets
          </Button>
        </Box>
        {activeTab === 0 && (
          <Box className={classes.feedBox}>
            {posts.map((post, index) => (
              <p key={index}>for you {post}</p>
            ))}
          </Box>
        )}
        {activeTab === 1 && (
          <Box className={classes.feedBox}>
            {posts.map((post, index) => (
              <p key={index}>following {post}</p>
            ))}
          </Box>
        )}
      </Grid>
      {renderGrid && (
        <Grid item className={classes.contactsGrid}>
          {renderContacts && <SideBar />}
        </Grid>
      )}
    </Grid>
  );
}
