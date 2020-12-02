import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/home";
import Header from "./Sections/header";
import Footer from "./Sections/footer";
import SimpleReactLightbox from "simple-react-lightbox";

import "./css/App.scss";
import "./css/reset.css";
import "./css/varfonts.scss";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <SimpleReactLightbox>
        <Home />
      </SimpleReactLightbox>
      <Footer />
    </div>
    </BrowserRouter>
  );
};
export default App;
