import React from "react";
import Helmet from "react-helmet";
import CurvedPageHeading from "../../components/CurvedPageHeading";

const Achievements = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Achievements | Baroda Football Academy</title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/achievements"
        />
      </Helmet>
      <CurvedPageHeading title="Achievements" />
    </>
  );
};

export default Achievements;
