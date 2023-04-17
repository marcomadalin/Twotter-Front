import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Icon,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useStyles } from "../styles.js";

export default function MainLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                fontSize="large"
                sx={{ ml: 1, mt: 1, color: theme.palette.icon.main }}
              >
                cruelty_free
              </Icon>
            </div>
            <List>
              {[
                { name: "Home", icon: "home", path: "home" },
                { name: "Explore", icon: "search", path: "explore" },
                {
                  name: "Notifications",
                  icon: "notifications",
                  path: "notifications",
                },
                { name: "Messages", icon: "mail", path: "messages" },
                { name: "Bookmarks", icon: "bookmark", path: "bookmarks" },
                {
                  name: "Twitter Blue",
                  icon: "verified",
                  path: "twitter_blue",
                },
                { name: "Profile", icon: "person", path: "profile" },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: 250,
                    px: 0,
                  }}
                >
                  <NavLink
                    to={link.path}
                    className={`${classes.link} drawerButton`}
                  >
                    <ListItemIcon sx={{ mr: 0 }}>
                      {link.name === "Notifications" ? (
                        <Badge color="primary" badgeContent={1}>
                          <Icon sx={{ color: theme.palette.icon.main }}>
                            {link.icon}
                          </Icon>
                        </Badge>
                      ) : (
                        <Icon sx={{ color: theme.palette.icon.main }}>
                          {link.icon}
                        </Icon>
                      )}
                    </ListItemIcon>
                    <ListItemText primary={link.name} sx={{ ml: 0 }} />
                  </NavLink>
                </ListItem>
              ))}
              <ListItem sx={{ width: 250, px: 0 }}>
                <div className={`${classes.link} drawerButton`}>
                  <ListItemIcon sx={{ mr: 0 }}>
                    <Icon sx={{ color: theme.palette.icon.main }}>pending</Icon>
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
            <Button
              id="userWrapper"
              onClick={handleClick}
              disableRipple
              disableFocusRipple
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div style={{ marginLeft: 15 }}>
                <p className="userNames">Name Surname</p>
                <p className="userNames">@username</p>
              </div>
              <Icon sx={{ marginLeft: "auto", color: theme.palette.icon.main }}>
                more_horiz
              </Icon>
            </Button>
            <Menu
              id="usernameMenu"
              className={classes.userMenu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Divider light className={classes.blurDivider} />
              <MenuItem onClick={handleClose}>Add existing account</MenuItem>
              <MenuItem onClick={handleClose}>
                <div>
                  <p style={{ margin: 1 }}>Logout form</p>
                  <p style={{ margin: 0 }}>@username</p>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </Grid>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9} sx={{ flexGrow: 1 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
