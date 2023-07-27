import { Avatar, Box, Button, Chip, ListItemAvatar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { userRecommendationStyles } from "../styles/userRecommendationStyles";
import axios from "axios";
import { API_URL } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function UserRecommendation() {
  const classes = userRecommendationStyles();

  const { user, token, dispatch } = useAuthContext();

  const [users, setUsers] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  const updateFollowers = async (follow, target) => {
    await axios
      .put(
        API_URL + `/users/follow`,
        { actualUser: user._id, targetUser: target, follow: follow },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.userAct));
        dispatch({
          type: "UPDATE",
          payload: { user: response.data.userAct, token: token },
        });
      })
      .catch((err) => console.log(err));
  };

  const fetchRecommendations = async () => {
    await axios
      .get(API_URL + `/users/recommendations`, {
        headers: {
          Authorization: "Bearer " + token,
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
    fetchRecommendations();
  }, [location]);

  return (
    <>
      {users && (
        <Box className={classes.listContainer}>
          <h3 className={classes.h3}>Who to follow</h3>
          <List>
            {users.map((recommendation, index) => (
              <ListItem
                key={index}
                disablePadding
                className={`${classes.listItem} ${classes.userList}`}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={recommendation.username}
                    src={`data:image/png;base64,${recommendation.profile}`}
                    className={classes.hover}
                    onClick={() => {
                      navigate(`/${recommendation.username}`);
                    }}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <p
                    className={`${classes.primaryText} ${classes.hover}`}
                    onClick={() => {
                      navigate(`/${recommendation.username}`);
                    }}
                  >
                    {recommendation.name}
                  </p>
                  <span className={classes.secondaryText}>
                    <NavLink
                      to={`/${recommendation.username}`}
                      className={`${classes.link} ${classes.secondaryText}`}
                    >
                      {"@" + recommendation.username}
                    </NavLink>
                    {token && recommendation.following.includes(user._id) && (
                      <Chip
                        label="Followed"
                        size="small"
                        className={classes.followTag}
                      />
                    )}
                  </span>
                </ListItemText>
                <Button
                  disableRipple
                  size="medium"
                  className={
                    user.following.includes(recommendation._id)
                      ? `${classes.followButton} ${classes.redBorder}`
                      : `${classes.followButton}`
                  }
                  onClick={() =>
                    updateFollowers(
                      !user.following.includes(recommendation._id),
                      recommendation._id
                    )
                  }
                >
                  {user.following.includes(recommendation._id)
                    ? "Unfollow"
                    : "Follow"}
                </Button>
              </ListItem>
            ))}
            <Button disableRipple size="large" className={classes.moreButton}>
              More
            </Button>
          </List>
        </Box>
      )}
    </>
  );
}
