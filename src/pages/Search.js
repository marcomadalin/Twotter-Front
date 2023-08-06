import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Icon,
  IconButton,
  ListItemAvatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/Constants";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { followersStyles } from "../styles/followersStyles";

export default function Search() {
  const classes = followersStyles();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState(null);

  const auth = useAuthContext();

  const navigate = useNavigate();

  const { state } = useLocation();

  const updateFollowers = async (follow, target) => {
    await axios
      .put(
        API_URL + `/users/follow`,
        { actualUser: auth.user._id, targetUser: target, follow: follow },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.userAct));
        auth.dispatch({
          type: "UPDATE",
          payload: { user: response.data.userAct, token: auth.token },
        });
      })
      .catch((err) => console.log(err));
  };

  const findUser = async (text) => {
    await axios
      .get(API_URL + `/users/search`, {
        params: {
          user: text,
          limit: 0,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchRecommendations = async () => {
    await axios
      .get(API_URL + `/users/recommendations`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
        params: {
          limit: 0,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (auth.user !== null) {
      setUser(auth.user);
      if (state.name !== "") findUser(state.name);
      else fetchRecommendations();
    }
  }, [auth.user, state.name]);

  return (
    <Grid item className={classes.feedGrid}>
      <Box className={classes.tabBox}>
        <IconButton
          size="large"
          className={classes.backArrow}
          onClick={() => navigate(-1)}
        >
          <Icon fontSize="medium">arrow_back</Icon>
        </IconButton>
        <Box sx={{ marginLeft: "10px" }}>
          <Button
            disableRipple
            disableFocusRipple
            className={classes.homeButtonFeed}
          >
            Connect
          </Button>
        </Box>
      </Box>
      <List className={classes.feedBox}>
        {user && users && (
          <>
            {users.map((u, index) => (
              <ListItem
                key={index}
                disablePadding
                className={`${classes.listItem} ${classes.userList}`}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={u.username}
                    src={`data:image/png;base64,${u.profile}`}
                    className={classes.hover}
                    onClick={() => {
                      navigate(`/${u.username}`);
                    }}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <p
                    className={`${classes.primaryText} ${classes.hover}`}
                    onClick={() => {
                      navigate(`/${u.username}`);
                    }}
                  >
                    {u.name}
                  </p>
                  <span className={classes.secondaryText2}>
                    <NavLink
                      to={`/${u.username}`}
                      className={`${classes.link} ${classes.secondaryText2}`}
                    >
                      {"@" + u.username}
                    </NavLink>
                    {auth.token && u.following.includes(auth.user._id) && (
                      <Chip
                        label="Followed"
                        size="small"
                        className={classes.followTag}
                      />
                    )}
                    {auth.token && u._id === auth.user._id && (
                      <Chip
                        label="You"
                        size="small"
                        className={classes.followTag}
                      />
                    )}
                  </span>
                </ListItemText>
                {auth.token && auth.user._id !== u._id && (
                  <Button
                    disableRipple
                    size="medium"
                    className={classes.followButton}
                    onClick={() =>
                      updateFollowers(
                        !auth.user.following.includes(u._id),
                        u._id
                      )
                    }
                  >
                    {auth.user.following.includes(u._id)
                      ? "Unfollow"
                      : "Follow"}
                  </Button>
                )}
              </ListItem>
            ))}
            {loading && (
              <Grid item>
                <Box className="loadingBox">
                  <CircularProgress />
                </Box>
              </Grid>
            )}
          </>
        )}
      </List>
    </Grid>
  );
}
