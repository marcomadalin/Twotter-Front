import { twittStyles } from "../styles/twittStyles";
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/Constants";

export default function Twitt({ data, image }) {
  const classes = twittStyles();

  const [anchorEl, setAnchorEl] = useState();

  const { user, token, dispatch } = useAuthContext();

  const navigate = useNavigate();

  const theme = useTheme();

  const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [twitt, setTwitt] = useState(data);

  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    setTwitt(data);
  }, [data]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getDate = (timestamp) => {
    const date = timestamp.split("T")[0].split("-");
    return date[2] + "-" + date[1] + "-" + date[0];
  };

  const updateFollowers = async (follow) => {
    await axios
      .put(
        API_URL + `/users/follow`,
        { actualUser: user._id, targetUser: twitt.user, follow: follow },
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
    handleMenuClose();
  };

  const handleLikeClicked = () => {
    if (timerId) clearTimeout(timerId);

    const newTimerId = setTimeout(() => {
      updateLikes();
    }, 500);

    setTimerId(newTimerId);
  };

  const updateLikes = async () => {
    await axios
      .put(
        API_URL + `/twitts/updateLikes`,
        {
          twittId: twitt._id,
          userLikes: twitt.likedBy,
          like: !twitt.likedBy.includes(user._id),
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        setTwitt(response.data);
      })
      .catch((err) => console.log(err));
    handleMenuClose();
  };

  const redirectToProfile = () => {
    navigate(`/${twitt.username}`);
  };

  return (
    <Box className={classes.twittBox}>
      <Avatar alt={twitt.username} src={`data:image/png;base64,${image}`} />
      <Box className={classes.twittContent}>
        <Box className={classes.twittHeader}>
          <Box className={classes.userHeader}>
            <p className={classes.user} onClick={() => redirectToProfile()}>
              {twitt.name}
            </p>
            <p className={classes.username} onClick={() => redirectToProfile()}>
              {"@" + twitt.username + " "}
            </p>
            {bigScreen && (
              <>
                <span className={classes.dot}>{" · "}</span>
                <p className={classes.date}>{getDate(twitt.createdAt)}</p>
              </>
            )}
          </Box>
          <IconButton
            className={classes.iconButton}
            color="primary"
            size="medium"
            onClick={(event) => handleMenuOpen(event)}
          >
            <Icon>more_horizontal</Icon>
          </IconButton>
          <Menu
            className={classes.feedbackMenu}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose()}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {user && !user.following.includes(twitt.user) && (
              <MenuItem onClick={() => updateFollowers(true)}>
                <ListItemIcon>
                  <Icon className={classes.whiteIcon}>person_add</Icon>
                </ListItemIcon>
                <ListItemText>Follow user</ListItemText>
              </MenuItem>
            )}

            {user && user.following.includes(twitt.user) && (
              <MenuItem onClick={() => updateFollowers(false)}>
                <ListItemIcon>
                  <Icon className={classes.whiteIcon}>person_remove</Icon>
                </ListItemIcon>
                <ListItemText>Unfollow user</ListItemText>
              </MenuItem>
            )}

            <MenuItem onClick={() => handleMenuClose()}>
              <ListItemIcon>
                <Icon className={classes.whiteIcon}>block</Icon>
              </ListItemIcon>
              <ListItemText>Block</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Box>
          {twitt.text.split(/\r?\n|\r|\n/g).map((text, key) => (
            <p key={key} className={classes.twittText}>
              {text}
            </p>
          ))}
          <Box className={classes.twittButtons}>
            <Box className={classes.comment}>
              <IconButton id="comment" color="tertiary" size="medium">
                <Icon fontSize="small">chat_bubble</Icon>
              </IconButton>
              <p className={classes.buttonText}>{twitt.comments.length}</p>
            </Box>
            <Box className={classes.retwitt}>
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
              <p className={classes.buttonText}>{twitt.retwitts}</p>
            </Box>
            <Box
              className={
                twitt.likedBy.includes(user._id)
                  ? classes.liked
                  : classes.notLiked
              }
              onClick={() => handleLikeClicked()}
            >
              <IconButton id="like" color="tertiary" size="medium">
                <Icon fontSize="small">favorite</Icon>
              </IconButton>
              <p className={classes.buttonText}>{twitt.likes}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
