import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Support from "./components/Support/Support";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Travelers from "./components/Travelers/Travelers";
import Subscribe from "./components/Subscribers/Subscribe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
