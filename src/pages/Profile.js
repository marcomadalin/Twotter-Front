import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Icon,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Twitt from "../components/Twitt";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { profileStyles } from "../styles/profileStyles";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal";

export default function Profile() {
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
      .get(`http://localhost:4000/users/${username}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchTwitts = async () => {
    await axios
      .get(`http://localhost:4000/twitts/allUser/${user._id}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (username === auth.user.username) setUser(auth.user);
    else fetchUser();
  }, []);

  useEffect(() => {
    if (user && user._id) fetchTwitts();
  }, [user]);

  return (
    <Grid
      container
      className={user ? classes.mainContainer : classes.mainContainerAuth}
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      sx={{ overflowY: "auto" }}
    >
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
          <Stack className={classes.profileBox}>
            <CardMedia
              height="200"
              image={`data:image/png;base64,${user.banner}`}
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: "200px !important",
              }}
            />
            <Box className={classes.profileEditBox}>
              <Avatar
                alt={user.username}
                src={`data:image/png;base64,${user.profile}`}
                className={classes.profilePic}
              />
              <Button
                className={classes.editProfile}
                onClick={() => setShowEditProfile(true)}
              >
                Edit profile
              </Button>
              <EditProfileModal
                openModal={showEditProfile}
                closeModal={() => setShowEditProfile(false)}
              ></EditProfileModal>
            </Box>
            <h2 style={{ margin: "0 0 0 0", marginLeft: "20px" }}>
              {user.name}
            </h2>
            <p className={`${classes.username} ${classes.secondaryText}`}>
              {"@" + user.username}
            </p>
            {user.bio && user.bio !== "" && (
              <p style={{ margin: "20px 20px 10px 20px" }}>{user.bio}</p>
            )}
            <Box className={classes.userInfoBox}>
              {user.location && user.location !== "" && (
                <Box
                  className={classes.userInfoIconWrapper}
                  sx={{ marginRight: "20px", marginLeft: "-5px" }}
                >
                  <Icon className={classes.userInfoIcon}>location_on</Icon>
                  <p className={classes.secondaryText}>{user.location}</p>
                </Box>
              )}
              <Box
                className={classes.userInfoIconWrapper}
                sx={{ marginRight: "20px" }}
              >
                <Icon className={classes.userInfoIcon}>cake</Icon>
                <p className={classes.secondaryText}>
                  Birthdate: {user.birthdate.replaceAll("-", " ")}
                </p>
              </Box>
              <Box className={classes.userInfoIconWrapper}>
                <Icon className={classes.userInfoIcon}>calendar_month</Icon>
                <p className={classes.secondaryText}>
                  Joined in{" "}
                  {months[
                    parseInt(user.createdAt.split("T")[0].split("-")[1]) - 1
                  ] +
                    " " +
                    user.createdAt.split("T")[0].split("-")[0]}
                </p>
              </Box>
            </Box>
            <Box className={classes.userInfoBox} sx={{ marginBottom: "20px" }}>
              <Box
                className={classes.userInfoIconWrapper}
                sx={{ marginRight: "20px" }}
              >
                {user.following.length}
                <NavLink
                  className={`${classes.secondaryText} ${classes.navLink}`}
                  style={{ marginLeft: "5px" }}
                >
                  Following
                </NavLink>
              </Box>
              <Box className={classes.userInfoIconWrapper}>
                {user.followers.length}
                <NavLink
                  className={`${classes.secondaryText} ${classes.navLink}`}
                  style={{ marginLeft: "5px" }}
                >
                  Followers
                </NavLink>
              </Box>
            </Box>
          </Stack>
          <Box className={classes.feedBox}>
            {posts.map((post, index) => (
              <Twitt key={index} data={post} image={user.profile} />
            ))}
          </Box>
        </Grid>
      )}
      {user && renderGrid && (
        <Grid item xs className={classes.contactsGrid}>
          {renderContacts && <SideBar />}
        </Grid>
      )}
    </Grid>
  );
}
