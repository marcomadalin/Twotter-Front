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

function App() {
  const { user } = useAuthContext();

  const [dialog, setDialog] = useState(false);

  const handleDialogClose = async () => {
    setDialog(false);
    localStorage.setItem("dialogSeen", JSON.stringify(true));
  };

  useEffect(() => {
    const dialogSeen = localStorage.getItem("dialogSeen");

    if (dialogSeen != null && JSON.parse(dialogSeen)) setDialog(false);
    else setDialog(true);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route
            path="home"
            element={user ? <Home /> : <Navigate to="explore" />}
          />
          <Route path="explore" element={<Explore />} />
          <Route
            path="search"
            element={user ? <Search /> : <Navigate to="explore" />}
          />

          <Route path=":username" element={<Profile />}>
            <Route path="following" element={<Following />} />
            <Route path="followers" element={<Followers />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="explore" />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
      <SlowServiceInfoDialog
        dialog={dialog}
        closeDialog={() => handleDialogClose()}
      ></SlowServiceInfoDialog>
    </ThemeProvider>
  );
}

export default App;
