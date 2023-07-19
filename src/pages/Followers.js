import { Box, Button, CircularProgress, Icon, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useAuthContext } from "../hooks/useAuthContext";
import { profileStyles } from "../styles/profileStyles";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/Constants";

export default function Followers() {
  const classes = profileStyles();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const auth = useAuthContext();

  const navigate = useNavigate();

  const { username } = useParams();

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

  useEffect(() => {
    if (auth.user !== null && username === auth.user.username)
      setUser(auth.user);
    else fetchUser();
  }, []);

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
                {1 + " tweets"}
              </p>
            </Box>
          </Box>
        </Grid>
      )}
      {loading && (
        <Grid item>
          <Box className="loadingBox">
            <CircularProgress />
          </Box>
        </Grid>
      )}
    </>
  );
}
