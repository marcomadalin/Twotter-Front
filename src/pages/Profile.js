import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Icon,
  IconButton,
  Stack,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Twitt from "../components/Twitt";
import { useAuthContext } from "../hooks/useAuthContext";
import { profileStyles } from "../styles/profileStyles";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal";
import { API_URL } from "../utils/Constants";
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";

export default function Profile() {
  const classes = profileStyles();

  const [posts, setPosts] = useState([]);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [user, setUser] = useState(null);

  const auth = useAuthContext();
  const twittDialogContext = useTwittDialogContext();

  const theme = useTheme();

  const navigate = useNavigate();

  const { username } = useParams();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState(1);

  function a11yProps(index) {
    return {
      id: `feed-tab-${index}`,
      "aria-controls": `feed-tabpanel-${index}`,
    };
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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

  const changeProfileRoute = (username) => {
    navigate(`/${username}`);
  };

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
    if (auth.user !== null && username === auth.user.username)
      setUser(auth.user);
    else fetchUser();
  }, [username]);

  useEffect(() => {
    if (user && user._id) fetchTwitts();
  }, [user, twittDialogContext.key]);

  return (
    <Grid item className={classes.feedGrid}>
      {user && (
        <>
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
          {location.pathname.split("/").length === 2 && (
            <>
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
                  {auth.user && auth.user.username === username && (
                    <>
                      <Button
                        className={classes.editProfile}
                        onClick={() => setShowEditProfile(true)}
                      >
                        Edit profile
                      </Button>
                      <EditProfileModal
                        openModal={showEditProfile}
                        closeModal={() => setShowEditProfile(false)}
                        updateUser={setUser}
                        changeRoute={changeProfileRoute}
                      ></EditProfileModal>
                    </>
                  )}
                  {auth.user && auth.user.username !== username && (
                    <Button
                      className={
                        auth.user.following.includes(user._id)
                          ? `${classes.followButton} ${classes.redBorder}`
                          : `${classes.followButton}`
                      }
                      onClick={() =>
                        updateFollowers(
                          !auth.user.following.includes(user._id),
                          user._id
                        )
                      }
                    >
                      {auth.user.following.includes(user._id)
                        ? "Unfollow"
                        : "Follow"}
                    </Button>
                  )}
                </Box>
                <h2 style={{ margin: "0 0 0 0", marginLeft: "20px" }}>
                  {user.name}
                </h2>
                <p className={`${classes.username} ${classes.secondaryText}`}>
                  {"@" + user.username}
                </p>
                {user.bio && user.bio !== "" && (
                  <div style={{ margin: "10px 20px 10px 20px" }}>
                    {user.bio &&
                      user.bio.split(/\r?\n|\r|\n/g).map((text, key) => (
                        <p style={{ margin: "5px 0 0 0 " }} key={key}>
                          {text}
                        </p>
                      ))}
                  </div>
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
                <Box
                  className={classes.userInfoBox}
                  sx={{ marginBottom: "20px" }}
                >
                  <Box
                    className={classes.userInfoIconWrapper}
                    sx={{ marginRight: "20px" }}
                  >
                    {user.following.length}
                    <NavLink
                      className={`${classes.secondaryText} ${classes.navLink}`}
                      style={{ marginLeft: "5px" }}
                      to={`following`}
                    >
                      Following
                    </NavLink>
                  </Box>
                  <Box className={classes.userInfoIconWrapper}>
                    {user.followers.length}
                    <NavLink
                      className={`${classes.secondaryText} ${classes.navLink}`}
                      style={{ marginLeft: "5px" }}
                      to={`followers`}
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
            </>
          )}
          {location.pathname.split("/").length === 3 && (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="primary"
              aria-label="feed tabs"
              variant="fullWidth"
            >
              <Tab
                label="Following"
                className={classes.feedTab}
                {...a11yProps(0)}
                onClick={() => navigate(`/${username}/following`)}
              />
              <Tab
                label="Followers"
                className={classes.feedTab}
                {...a11yProps(1)}
                onClick={() => navigate(`/${username}/followers`)}
              />
            </Tabs>
          )}
        </>
      )}
      <Outlet />
    </Grid>
  );
}
