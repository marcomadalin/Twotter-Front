import { Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import NavigationDrawer from "../components/NavigationDrawer";
import { mainLayoutStyles } from "../styles/mainLayoutStyles";
import AuthenticationBanners from "../components/AuthenticationBanners";

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
      <AuthenticationBanners />
    </div>
  );
}
