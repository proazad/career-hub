import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blogs from "./Components/Blogs/Blogs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Jobs from "./Components/Jobs/Jobs";
import Root from "./Components/Root/Root";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/jobs",
    element: <Jobs></Jobs>,
  },
  {
    path: "/appliedjobs",
    element: <AppliedJobs></AppliedJobs>,
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  { path: "/blogs", element: <Blogs></Blogs> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
