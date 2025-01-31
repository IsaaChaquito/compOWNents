
import { createBrowserRouter } from "react-router";
import MainLayout from "../UI/MainLayout";
import { HomePage, ComponentsPage } from "../components/pages";

// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/components',
        element: <ComponentsPage />,
      },
    ],
  },
]);

export default router;
