import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/Layout";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Trend from "./pages/trend";
import Info from "./pages/info";
import Profile_settings from "./pages/ProfileSettings";
import Notification from "./pages/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/trend",
        element: <Trend />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/pSettings",
        element: <Profile_settings />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
