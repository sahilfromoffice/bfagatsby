import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";
import CurvedPageHeading from "../../components/CurvedPageHeading";

const Coaches = ({ data = {} }) => {
  const allCoaches = data?.allContentfulCoaches?.nodes || [];
  console.log("Coaches Page Data", data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coaches | Baroda Football Academy</title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/coaches"
        />
      </Helmet>
      <CurvedPageHeading title="Coaches" />
      <div>
        <div className="flex md:justify-end justify-center  m-3 p-1 bg-slate-800 rounded-xl md:flex-row flex-col-reverse  ">
          <div className="flex flex-auto flex-wrap text-sm p-1 items-center md:justify-start justify-center">
            <button
              style={{
                padding: "9px",
              }}
              className={` flex items-center justify-center md:ml-3 mx-1 m-0 rounded-xl hover:bg-orange-600 cursor-pointer ${
                false ? "bg-orange-700" : "bg-slate-600"
              } `}

              // onClick={() => handleSelectFilterSports(s.id)}
            >
              BFA
            </button>
            <button
              style={{
                padding: "9px",
              }}
              className={` flex items-center justify-center mx-1 m-0 rounded-xl hover:bg-orange-600 cursor-pointer ${
                false ? "bg-orange-700" : "bg-slate-600"
              } `}

              // onClick={() => handleSelectFilterSports(s.id)}
            >
              CAPS
            </button>
          </div>
          <input
            // value={filters.searchInput}
            // onChange={handleSearchInputChange}
            className="bg-slate-600 p-1 px-2 m-2  mb-2 sm:w-3/12 outline-none rounded-md focus:ring-2 ring-orange-800"
            type="search"
            placeholder="Search"
          />
        </div>
        <ul
          className="p-4 md:px-14 flex flex-wrap justify-center"
          style={{ minHeight: "60vh" }}
        >
          {allCoaches.map((coach) => {
            return (
              <li key={coach.id}>
                <CoachCard
                  name={coach.coachName}
                  slug={coach.coachSlug}
                  description={coach.description}
                  gatsbyImage={coach?.featureImage.gatsbyImageData}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const CoachCard = ({ name, gatsbyImage, slug }) => {
  return (
    <div
      className="relative rounded-xl cursor-pointer overflow-hidden "
      style={{ height: "230px", width: "230px" }}
    >
      <div
        style={{ background: "rgba(0,0,0,0.5)" }}
        className="opacity-0 hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 
       z-10 h-full w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-center text-xl uppercase p-2 ">{name}</h1>
        <Link
          to={`/coaches/${slug}`}
          className="text-black bg-white rounded-xl p-3 px-4 hover:bg-slate-300"
        >
          Details
        </Link>
      </div>
      <GatsbyImage image={gatsbyImage} alt={name} />
    </div>
  );
};

export default Coaches;

// export const query = graphql`
//   query CoachesPageQuery {
//     allContentfulCoaches {
//       nodes {
//         coachSlug
//         coachName
//         description {
//           raw
//         }
//         featureImage {
//           gatsbyImageData(
//             aspectRatio: 1
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             jpegProgressive: true
//           )
//         }
//         id
//         isCapsCoach
//       }
//     }
//   }
// `;
