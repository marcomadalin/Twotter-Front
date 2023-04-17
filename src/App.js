import {
  createBrowserRouter,
  createRoutesFromElements,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="messages" element={<Messages />} />
      <Route path="bookmarks" element={<Bookmarks />} />
      <Route path="twitter_blue" element={<TwitterBlue />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
