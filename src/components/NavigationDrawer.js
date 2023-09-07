import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Button,
  FormControlLabel,
  Icon,
  Menu,
  MenuItem,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { drawerStyles } from "../styles/drawerStyles.js";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";
import { styled } from "@mui/styles";
import { useThemeContext } from "../hooks/useThemeContext";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function NavigationDrawer() {
  const [anchorProfile, setAnchorProfile] = useState(null);
  const openProfile = Boolean(anchorProfile);

  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1200px)");
  const classes = drawerStyles();

  const { logout } = useLogout();

  const { user, token } = useAuthContext();

  const twittDialogContxt = useTwittDialogContext();
  const [dialogTwitt, setDialogTwitt] = useState(twittDialogContxt.dialog);

  const themeContext = useThemeContext();

  useEffect(() => {
    setDialogTwitt(twittDialogContxt.dialog);
  }, [twittDialogContxt.dialog]);

  const changeTheme = async () => {
    if (themeContext.act === "DARK") {
      themeContext.dispatch({ type: "LIGHT" });
      localStorage.setItem("theme", "LIGHT");
    } else {
      themeContext.dispatch({ type: "DARK" });
      localStorage.setItem("theme", "DARK");
    }
  };

  const openTwittDialog = () => {
    twittDialogContxt.dispatch({
      type: "OPEN",
    });
  };

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
                  {/*<Badge color="primary" variant="dot"/>*/}
                  <Icon sx={{ color: theme.palette.icon.main }}>home</Icon>
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
                to={user.username}
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
            onClick={() => openTwittDialog()}
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
            <Icon
              sx={
                themeContext.act === "LIGHT"
                  ? { color: "white" }
                  : { color: theme.palette.icon.main }
              }
            >
              rate_review
            </Icon>
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
            <Avatar
              alt={user.username}
              src={`data:image/png;base64,${user.profile}`}
            />
            {matches && (
              <div style={{ marginLeft: 15 }}>
                <p className="userNames">{user.name}</p>
                <p className="userNames">{"@" + user.username}</p>
              </div>
            )}
            {matches && (
              <Icon
                sx={{
                  marginLeft: "auto",
                  color: `${theme.palette.icon.main} !important`,
                }}
              >
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
            <MenuItem
              sx={{
                "& li": {
                  paddingTop: "0px !important",
                  paddingBottom: "0px !important",
                },
              }}
            >
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={
                      localStorage.getItem("theme") === null ||
                      localStorage.getItem("theme") === "DARK"
                    }
                  />
                }
                onClick={() => changeTheme()}
              />
            </MenuItem>
            <MenuItem onClick={logout} className={classes.margins}>
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
