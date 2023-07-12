import { twittStyles } from "../styles/twittStyles";
import { Avatar, Box, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
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
        { actualUser: user._id, targetUser: data.user, follow: follow },
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

  const redirectToProfile = () => {
    navigate(`/${data.username}`);
  };

  return (
    <Box className={classes.twittBox}>
      <Avatar alt={data.username} src={`data:image/png;base64,${image}`} />
      <Box className={classes.twittContent}>
        <Box className={classes.twittHeader}>
          <Box className={classes.userHeader}>
            <p className={classes.user} onClick={() => redirectToProfile()}>
              {data.name}
            </p>
            <p className={classes.username} onClick={() => redirectToProfile()}>
              {"@" + data.username} ·{" "}
            </p>
            <p className={classes.date}>{getDate(data.createdAt)}</p>
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
            {user && !user.following.includes(data.user) && (
              <MenuItem onClick={() => updateFollowers(true)}>
                <ListItemIcon>
                  <Icon className={classes.whiteIcon}>person_add</Icon>
                </ListItemIcon>
                <ListItemText>Follow user</ListItemText>
              </MenuItem>
            )}

            {user && user.following.includes(data.user) && (
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
          {data.text.split(/\r?\n|\r|\n/g).map((text, key) => (
            <p key={key} className={classes.twittText}>
              {text}
            </p>
          ))}
          <Box className={classes.twittButtons}>
            <Box className={classes.comment}>
              <IconButton id="comment" color="tertiary" size="medium">
                <Icon fontSize="small">chat_bubble</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.comments.length}</p>
            </Box>
            <Box className={classes.retwitt}>
              <IconButton id="retwitt" color="tertiary" size="medium">
                <Icon fontSize="small">autorenew</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.retwitts}</p>
            </Box>
            <Box className={classes.like}>
              <IconButton id="like" color="tertiary" size="medium">
                <Icon fontSize="small">favorite</Icon>
              </IconButton>
              <p className={classes.buttonText}>{data.likes}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
