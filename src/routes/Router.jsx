
import { createBrowserRouter } from "react-router";
import App from '../App'
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
    // children: [
    //   { path: "/", element: <Home /> },
    //   { path: "/about", element: <About /> },
    // ],
  },
  // {
  //   path: "*", // Ruta para manejar 404
  //   element: <NotFound />,
  // },
]);

export default router;
