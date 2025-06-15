import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "about",
    element: <About />,
  },
  {
    path: "location",
    element: <Location />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
