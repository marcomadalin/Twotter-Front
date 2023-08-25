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
import Profile from "./pages/Profile";
import themeDark from "./themes/dark";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Search from "./pages/Search";
import { useAuthContext } from "./hooks/useAuthContext";
import SlowServiceInfoDialog from "./components/SlowServiceInfoDialog";
import { useEffect, useState } from "react";
import TwittDialog from "./components/TwittDialog";
import Post from "./pages/Post";

function App() {
  const { user } = useAuthContext();

  const [dialogInfo, setDialogInfo] = useState(false);

  const handleDialogInfoClose = async () => {
    setDialogInfo(false);
    localStorage.setItem("dialogInfoSeen", JSON.stringify(true));
  };

  useEffect(() => {
    const dialogInfoSeen = localStorage.getItem("dialogInfoSeen");

    if (dialogInfoSeen != null && JSON.parse(dialogInfoSeen))
      setDialogInfo(false);
    else setDialogInfo(true);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route
            path="home"
            element={user !== null ? <Home /> : <Navigate to="explore" />}
          />
          <Route path="explore" element={<Explore />} />
          <Route
            path="search"
            element={user !== null ? <Search /> : <Navigate to="explore" />}
          />
          <Route path=":username/:postId" element={<Post />} />
          <Route path=":username" element={<Profile />}>
            <Route path="following" element={<Following />} />
            <Route path="followers" element={<Followers />} />
          </Route>
          <Route path="*" element={<Explore />} />
        </Route>
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
      <SlowServiceInfoDialog
        dialog={dialogInfo}
        closeDialog={() => handleDialogInfoClose()}
      ></SlowServiceInfoDialog>
      <TwittDialog />
    </ThemeProvider>
  );
}

export default App;
