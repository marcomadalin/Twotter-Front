import { Box, Button, Tab, Tabs, useMediaQuery } from "@mui/material";
import { homeStyles } from "../styles/homeStyles";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import SideBar from "../components/SideBar";

export default function Home() {
  const classes = homeStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [activeTab, setActiveTab] = useState(0);

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
        {activeTab === 0 && <Box className={classes.feedBox}>For you feed</Box>}
        {activeTab === 1 && (
          <Box className={classes.feedBox}>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
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
