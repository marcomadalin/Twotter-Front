import { Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import NavigationDrawer from "../components/NavigationDrawer";
import { mainLayoutStyles } from "../styles/mainLayoutStyles";
import { Box, Button } from "@mui/material";

export default function MainLayout() {
  const classes = mainLayoutStyles();

  return (
    <div>
      <ScrollRestoration />
      <Grid container spacing={2} className={classes.defaultGrid}>
        <Grid
          item
          container
          xs={2}
          sm={2}
          md={2}
          lg={3}
          xl={3}
          className={classes.drawerGrid}
        >
          <NavigationDrawer />
        </Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={9}
          xl={9}
          className={classes.outletGrid}
        >
          <Outlet />
        </Grid>
      </Grid>
      {true && (
        <Box className={classes.banners}>
          <Box className={classes.auth}>
            <Box>
              <h2 className={classes.h2}>
                Stay up to date with what's going on
              </h2>
              <p className={classes.p}>
                Twitter users are always the first ones to know.
              </p>
            </Box>
            <Box className={classes.buttons}>
              <Button className={classes.login}>Login</Button>
              <Button className={classes.signup}>Signup</Button>
            </Box>
          </Box>
          <Box className={classes.coockies}>
            <Box>
              <h4 className={classes.coockieHeader}>
                Did someone say… cookies?
              </h4>
              <p className={classes.coockieText}>
                Twitter and its partners use cookies to provide you with a
                better, safer and faster service and to support our business.
                Some cookies are necessary to use our services, improve them and
                make sure they work properly.
              </p>
            </Box>
            <Box className={classes.buttonsCoockie}>
              <Button className={classes.coockieButton}>Accept coockies</Button>
              <Button className={classes.coockieButton} sx={{ mt: 1 }}>
                Reject coockies
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
