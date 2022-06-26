import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import { renderRichText } from "gatsby-source-contentful/rich-text";

import CurvedPageHeading from "../components/CurvedPageHeading";
import Helmet from "react-helmet";
import { getMonthAndYear } from "../utils/dateUtils";

const Coach = ({ pageContext: { data } }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.coachName} | Baroda Football Academy</title>
        <link
          rel="canonical"
          href={`http://www.barodafootballacademy.co.in/coaches/${data?.coachSlug}`}
        />
      </Helmet>

      <CurvedPageHeading
        title={"Coach"}
        titleClass=" md:text-5xl"
        breadCrumbs={[
          {
            title: "Home",
            path: "/",
          },
          {
            title: "Coaches",
            path: "/coaches",
          },
          {
            title: data.coachName,
            isCurrent: true,
            path: `/coaches/${data.coachSlug}`,
          },
        ]}
      />
      <div
        style={{ background: "rgba(0,0,0,0.2)", minHeight: "60vh" }}
        className=" flex justify-center flex-col items-center  p-8 pt-10 mt-4 "
      >
        <div style={{ width: "300px" }}>
          <GatsbyImage
            image={data?.featureImage.gatsbyImageData}
            alt={data?.coachName}
            style={{
              height: "100%",
              width: "auto",
            }}
            layout="constrained"
            placeholder="blurred"
          />
        </div>
        {data?.description && renderRichText(data?.description)}

        <h3>Coach Of the Month For : </h3>
        <ul>
          {data.coach_of_the_month.map((cotm) => (
            <li key={cotm.forMonth}>{getMonthAndYear(cotm.forMonth)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Coach;
