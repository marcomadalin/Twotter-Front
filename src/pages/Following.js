import {
  Box,
  Button,
  Icon,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useAuthContext } from "../hooks/useAuthContext";
import { profileStyles } from "../styles/profileStyles";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/Constants";

export default function Following() {
  const classes = profileStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [posts, setPosts] = useState([]);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [user, setUser] = useState(null);

  const auth = useAuthContext();

  const theme = useTheme();

  const navigate = useNavigate();

  const { username } = useParams();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchUser = async () => {
    await axios
      .get(API_URL + `/users/${username}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        navigate("/explore");
        console.log(err);
      });
  };

  const fetchTwitts = async () => {
    await axios
      .get(API_URL + `/twitts/allUser/${user._id}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (auth.user == null) navigate("/explore");
    else if (username === auth.user.username) setUser(auth.user);
    else fetchUser();
  }, []);

  useEffect(() => {
    if (user && user._id) fetchTwitts();
  }, [user]);

  return (
    <>
      {user && (
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
                {user.name}
              </Button>
              <p
                style={{ margin: "0 0 0 0" }}
                className={`${classes.secondaryText}`}
              >
                {posts.length + " tweets"}
              </p>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
}
