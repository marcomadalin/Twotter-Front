import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import Home from "./pages/Home"
import HomeLayout from "./layouts/HomeLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout/>}>
      <Route index element={<Home />} />
    </Route>

  )
)

function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
