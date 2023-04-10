import { Outlet, ScrollRestoration } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";

export default function HomeLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={3}
          alignItems="flex-end"
          justifyContent="space-around"
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <div className={"navDiv"}>
            <List>
              {[
                "Home",
                "Explore",
                "Notification",
                "Messages",
                "Saved",
                "Twitter Blue",
                "Profile",
                "More Options",
              ].map((text, index) => (
                <ListItem
                  key={text}
                  sx={{
                    width: 200,
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button
              sx={{
                width: 200,
              }}
            >
              Twitt
            </Button>
          </div>
          <div>asdasd</div>
        </Grid>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9} sx={{ flexGrow: 1 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
