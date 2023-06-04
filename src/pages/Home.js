import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Tab,
  Tabs,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { homeStyles } from "../styles/homeStyles";
import Grid from "@mui/material/Grid";
import { useRef, useState } from "react";
import SideBar from "../components/SideBar";
import Twitt from "../components/Twitt";
import axios from "axios";

export default function Home() {
  const classes = homeStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [activeTab, setActiveTab] = useState(0);
  const twittText = useRef("");

  const [posts, setPosts] = useState([...Array(30).keys()]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const createTwitt = () => {
    const twitt = {
      text: twittText.current.value,
      mentionId: null,
      comments: [],
      retwitts: 0,
      likes: 0,
      user: Math.random(),
      username: "jonnymacarroni",
    };

    axios
      .post("http://localhost:4000/twitts/new", twitt)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
            <TextField
              className={classes.twittCreate}
              placeholder="What's going on ?"
              multiline
              maxRows={7}
              inputRef={twittText}
            />
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
              className={classes.twittButton}
              onClick={createTwitt}
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
              <Twitt key={index} index={index} />
            ))}
          </Box>
        )}
        {activeTab === 1 && (
          <Box className={classes.feedBox}>
            {posts.map((post, index) => (
              <Twitt key={index} index={index} />
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
