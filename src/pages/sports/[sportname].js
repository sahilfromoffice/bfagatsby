import React from "react";
import Helmet from "react-helmet";

const SubSport = (props) => {
  const sportName = props.params?.sportname;

  const sportSlug = props.params?.sportname;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{sportName} | Baroda Football Academy </title>
        <link
          rel="canonical"
          href={`http://www.barodafootballacademy.co.in/coaches/${sportSlug}`}
        />
      </Helmet>
      <h1>Sport Name is {props?.sportname} </h1>
    </>
  );
};

export default SubSport;
