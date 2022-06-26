import React from "react";

import Landing from "../components/IndexPage/Landing";
import ToursAndEvents from "../components/IndexPage/ToursAndEvents";
import Sotm from "../components/IndexPage/Sotm";
import Helmet from "react-helmet";

// markup
const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Baroda Football Academy</title>
        <link rel="canonical" href="http://www.barodafootballacademy.co.in" />
      </Helmet>
      <Landing />
      <ToursAndEvents />
      <Sotm />
    </>
  );
};

export default IndexPage;
