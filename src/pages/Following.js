import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  ListItemAvatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/Constants";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { followersStyles } from "../styles/followersStyles";

export default function Following() {
  const classes = followersStyles();

  const [user, setUser] = useState(null);

  const [following, setFollowing] = useState(null);

  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  function a11yProps(index) {
    return {
      id: `feed-tab-${index}`,
      "aria-controls": `feed-tabpanel-${index}`,
    };
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const auth = useAuthContext();

  const navigate = useNavigate();

  const { username } = useParams();

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

  const fetchFollowing = async () => {
    await axios
      .get(API_URL + `/users/${username}/following`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setFollowing(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUser = async () => {
    await axios
      .get(API_URL + `/users/${username}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setUser(response.data);
        fetchFollowing();
      })
      .catch((err) => {
        navigate("/explore");
        console.log(err);
      });
  };

  useEffect(() => {
    if (auth.user !== null && username === auth.user.username) {
      setUser(auth.user);
      fetchFollowing();
    } else fetchUser();
  }, []);

  return (
    <Grid item className={classes.feedGrid}>
      {user && following && (
        <>
          <List className={classes.feedBox}>
            {following.map((followed, index) => (
              <ListItem
                key={index}
                disablePadding
                className={`${classes.listItem} ${classes.userList}`}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={followed.username}
                    src={`data:image/png;base64,${followed.profile}`}
                    className={classes.hover}
                    onClick={() => {
                      navigate(`/${followed.username}`);
                    }}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <p
                    className={`${classes.primaryText}`}
                    onClick={() => {
                      navigate(`/${followed.username}`);
                    }}
                  >
                    {followed.name}
                  </p>
                  <span className={classes.secondaryText2}>
                    <NavLink
                      to={`/${followed.username}`}
                      className={`${classes.link} ${classes.secondaryText2}`}
                    >
                      {"@" + followed.username}
                    </NavLink>
                    {auth.token &&
                      followed.following.includes(auth.user._id) && (
                        <Chip
                          label="Followed"
                          size="small"
                          className={classes.followTag}
                        />
                      )}
                    {auth.token && followed._id === auth.user._id && (
                      <Chip
                        label="You"
                        size="small"
                        className={classes.followTag}
                      />
                    )}
                  </span>
                </ListItemText>
                {auth.token && auth.user._id !== followed._id && (
                  <Button
                    disableRipple
                    size="medium"
                    className={classes.followButton}
                    onClick={() =>
                      updateFollowers(
                        !auth.user.following.includes(followed._id),
                        followed._id
                      )
                    }
                  >
                    {auth.user.following.includes(followed._id)
                      ? "Unfollow"
                      : "Follow"}
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
          {loading && (
            <Grid item>
              <Box className="loadingBox">
                <CircularProgress />
              </Box>
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
}
