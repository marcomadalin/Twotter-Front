import {
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  InputBase,
  ListItemAvatar,
  Stack,
} from "@mui/material";
import { sideBarStyles } from "../styles/sideBarStyles";
import { useAuthContext } from "../hooks/useAuthContext";
import UserRecommendation from "./UserRecommendation";
import FormSignupDialog from "./FormSingupDialog";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/Constants";

export default function SideBar() {
  const classes = sideBarStyles();

  const { user, token } = useAuthContext();

  const [openForm, setOpenForm] = useState(false);

  const [showList, setShowList] = useState(false);

  const navigate = useNavigate();

  const [users, setUsers] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [timerId, setTimerId] = useState(null);

  const findUser = async (text) => {
    await axios
      .get(API_URL + `/users/search`, {
        params: {
          user: text,
          limit: 10,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchInput = (text) => {
    setSearchText(text);

    if (text === "") {
      clearTimeout(timerId);
      setUsers([]);
      return;
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      findUser(text);
    }, 500);

    setTimerId(newTimerId);
  };

  const resetSearh = () => {
    setShowList(false);
    setSearchText("");
    setUsers([]);
  };

  return (
    <div className={classes.sideBarContainer}>
      {user && token && (
        <>
          <div className={classes.search}>
            <div className={classes.searchIconWrapper}>
              <Icon className={classes.searchIcon}>search</Icon>
            </div>
            <InputBase
              className={classes.searchInput}
              placeholder="Search on Twotter"
              value={searchText}
              onFocus={() => setShowList(true)}
              onBlur={resetSearh}
              onChange={(event) => handleSearchInput(event.target.value)}
            />
          </div>
          {showList && (
            <List className={classes.searchList}>
              {users &&
                users.map((search, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    className={`${classes.listItem} ${classes.userList}`}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={search.username}
                        src={`data:image/png;base64,${search.profile}`}
                        className={classes.hover}
                        onMouseDown={() => {
                          navigate(`/${search.username}`);
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText>
                      <p
                        className={`${classes.primaryText} ${classes.hover}`}
                        onMouseDown={() => {
                          navigate(`/${search.username}`);
                        }}
                      >
                        {search.name}
                      </p>
                      <span className={classes.secondaryText}>
                        <NavLink
                          to={`/${search.username}`}
                          className={`${classes.link} ${classes.secondaryText}`}
                          onMouseDown={() => {
                            navigate(`/${search.username}`);
                          }}
                        >
                          {"@" + search.username}
                        </NavLink>
                      </span>
                    </ListItemText>
                  </ListItem>
                ))}
              {users && users.length !== 0 && (
                <Button
                  disableRipple
                  size="large"
                  className={classes.moreButton}
                  onMouseDown={() => {
                    navigate(`/search`, {
                      state: {
                        name: searchText,
                      },
                    });
                  }}
                >
                  More
                </Button>
              )}
              {users && users.length === 0 && searchText !== "" && (
                <Container sx={{ width: "100% important" }}>
                  <p>There are no results for {searchText}</p>
                </Container>
              )}
              {(users === null ||
                (users.length === 0 && searchText === "")) && (
                <Container sx={{ width: "100% important" }}>
                  <p>Search for user's name</p>
                </Container>
              )}
            </List>
          )}
        </>
      )}
      {user && token && <UserRecommendation />}
      {!user && (
        <Stack className={classes.signupWrapper}>
          <h2 style={{ fontSize: "22px" }}>Are you new to Twotter?</h2>
          <p className={classes.termsText} style={{ marginTop: "-10px" }}>
            Sign up now to get your own personalized timeline and post on
            Twotter.
          </p>
          <Button
            className={classes.signupButtons}
            onClick={() => setOpenForm(true)}
          >
            Create an account
          </Button>
          <FormSignupDialog
            openForm={openForm}
            closeFormSingup={() => setOpenForm(false)}
          ></FormSignupDialog>
          <p className={classes.termsText} style={{ marginBottom: "0" }}>
            By signing up, you agree to the{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Terms of Service</span>
            </Button>{" "}
            and{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Privacy Policy</span>
            </Button>
            , including the{" "}
            <Button disableRipple className={classes.blueTermsText}>
              <span>Cookie Policy</span>
            </Button>
            .
          </p>
        </Stack>
      )}
      <Box className={classes.policyTextWrapper}>
        <a className={classes.policyText}>Term of Service</a>
        <a className={classes.policyText}>Privacy policy</a>
        <a className={classes.policyText}>Accessibility</a>
        <div>
          <a className={classes.policyText}>Cookie policy</a>
          <span className={classes.copyright}>© 2023 X Corp.</span>
        </div>
      </Box>
    </div>
  );
}
