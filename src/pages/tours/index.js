import React from "react";
import Helmet from "react-helmet";
import CurvedPageHeading from "../../components/CurvedPageHeading";

const Tours = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exposure Trips | Baroda Football Academy</title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/tours"
        />
      </Helmet>
      <CurvedPageHeading title="Tours" />

      <div>
        This Is The Main Content
        <p>
          lorem23 as das asd assd a sdas dasdas da sda sda sd as d a sd a sd a s
          da sd
        </p>
      </div>
    </>
  );
};

export default Tours;
