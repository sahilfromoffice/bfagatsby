import React from "react";
import Helmet from "react-helmet";

const Sports = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sports | Baroda Football Academy</title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/sports"
        />
      </Helmet>
      <h1 className="text-center text-6xl md:text-8xl m-2 mb-4">Sports</h1>
    </>
  );
};

export default Sports;
