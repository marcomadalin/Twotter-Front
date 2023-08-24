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
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";

export default function Twitt({ data, image }) {
  const classes = twittStyles();

  const [anchorEl, setAnchorEl] = useState();

  const { user, token, dispatch } = useAuthContext();

  const navigate = useNavigate();

  const theme = useTheme();

  const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const twittDialogContxt = useTwittDialogContext();

  const [twitt, setTwitt] = useState(data);

  const [timerLikeId, setTimerLikeId] = useState(null);
  const [timerRetwittId, setTimertwittId] = useState(null);

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

  const redirectToProfile = (name) => {
    navigate(`/${name}`);
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
    if (token !== null) {
      if (timerLikeId) clearTimeout(timerLikeId);

      const newTimerId = setTimeout(() => {
        updateLikes();
      }, 250);

      setTimerLikeId(newTimerId);
    }
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
        twittDialogContxt.dispatch({
          type: "UPDATE",
        });
      })
      .catch((err) => console.log(err));
    handleMenuClose();
  };

  const newRetwitt = async () => {
    const data = {
      twittId: twitt._id,
      userId: user._id,
    };

    await axios
      .post(
        API_URL + `/twitts/newRetwitt`,
        {
          data: data,
          retwitts: twitt.retwittedBy,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        twittDialogContxt.dispatch({
          type: "UPDATE",
        });
      })
      .catch((err) => console.log(err));
    handleMenuClose();
  };

  const deleteRetwitt = async () => {
    await axios
      .delete(API_URL + `/twitts/deleteRetwitt`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        params: {
          twittId: twitt._id,
          userId: user._id,
          retwitts: twitt.retwittedBy,
        },
      })
      .then(() => {
        twittDialogContxt.dispatch({
          type: "UPDATE",
        });
      })
      .catch((err) => console.log(err));
    handleMenuClose();
  };

  const handleRetwittClicked = () => {
    if (token !== null) {
      if (timerRetwittId) clearTimeout(timerRetwittId);

      const newTimerId = setTimeout(() => {
        if (twitt.retwittedBy.includes(user._id)) deleteRetwitt();
        else newRetwitt();
      }, 250);

      setTimertwittId(newTimerId);
    }
  };

  return (
    <Box className={classes.twittBox}>
      <Avatar alt={twitt.username} src={`data:image/png;base64,${image}`} />
      <Box className={classes.twittContent}>
        {Object.hasOwn(twitt, "userId") && (
          <Box sx={{ display: "flex" }}>
            <Icon fontSize="small" className={classes.retwittIcon}>
              cached
            </Icon>
            <p
              className={classes.username}
              onClick={() => redirectToProfile(twitt.retwittUsername)}
            >
              {twitt.retwittUsername + " "}
            </p>
            <span className={classes.retwittText}>retwitted</span>
          </Box>
        )}
        <Box className={classes.twittHeader}>
          <Box className={classes.userHeader}>
            <p
              className={classes.user}
              onClick={() => redirectToProfile(twitt.username)}
            >
              {twitt.name}
            </p>
            <p
              className={classes.username}
              onClick={() => redirectToProfile(twitt.username)}
            >
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
            <Box
              className={classes.retwitt}
              className={
                token !== null
                  ? twitt.retwittedBy.includes(user._id)
                    ? classes.retwitt
                    : classes.notRetwitt
                  : classes.notRetwitt
              }
              onClick={() => handleRetwittClicked()}
            >
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
              <p className={classes.buttonText}>{twitt.retwittedBy.length}</p>
            </Box>
            <Box
              className={
                token !== null
                  ? twitt.likedBy.includes(user._id)
                    ? classes.liked
                    : classes.notLiked
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
