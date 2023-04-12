import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Icon } from "@mui/material";

export default function HomeLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Grid container spacing={2} className="defaultGrid">
        <Grid
          item
          container
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={3}
          alignItems="flex-end"
          justifyContent="space-between"
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <div className={"navDiv"}>
            <div>
              <Icon
                className="whiteIcon"
                fontSize="large"
                sx={{ ml: 3, mt: 1 }}
              >
                cruelty_free
              </Icon>
            </div>
            <List>
              {[
                { name: "Home", icon: "home" },
                { name: "Explore", icon: "search" },
                { name: "Notification", icon: "notifications" },
                { name: "Messages", icon: "mail" },
                { name: "Saved", icon: "bookmark" },
                { name: "Twitter Blue", icon: "verified" },
                { name: "Profile", icon: "person" },
                { name: "More Options", icon: "settings" },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: 230,
                  }}
                >
                  <NavLink to="/" className="drawerButton">
                    <ListItemIcon color="white" sx={{ mr: 0 }}>
                      <Icon className="whiteIcon">{link.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={link.name} sx={{ ml: 0 }} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: 230,
                height: 50,
                borderRadius: 20,
                fontWeight: "bold",
              }}
            >
              Twitt
            </Button>
          </div>
          <div>asdasd</div>
        </Grid>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9} sx={{ flexGrow: 1 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
