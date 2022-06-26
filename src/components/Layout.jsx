import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../assets/css/index.css";
import "../assets/css/animations.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header locationPath={children?.props?.location?.pathname} />
      <main className="mainContainer">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
