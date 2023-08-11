import { Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import NavigationDrawer from "../components/NavigationDrawer";
import { mainLayoutStyles } from "../styles/mainLayoutStyles";
import AuthenticationBanners from "../components/AuthenticationBanners";
import { useAuthContext } from "../hooks/useAuthContext";
import SideBar from "../components/SideBar";
import { useMediaQuery } from "@mui/material";

export default function MainLayout() {
  const classes = mainLayoutStyles();
  const { user } = useAuthContext();

  const renderContacts = useMediaQuery("(min-width:1300px)");

  return (
    <div>
      <ScrollRestoration />
      <Grid
        container
        spacing={2}
        className={user ? classes.defaultGrid : classes.defaultGridAuth}
      >
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
          <Grid
            container
            className={user ? classes.mainContainer : classes.mainContainerAuth}
            alignItems="flex-start"
            justifyContent="flex-start"
            direction="row"
            sx={{ overflowY: "auto" }}
          >
            <Outlet />
            <Grid item xs className={classes.contactsGrid}>
              {renderContacts && <SideBar />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AuthenticationBanners />
    </div>
  );
}
