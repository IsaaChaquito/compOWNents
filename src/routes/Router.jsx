
import { createBrowserRouter } from "react-router";
import MainLayout from "../UI/MainLayout";
import { HomePage } from "../components/pages";
import { ButtonsPage } from "../components/pages/buttons/ButtonsPage";
import { InputsPage } from "../components/pages/inputs/InputsPage";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/home',
        element: <HomePage />,
      },
      {
        // path: '/components',
        // element: <ComponentsPage />,
        path: '/buttons',
        element: <ButtonsPage />,
        // children:[
        //   {
        //     path: '/components/buttons',
        //     element: <ButtonsPage />,
        //   }
        // ]
      },
      {
        path:'/inputs',
        element: <InputsPage />,
      }
    ],
  },
]);

export default router;
