import { Box, Button, Tab, Tabs, useTheme } from "@mui/material";
import { useStyles } from "../styles";
import Grid from "@mui/material/Grid";
import * as PropTypes from "prop-types";
import { useState } from "react";

function TabPanel(props) {
  return null;
}

TabPanel.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};
export default function Home() {
  const theme = useTheme();
  const classes = useStyles();

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
    <Grid container id="homeContainer" spacing={2} sx={{ overflowY: "auto" }}>
      <Grid item xs={6} className={classes.feedGrid}>
        <Box className={classes.tabBox}>
          <Button disableRipple disableFocusRipple className={classes.home}>
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
              sx={{ textTransform: "none" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Following"
              sx={{ textTransform: "none" }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        {activeTab === 0 && <Box className={classes.feedBox}>For you feed</Box>}
        {activeTab === 1 && (
          <Box className={classes.feedBox}>
            Following feed Following feed Following feed Following feedFollowing
            feed Following feedFollowing feedFollowing feed Following feed
            Following feed Following feedFollowing feedv Following
            feedvFollowing feedv Following feed Following feed Following feed
            Following feed Following feed Following feed Following feed
            Following feed Following feedFollowing feed Following feed
          </Box>
        )}
      </Grid>
      <Grid item xs={6} sx={{ p: "0px !important" }}>
        Hello this is the contacts
      </Grid>
    </Grid>
  );
}
