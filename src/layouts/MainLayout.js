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
  const [anchorProfile, setAnchorProfile] = useState(null);
  const openProfile = Boolean(anchorProfile);

  const [anchorSettings, setAnchorSettings] = useState(null);
  const openSettings = Boolean(anchorSettings);

  const theme = useTheme();
  const classes = useStyles();

  const handleClickProfile = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const closeProfile = () => {
    setAnchorProfile(null);
  };

  const handleClickSettings = (event) => {
    setAnchorSettings(event.currentTarget);
  };

  const closeSettings = () => {
    setAnchorSettings(null);
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
            <div style={{ width: 250, paddingLeft: 10, paddingRight: 0 }}>
              <NavLink to="home">
                <ListItemIcon sx={{ mr: 0 }}>
                  <Icon
                    fontSize="large"
                    className={classes.appIcon}
                    sx={{ color: theme.palette.icon.main, mt: 1, mb: 0 }}
                  >
                    cruelty_free
                  </Icon>
                </ListItemIcon>
              </NavLink>
            </div>
            <List>
              <ListItem
                sx={{
                  width: 250,
                  px: 0,
                }}
              >
                <NavLink to="home" className={`${classes.link} drawerButton`}>
                  <ListItemIcon sx={{ mr: 0 }}>
                    <Badge color="primary" variant="dot">
                      <Icon sx={{ color: theme.palette.icon.main }}>home</Icon>
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ ml: 0 }} />
                </NavLink>
              </ListItem>
              {[
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
                <Button
                  onClick={handleClickSettings}
                  className={`${classes.link} drawerButton`}
                  sx={{
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  disableRipple
                  disableFocusRipple
                >
                  <ListItemIcon sx={{ mr: 0 }}>
                    <Icon sx={{ color: theme.palette.icon.main }}>pending</Icon>
                  </ListItemIcon>
                  <ListItemText primary="More settings" sx={{ ml: 0 }} />
                </Button>
                <Menu
                  className={classes.settingsMenu}
                  anchorEl={anchorSettings}
                  open={openSettings}
                  onClose={closeSettings}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={closeSettings}>
                    <NavLink
                      to="home"
                      className={`${classes.link} settingsButton`}
                    >
                      <ListItemIcon>
                        <Icon sx={{ color: theme.palette.icon.main }}>
                          speaker_notes
                        </Icon>
                      </ListItemIcon>
                      <ListItemText primary="Themes" />
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={closeSettings}>
                    <NavLink
                      to="home"
                      className={`${classes.link} settingsButton`}
                    >
                      <ListItemIcon>
                        <Icon sx={{ color: theme.palette.icon.main }}>
                          list_alt
                        </Icon>
                      </ListItemIcon>
                      <ListItemText primary="Lists" />
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={closeSettings}>
                    <NavLink
                      to="home"
                      className={`${classes.link} settingsButton`}
                    >
                      <ListItemIcon>
                        <Icon sx={{ color: theme.palette.icon.main }}>
                          group
                        </Icon>
                      </ListItemIcon>
                      <ListItemText primary="Twitter circle" />
                    </NavLink>
                  </MenuItem>
                  <Divider light className={classes.settingsDivider} />
                </Menu>
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
              onClick={handleClickProfile}
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
              anchorEl={anchorProfile}
              open={openProfile}
              onClose={closeProfile}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Divider light className={classes.blurDivider} />
              <MenuItem onClick={closeProfile}>Add existing account</MenuItem>
              <MenuItem onClick={closeProfile}>
                <div>
                  <p style={{ margin: 1 }}>Logout from</p>
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
