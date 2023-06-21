import { NavLink } from "react-router-dom";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { drawerStyles } from "../styles/drawerStyles.js";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavigationDrawer() {
  const [anchorProfile, setAnchorProfile] = useState(null);
  const openProfile = Boolean(anchorProfile);

  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1200px)");
  const classes = drawerStyles();

  const { logout } = useLogout();

  const { user, token } = useAuthContext();

  useEffect(() => {
    setAnchorProfile(null);
  }, [user]);

  const handleClickProfile = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const closeProfile = () => {
    setAnchorProfile(null);
  };

  return (
    <div className={matches ? "drawer" : "drawerSmall"}>
      <div className="navDiv">
        <div style={{ paddingLeft: 10, paddingRight: 0 }}>
          <NavLink to={user ? "home" : "explore"}>
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
          {user && token && (
            <ListItem
              sx={{
                px: 0,
              }}
            >
              <NavLink
                to="home"
                className={`${classes.link} ${
                  matches ? "drawerButton" : "drawerButtonSmall"
                }`}
              >
                <ListItemIcon sx={{ mr: 0 }}>
                  <Badge color="primary" variant="dot">
                    <Icon sx={{ color: theme.palette.icon.main }}>home</Icon>
                  </Badge>
                </ListItemIcon>
                {matches && <ListItemText primary="Home" sx={{ ml: 0 }} />}
              </NavLink>
            </ListItem>
          )}
          <ListItem
            sx={{
              px: 0,
            }}
          >
            <NavLink
              to="explore"
              className={`${classes.link} ${
                matches ? "drawerButton" : "drawerButtonSmall"
              }`}
            >
              <ListItemIcon sx={{ mr: 0 }}>
                <Icon sx={{ color: theme.palette.icon.main }}>search</Icon>
              </ListItemIcon>
              {matches && <ListItemText primary="Explore" sx={{ ml: 0 }} />}
            </NavLink>
          </ListItem>
          {user && token && (
            <ListItem
              sx={{
                px: 0,
              }}
            >
              <NavLink
                to="profile"
                className={`${classes.link} ${
                  matches ? "drawerButton" : "drawerButtonSmall"
                }`}
              >
                <ListItemIcon sx={{ mr: 0 }}>
                  <Icon sx={{ color: theme.palette.icon.main }}>person</Icon>
                </ListItemIcon>
                {matches && <ListItemText primary="Profile" sx={{ ml: 0 }} />}
              </NavLink>
            </ListItem>
          )}
        </List>
        {matches && user && (
          <Button
            variant="contained"
            size="large"
            className={classes.twittButtonBig}
          >
            Twitt
          </Button>
        )}
        {!matches && user && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "0 0 0 0",
              minWidth: 0,
            }}
          >
            <Icon sx={{ color: theme.palette.icon.main }}>rate_review</Icon>
          </Button>
        )}
      </div>
      {user && token && (
        <div>
          <Button
            className={matches ? "userWrapper" : "userWrapperSmall"}
            onClick={handleClickProfile}
            disableRipple
            disableFocusRipple
            sx={{
              color: `${theme.palette.text.primary} !important`,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <Avatar alt={user.username} src="/static/images/avatar/1.jpg" />
            {matches && (
              <div style={{ marginLeft: 15 }}>
                <p className="userNames">{user.name}</p>
                <p className="userNames">{"@" + user.username}</p>
              </div>
            )}
            {matches && (
              <Icon sx={{ marginLeft: "auto", color: theme.palette.icon.main }}>
                more_horiz
              </Icon>
            )}
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
            <MenuItem onClick={logout}>
              <div>
                <p style={{ margin: 1 }}>Logout from</p>
                <p style={{ margin: 0 }}>{"@" + user.username}</p>
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}
