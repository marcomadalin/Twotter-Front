import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";
import Twitt from "../components/Twitt";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_URL } from "../utils/Constants";
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";
import { postStyles } from "../styles/postStyles";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Post() {
  const classes = postStyles();

  const twittTextRef = useRef("");

  const [responses, setResponses] = useState(null);
  const [twitt, setTwitt] = useState(null);
  const [comments, setComments] = useState(null);
  const [user, setUser] = useState(null);

  const auth = useAuthContext();
  const twittDialogContext = useTwittDialogContext();

  const navigate = useNavigate();

  const { username, postId } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    if (auth.user !== null && username === auth.user.username) {
      setUser(auth.user);
      fetchPost();
    } else fetchUser();
  }, [username, state]);

  useEffect(() => {
    if (user !== null) fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    if (state !== null) setTwitt(state.twitt);
    await axios
      .get(API_URL + `/twitts/${postId}`, {
        params: {
          findTwitt: state === null,
        },
      })
      .then((response) => {
        if (state === null) setTwitt(response.data.twitt);
        setResponses(response.data.responses);
      })
      .catch((err) => {
        navigate("/explore");
        console.log(err);
      });
  };

  const fetchUser = async () => {
    await axios
      .get(API_URL + `/users/${username}`)
      .then((response) => {
        setUser(response.data);
        fetchPost();
      })
      .catch((err) => {
        navigate("/explore");
        console.log(err);
      });
  };

  const createTwitt = async () => {
    const data = {
      text: twittTextRef.current.value,
      fatherId: twitt._id,
      user: auth.user._id,
      name: auth.user.name,
      username: auth.user.username,
    };

    await axios
      .post(
        API_URL + `/twitts/new`,
        { data: data, comments: twitt.commentedBy },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      )
      .then((response) => {
        response.data.twitt.image = auth.user.profile;
        setResponses((oldPosts) => [response.data.twitt].concat(oldPosts));
        setTwitt(response.data.father);
        twittTextRef.current.value = "";
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid item className={classes.feedGrid}>
        <Box className={classes.tabBox}>
          <IconButton
            size="large"
            className={classes.backArrow}
            onClick={() => navigate(-1)}
          >
            <Icon fontSize="medium">arrow_back</Icon>
          </IconButton>
          <Button
            disableRipple
            disableFocusRipple
            className={classes.homeButtonFeed}
            onClick={() => window.scrollTo(0, 0)}
          >
            Post
          </Button>
        </Box>
        {user !== null && twitt !== null && responses !== null && (
          <>
            <Twitt data={twitt} image={user.profile} hover={false} />
            {auth.user && (
              <Box className={classes.twittPost}>
                <Box className={classes.twittWrapper}>
                  {user && (
                    <Avatar
                      alt={user.username}
                      src={`data:image/png;base64,${auth.user.profile}`}
                    />
                  )}
                  <TextField
                    className={classes.twittCreate}
                    placeholder="Twitt your response!"
                    multiline
                    minRows={1}
                    maxRows={7}
                    inputRef={twittTextRef}
                  />
                </Box>
                <Box className={classes.twittButtonsWrapper}>
                  <Box className={classes.twittButtons}>
                    <IconButton
                      className={classes.iconButtonWrapper}
                      color="primary"
                      size="small"
                      disableRipple
                    >
                      <Icon>image</Icon>
                    </IconButton>
                    {/*<IconButton
                        className={classes.iconButtonWrapper}
                        color="primary"
                        size="small"
                        disableRipple
                    >
                      <Icon>gif_box</Icon>
                    </IconButton>
                      <IconButton
                      className={classes.iconButtonWrapper}
                    color="primary"
                    size="small"
                    disableRipple
                  >
                    <Icon>mood</Icon>
                  </IconButton>*/}
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.twittButton}
                    onClick={createTwitt}
                  >
                    Twitt
                  </Button>
                </Box>
              </Box>
            )}
            <Box className={classes.feedBox}>
              {responses.map((post, index) => (
                <Twitt key={index} data={post} image={post.image} />
              ))}
            </Box>
          </>
        )}
      </Grid>
    </>
  );
}
