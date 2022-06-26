import React from "react";
import { css } from "@emotion/react";

import LatestEventCard from "../../components/Cards/LatestEventCard";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import CurvedPageHeading from "../../components/CurvedPageHeading";
import { GatsbyImage } from "gatsby-plugin-image";

const Events = (
  // { data: { allContentfulEvents: allEvents = {} } }
  ) => {
    const allEvents = {nodes : []}
  console.log("eventsData", allEvents);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events | Baroda Football Academy</title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/events"
        />
      </Helmet>
      <CurvedPageHeading title="Events" />

      <div className=" p-6 py-1 sm:p-16 sm:pt-8 h-full flex flex-col  ">
        <div className="flex justify-end m-2 p-2 mr-3">
          <input
            className="bg-slate-600 p-2 sm:w-3/12 outline-none rounded-md focus:ring-2 ring-orange-800"
            type="search"
            placeholder="Search"
          />
        </div>

        <div className="p-1 py-8 rounded-xl flex flex-col  items-center justify-center bg-slate-800  ">
          {allEvents?.nodes.map((fE) => {
            return (
              fE.isFeatured && (
                <Link
                  css={css`
                    @media (max-width: 770px) {
                      width: 92%;
                    }
                    @media (max-width: 639px) {
                      flex-direction: column;
                      width: 92%;
                      min-height: 380px;
                      max-height: 500px;
                      max-width: 450px;
                    }
                    width: 75%;
                    height: 180px;
                  `}
                  className="my-2 hover:-translate-y-1 transition-transform bg-transparent cursor-pointer overflow-clip"
                  key={fE.id}
                  to={`/events/${fE.slug}`}
                >
                  <FeaturedEvent
                    title={fE.name}
                    description={fE.description}
                    featureImage={fE?.headerImage?.gatsbyImageData}
                    date={fE.date}
                    status={fE.status}
                  />
                </Link>
              )
            );
          })}
        </div>

        <div
          className="flex flex-wrap w-full justify-center mt-5 py-6 px-2 rounded-xl"
          style={{
            background: "rgba(0,0,0,0.2)",
          }}
        >
          {allEvents?.nodes.map(
            (evt) =>
              !evt.isFeatured && (
                <LatestEventCard
                  date={evt.date}
                  description={evt.description}
                  headerImg={evt.headerImage?.gatsbyImageData}
                  name={evt.name}
                  status={evt.status}
                  key={evt.id}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Events;

const FeaturedEvent = (props) => {
  return (
    <div className="flex sm:flex-row flex-col rounded-xl overflow-hidden duration-300 bg-slate-50 text-slate-800 hover:bg-slate-300 h-full">
      <GatsbyImage
        css={css`
          @media (max-width: 650px) {
            width: 100%;
            height: auto;
          }
          height: 180px;
          width: 180px;
          min-height: 180px;
          min-width: 180px;
          max-height: 180px;
        `}
        alt={props.title}
        image={props.featureImage || ""}
      />

      <div
        css={css`
          @media (max-width: 650px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
        className=" flex flex-col w-full "
      >
        <h4 className=" text:lg sm:text-xl  text-center font-bold m-0 sm:text-left bg-sky-900 p-3 text-white w-full ">
          {props.title}
        </h4>
        <div className="px-4 py-1 mt-1 text-sm flex flex-wrap items-center justify-center  text-left">
          <p className="px-2 ">
            <b>Status : </b> {props.status}
          </p>
          <p className="px-2">
            <b>Date : </b> {props.date}
          </p>
        </div>
        <p className="text-justify mt-1 pb-1 pl-3 pr-2  text-slate-600 text-sm sm:text-base md:text-base font-serif ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

// export const query = graphql`
//   query EventsQuery {
//     allContentfulEvents {
//       nodes {
//         content {
//           raw
//         }
//         date
//         description
//         headerImage {
//           gatsbyImageData(
//             aspectRatio: 1
//             layout: CONSTRAINED
//             placeholder: BLURRED
//           )
//         }
//         name
//         id
//         slug
//         status
//         isFeatured
//       }
//       totalCount
//     }
//   }
// `;
