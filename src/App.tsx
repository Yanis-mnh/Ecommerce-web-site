import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RoutLayout from "./layout/RoutLayout";
import Profile from "./pages/Profile";
import Create from "./pages/Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RoutLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
