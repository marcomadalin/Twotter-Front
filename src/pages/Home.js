import { useTheme } from "@mui/material";
import { useStyles } from "../styles";
import Grid from "@mui/material/Grid";

export default function Home() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container id="homeContainer" spacing={2} sx={{ overflowY: "scroll" }}>
      <Grid
        item
        xs={6}
        sx={{
          borderLeft: `1px solid ${theme.palette.blur.main}`,
          borderRight: `1px solid ${theme.palette.blur.main}`,
        }}
      >
        Hello this is the feed
      </Grid>
      <Grid item xs={6}>
        Hello this is the contacts
      </Grid>
    </Grid>
  );
}
