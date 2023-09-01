import { twittStyles } from "../styles/twittStyles";
import {
  Avatar,
  Box,
  Divider,
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

export default function Twitt({ data, image, hover = true, response = false }) {
  const classes = twittStyles();

  const [anchorEl, setAnchorEl] = useState();

  const { user, token, dispatch } = useAuthContext();

  let navigate = useNavigate();

  const theme = useTheme();

  const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const twittDialogContxt = useTwittDialogContext();
  const [dialogTwitt, setDialogTwitt] = useState(twittDialogContxt.dialog);

  const [twitt, setTwitt] = useState(data);

  const [timerLikeId, setTimerLikeId] = useState(null);
  const [timerRetwittId, setTimertwittId] = useState(null);

  useEffect(() => {
    setTwitt(data);
  }, [data]);

  useEffect(() => {
    setDialogTwitt(twittDialogContxt.dialog);
  }, [twittDialogContxt.dialog]);

  const openTwittDialog = () => {
    twittDialogContxt.dispatch({
      type: "OPEN_RESPONSE",
      payload: {
        response: data,
      },
    });
  };

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getDate = (timestamp) => {
    const date = timestamp.split("T")[0].split("-");
    return date[2] + "-" + date[1] + "-" + date[0];
  };

  const getTime = (timestamp) => {
    const dateOrg = timestamp.split("T")[0].split("-");
    const date = dateOrg[2] + "-" + dateOrg[1] + "-" + dateOrg[0];
    return timestamp.split("T")[1].split(".")[0] + " · " + date;
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

  const redirectToPost = async () => {
    if (hover) {
      navigate(`/${twitt.username}/${twitt._id}`, {
        state: {
          twitt: twitt,
        },
      });
    }
  };

  return (
    <Box
      className={classes.twittBox}
      sx={
        hover && !response
          ? {
              borderBottom: `1px solid ${theme.palette.blur.main}`,
              flexDirection: "column",
              "&:hover": {
                cursor: "pointer",
              },
            }
          : { flexDirection: "column" }
      }
      onClick={() => redirectToPost()}
    >
      <Box
        className={classes.twittBox2}
        sx={
          response
            ? {
                border: `1px solid ${theme.palette.blur.main}`,
                borderRadius: "10px",
                padding: "10px",
              }
            : {}
        }
      >
        <Avatar alt={twitt.username} src={`data:image/png;base64,${image}`} />
        <Box className={classes.twittContent}>
          {Object.hasOwn(twitt, "userId") && !response && (
            <Box sx={{ display: "flex" }}>
              <Icon fontSize="small" className={classes.retwittIcon}>
                cached
              </Icon>
              <p
                className={classes.username}
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToProfile(twitt.retwittUsername);
                }}
              >
                {twitt.retwittUsername + " "}
              </p>
              <span className={classes.retwittText}>retwitted</span>
            </Box>
          )}
          <Box
            className={classes.twittHeader}
            sx={
              Object.hasOwn(twitt, "fatherId") && twitt.fatherId !== null
                ? { marginBottom: "10px" }
                : {}
            }
          >
            <Box>
              <Box className={classes.userHeader}>
                <p
                  className={classes.user}
                  onClick={(e) => {
                    e.stopPropagation();
                    redirectToProfile(twitt.username);
                  }}
                >
                  {twitt.name}
                </p>
                <p
                  className={classes.username}
                  onClick={(e) => {
                    e.stopPropagation();
                    redirectToProfile(twitt.username);
                  }}
                >
                  {"@" + twitt.username + " "}
                </p>
                {bigScreen && hover && (
                  <>
                    <span className={classes.dot}>{" · "}</span>
                    <p className={classes.date}>{getDate(twitt.createdAt)}</p>
                  </>
                )}
              </Box>
              {Object.hasOwn(twitt, "fatherId") &&
                twitt.fatherId !== null &&
                !response && (
                  <Box sx={{ display: "flex" }}>
                    <span className={classes.retwittText2}>Responding to</span>
                    <span
                      className={classes.userComment}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${twitt.commentUsername}`);
                      }}
                    >
                      {" @" + twitt.commentUsername}
                    </span>
                  </Box>
                )}
            </Box>
            {!response && (
              <>
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
                  onClose={(e) => {
                    e.stopPropagation();
                    handleMenuClose();
                  }}
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
                    <MenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        updateFollowers(true);
                      }}
                    >
                      <ListItemIcon>
                        <Icon className={classes.whiteIcon}>person_add</Icon>
                      </ListItemIcon>
                      <ListItemText>Follow user</ListItemText>
                    </MenuItem>
                  )}

                  {user && user.following.includes(twitt.user) && (
                    <MenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        updateFollowers(false);
                      }}
                    >
                      <ListItemIcon>
                        <Icon className={classes.whiteIcon}>person_remove</Icon>
                      </ListItemIcon>
                      <ListItemText>Unfollow user</ListItemText>
                    </MenuItem>
                  )}
                  {/*
                    <MenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMenuClose();
                      }}
                    >
                      <ListItemIcon>
                        <Icon className={classes.whiteIcon}>block</Icon>
                      </ListItemIcon>
                      <ListItemText>Block</ListItemText>
                    </MenuItem>
                    */}
                </Menu>
              </>
            )}
          </Box>
          <Box>
            {twitt.text.split(/\r?\n|\r|\n/g).map((text, key) => (
              <p
                key={key}
                className={classes.twittText}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {text}
              </p>
            ))}
            {hover && !response && (
              <Box className={classes.twittButtons}>
                <Box
                  className={
                    token !== null
                      ? twitt.commentedBy.includes(user._id)
                        ? classes.comment
                        : classes.noComment
                      : classes.noComment
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    openTwittDialog();
                  }}
                >
                  <IconButton id="comment" color="tertiary" size="medium">
                    <Icon fontSize="small">chat_bubble</Icon>
                  </IconButton>
                  <p className={classes.buttonText}>
                    {twitt.commentedBy.length}
                  </p>
                </Box>
                <Box
                  className={
                    token !== null
                      ? twitt.retwittedBy.includes(user._id)
                        ? classes.retwitt
                        : classes.notRetwitt
                      : classes.notRetwitt
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRetwittClicked();
                  }}
                >
                  <IconButton id="retwitt" color="tertiary" size="medium">
                    <Icon fontSize="small">autorenew</Icon>
                  </IconButton>
                  <p className={classes.buttonText}>
                    {twitt.retwittedBy.length}
                  </p>
                </Box>
                <Box
                  className={
                    token !== null
                      ? twitt.likedBy.includes(user._id)
                        ? classes.liked
                        : classes.notLiked
                      : classes.notLiked
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikeClicked();
                  }}
                >
                  <IconButton id="like" color="tertiary" size="medium">
                    <Icon fontSize="small">favorite</Icon>
                  </IconButton>
                  <p className={classes.buttonText}>{twitt.likes}</p>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {!hover && !response && (
        <Box sx={{ width: "100%", marginTop: "-15px", marginBottom: "0px" }}>
          <span className={classes.dot}>{" · "}</span>
          <p className={classes.date}>{getTime(twitt.createdAt)}</p>
          <Divider light className={classes.blurDivider} />
          <Box className={classes.twittButtons2}>
            <Box className={classes.postInfo}>
              <p>{twitt.commentedBy.length}</p>
              <p className={classes.buttonText}> Comments</p>
            </Box>
            <Box className={classes.postInfo}>
              <p>{twitt.retwittedBy.length}</p>
              <p className={classes.buttonText}> Retwitts</p>
            </Box>
            <Box className={classes.postInfo}>
              <p>{twitt.likes}</p>
              <p className={classes.buttonText}> Likes</p>
            </Box>
          </Box>
          <Divider light className={classes.blurDivider} />
          <Box className={classes.twittButtons3}>
            <Box
              className={
                token !== null
                  ? twitt.commentedBy.includes(user._id)
                    ? classes.comment
                    : classes.noComment
                  : classes.noComment
              }
              onClick={(e) => {
                e.stopPropagation();
                openTwittDialog();
              }}
            >
              <IconButton id="comment" color="tertiary" size="medium">
                <Icon fontSize="small">chat_bubble</Icon>
              </IconButton>
            </Box>
            <Box
              className={
                token !== null
                  ? twitt.retwittedBy.includes(user._id)
                    ? classes.retwitt
                    : classes.notRetwitt
                  : classes.notRetwitt
              }
              onClick={(e) => {
                e.stopPropagation();
                handleRetwittClicked();
              }}
            >
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
            </Box>
            <Box
              className={
                token !== null
                  ? twitt.likedBy.includes(user._id)
                    ? classes.liked
                    : classes.notLiked
                  : classes.notLiked
              }
              onClick={(e) => {
                e.stopPropagation();
                handleLikeClicked();
              }}
            >
              <IconButton id="like" color="tertiary" size="medium">
                <Icon fontSize="small">favorite</Icon>
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
