import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Explore from "./pages/Explore";
import MainLayout from "./layouts/MainLayout";
import TwitterBlue from "./pages/TwitterBlue";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import Messages from "./pages/Messages";
import themeDark from "./themes/dark";
import Notifications from "./pages/Notifications";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="twitter_blue" element={<TwitterBlue />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="home" />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
