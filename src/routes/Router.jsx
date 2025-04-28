
import { createBrowserRouter } from "react-router";
import MainLayout from "../UI/MainLayout";
import { HomePage } from "../components/pages";
import { ButtonsPage } from "../components/pages/buttons/ButtonsPage";
import { InputsPage } from "../components/pages/inputs/InputsPage";

// import NotFound from "./pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         path: '/home',
//         element: <HomePage />,
//       },
//       {
//         path: '/buttons',
//         element: <ButtonsPage />,
//         // children:[
//         //   {
//         //     path: '/components/buttons',
//         //     element: <ButtonsPage />,
//         //   }
//         // ]
//       },
//       {
//         path:'/inputs',
//         element: <InputsPage />,
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/compownents",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ButtonsPage />, // Esta será la página por defecto al entrar en /components
      },
      {
        path: "buttons", // Esto resultará en /components/buttons
        element: <ButtonsPage />,
      },
      {
        path: "inputs", // Esto resultará en /components/inputs
        element: <InputsPage />,
      }
    ],
  },
]);

export default router;
