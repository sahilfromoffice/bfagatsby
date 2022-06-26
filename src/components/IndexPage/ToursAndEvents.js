import React from "react";
import LatestEventCard from "../Cards/LatestEventCard";
import * as styles from "../../pages/index.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import LatestToursCard from "../Cards/LatestToursCard";
import Team from "../Team";

const ToursAndEvents = () => {
  // const {
  //   allContentfulEvents: { nodes: eventsData },
  // } = { allContentfulEvents: { nodes: [] } };
  const eventsData = [];
  // console.log("ToursAndEvents >> eventsData", eventsData);
  return (
    <section id="events" className={"section " + styles.toursAndEventsSection}>
      <div className={styles.toursAndEventsMainWrapper}>
        <div className={styles.toursAndEventscontent}>
          <div className={styles.latestEventsWrapper}>
            <h3
              style={{
                fontFamily: '"Prosto One", cursive',
                margin: 0,
                marginTop: "10px",
                fontWeight: "normal",
                color: "rgb(172, 168, 168)",
                zIndex: 10,
                background: "rgba(0,0,0,0.3)",
              }}
              className="uppercase  text-center text-4xl py-8 md:text-7xl"
            >
              Latest Events
            </h3>
            <SVGComp />
            {/* </h2> */}
            <div className={styles.latestEvents}>
              {(eventsData || []).map((ev) => {
                return (
                  <LatestEventCard
                    key={ev?.contentful_id || ev?.id}
                    date={ev?.date}
                    description={ev?.description}
                    headerImg={ev?.headerImage?.gatsbyImageData}
                    name={ev?.name}
                    status={ev?.status}
                  />
                );
              })}
            </div>
            <Link
              to="/events"
              className="m-1  transition self-center bg-black text-white rounded-2xl p-4 text-center text-lg shadow-sm hover:bg-slate-800 hover:text-slate-200 hover:translate-y-1 hover:shadow-md"
              style={{
                fontFamily: '"Prosto One", cursive',
                minWidth: "200px",
                zIndex: 10,
              }}
            >
              Show More
            </Link>
            <div
              style={{
                marginTop: "12.5px",
                height: "80px",
                width: "100%",
                background: "black",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Team className="text-white text-lg md:text-3xl" />
            </div>
          </div>
          <div className={styles.latestToursWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: '"Prosto One", cursive',
                }}
                className="flex flex-col items-center justify-center uppercase text-4xl md:text-6xl"
              >
                <span className="lg:text-8xl">International</span>
                <span className="lg:hidden">Exposure</span>
              </p>
              <div className={styles.latestTours}>
                <LatestToursCard />
                <LatestToursCard />
                <LatestToursCard />
              </div>
              <Link
                to="/events"
                className="m-3 transition self-center bg-white text-black rounded-2xl p-4 text-center text-lg shadow-sm hover:bg-slate-50 hover:text-black hover:translate-y-1 hover:shadow-md"
                style={{
                  fontFamily: '"Prosto One", cursive',
                  minWidth: "200px",
                }}
              >
                Explore
              </Link>
            </div>
            <span
              className="hidden lg:inline-block"
              style={{
                fontSize: "5rem",
                writingMode: "vertical-rl",
                fontFamily: '"Prosto One", cursive',
                textTransform: "uppercase",
              }}
            >
              Exposure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursAndEvents;

// const query = graphql`
//   {
//     allContentfulEvents(limit: 3, sort: { fields: date }) {
//       nodes {
//         contentful_id
//         name
//         date
//         status
//         description
//         content {
//           raw
//         }
//         headerImage {
//           file {
//             url
//           }
//           title
//           gatsbyImageData
//         }
//       }
//     }
//   }
// `;

const SVGComp = () => (
  <svg
    className="absolute top-0 left-0 "
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={560}
    preserveAspectRatio="none"
  >
    <g mask='url("#a")' fill="none">
      <path fill="#0e2a47" d="M0 0h1440v560H0z" />
      <path d="M444.93 365.05h46.49v49.44h-46.49z" stroke="#d3b714" />
      <path
        d="M70.06 308.06a11.22 11.22 0 1 0 22.44 0 11.22 11.22 0 1 0-22.44 0z"
        fill="#037b0b"
      />
      <path
        d="M920.58 451.91a3.32 3.32 0 1 0 6.64 0 3.32 3.32 0 1 0-6.64 0zM657.69 451.74h34.64v12.28h-34.64z"
        stroke="#d3b714"
      />
      <path d="M1399.62 145.06h29.23v40.2h-29.23z" fill="#037b0b" />
      <path d="M1235.18 309.15a24.86 24.86 0 1 0 47.14-15.78z" fill="#e73635" />
      <path d="M12.64 213.2h13.2v32.16h-13.2z" stroke="#d3b714" />
      <path
        d="M490.33 102.87a51.03 51.03 0 1 0-31.17-97.18z"
        stroke="#037b0b"
      />
      <path
        d="M476.62 308.28a49.38 49.38 0 1 0 35.96 91.99z"
        stroke="#d3b714"
      />
      <path d="M513.39 465.44a43.65 43.65 0 1 0-87.1-5.82z" fill="#e73635" />
      <path
        d="M623.14 56.1a25.52 25.52 0 1 0 51.04 0 25.52 25.52 0 1 0-51.04 0z"
        fill="#037b0b"
      />
      <path
        d="M1223.99 414.04a3.56 3.56 0 1 0 5.78-4.16zM247.3 46.1a4.04 4.04 0 1 0 8.08 0 4.04 4.04 0 1 0-8.08 0z"
        stroke="#d3b714"
      />
      <path d="M582.93 205.22h32.74v32.74h-32.74z" fill="#e73635" />
      <path
        d="M270.37 510.53a2.05 2.05 0 1 0 4.1 0 2.05 2.05 0 1 0-4.1 0zM1094.03 321.16a47.19 47.19 0 1 0 94.38 0 47.19 47.19 0 1 0-94.38 0z"
        fill="#d3b714"
      />
      <path
        d="M845.99 296.78a9.55 9.55 0 1 0 19.1 0 9.55 9.55 0 1 0-19.1 0zM355.4 392.61a10.6 10.6 0 1 0-11.9-17.54z"
        stroke="#d3b714"
      />
      <path d="M693.56 511.55h19.45V531h-19.45z" fill="#d3b714" />
      <path
        d="M1392.64 119.68a26.47 26.47 0 1 0 39.88-34.81z"
        stroke="#d3b714"
      />
      <path d="M702.48 512.38h55.36v38.09h-55.36z" fill="#037b0b" />
      <path d="M170.95 167.97h12.7v38.51h-12.7z" fill="#e73635" />
      <path
        d="M559.59 176.64a35.45 35.45 0 1 0 70.9 0 35.45 35.45 0 1 0-70.9 0z"
        stroke="#d3b714"
      />
      <path d="M967.24 87.34h7.44v7.44h-7.44z" stroke="#e73635" />
      <path
        d="M338.47 323.2h5.57v41.23h-5.57zM1289.47 97.52a17.35 17.35 0 1 0-31.78 13.92zM658.11 441.08a50.86 50.86 0 1 0 74.1 69.69zM1141.33 448.9h1.72v3.91h-1.72z"
        stroke="#037b0b"
      />
      <path d="M295.79 357.34h43.23v46.25h-43.23z" stroke="#e73635" />
      <path d="M513.97 346.18h38.27v9.51h-38.27z" fill="#037b0b" />
      <path d="M201.37 461.12h6.5v51.42h-6.5z" stroke="#037b0b" />
      <path
        d="M727.43 17.94a30.81 30.81 0 1 0 61.62 0 30.81 30.81 0 1 0-61.62 0z"
        stroke="#d3b714"
      />
      <path d="M913.56 320.38h40.66v40.66h-40.66z" fill="#037b0b" />
    </g>
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h1440v560H0z" />
      </mask>
    </defs>
  </svg>
);
