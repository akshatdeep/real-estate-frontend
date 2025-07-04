import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";

function App() {
const router = createBrowserRouter([
  // Public & shared layout
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "list",
        element: <ListPage />,
        loader: listPageLoader,
      },
      {
        path: "post/:id",
        element: <SinglePage />,
        loader: singlePageLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // Protected layout with RequireAuth
  {
    path: "/",
    element: <RequireAuth />, // acts like a layout wrapper for auth-guarded routes
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
        loader: profilePageLoader,
      },
      {
        path: "profile/update",
        element: <ProfileUpdatePage />,
      },
      {
        path: "add",
        element: <NewPostPage />,
      },
    ],
  },
]);


  return <RouterProvider router={router} />;
}

export default App;
