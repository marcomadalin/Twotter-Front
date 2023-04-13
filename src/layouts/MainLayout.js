import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Avatar, Button, Icon} from "@mui/material";

export default function MainLayout() {
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
                sx={{ ml: 1, mt: 1 }}
              >
                cruelty_free
              </Icon>
            </div>
            <List>
              {[
                { name: "Home", icon: "home", path: "home" },
                { name: "Explore", icon: "search", path: "explore" },
                { name: "Notifications", icon: "notifications", path: "notifications" },
                { name: "Messages", icon: "mail", path: "messages" },
                { name: "Bookmarks", icon: "bookmark", path: "bookmarks" },
                { name: "Twitter Blue", icon: "verified", path: "twitter_blue" },
                { name: "Profile", icon: "person", path: "profile" },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{width: 250, px:0}}
                >
                  <NavLink to={link.path} className="drawerButton">
                    <ListItemIcon color="white" sx={{ mr: 0 }}>
                      <Icon className="whiteIcon">{link.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={link.name} sx={{ ml: 0 }} />
                  </NavLink>
                </ListItem>
              ))}
                <ListItem sx={{width: 250, px:0}}>
                    <div className="drawerButton">
                        <ListItemIcon color="white" sx={{ mr: 0 }}>
                            <Icon className="whiteIcon">pending</Icon>
                        </ListItemIcon>
                        <ListItemText primary="More settings" sx={{ ml: 0 }} />
                    </div>
                </ListItem>
            </List>
            <Button
              variant="contained"
              size="large"
              sx={{
                  boxSizing: "borderBox",
                    width: 250,
                    height: 50,
                    borderRadius: 20,
                    fontWeight: "bold",
              }}
            >
              Twit
            </Button>
          </div>
          <div>
              <div className="userWrapper">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <div style={{marginLeft: 15}}>
                      <p style={{margin: 0}}>
                          Name Surname
                      </p>
                      <p style={{margin: 0}}>
                          @username
                      </p>
                  </div>
                  <Icon className="whiteIcon" sx={{marginLeft: "auto"}}>more_horiz</Icon>
              </div>
          </div>
        </Grid>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9} sx={{ flexGrow: 1 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
