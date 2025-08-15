import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import About from "./pages/about/AboutPage";
import { Design } from "./pages/designPage/Design";
import ScrollToTop from "./ui/ScrollToTop";
import { NavBarProvider } from "./ui/navbar/NavBarContext";

function RoutePages() {
  return (
    <BrowserRouter>
      <NavBarProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path=":designType" element={<Design />} />
          <Route path="about" element={<About />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NavBarProvider>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <RoutePages />
      {/* {isNavOpen && <StyledOverlay></StyledOverlay>} */}
    </>
  );
}
