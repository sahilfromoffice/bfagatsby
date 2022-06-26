import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LatestToursCard = () => {
  return (
    <div
      style={{
        width: "260px",
        minWidth: "260px",
        height: "260px",
        minHeight: "260px",
      }}
      className="mx-2 my-1  bg-slate-100 rounded-3xl overflow-hidden relative text-black cursor-pointer shadow-md snap-start transition hover:-translate-y-2"
    >
      <div
        style={{
          background: "#00000095",
          color: "white",
          height: "90px",
          width: "100%",
          position: "absolute",
          bottom: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <h4 style={{ margin: 0 }}>Spain Iber Cup</h4>
          <span>
            <small>Mar 2017</small>
          </span>
        </div>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "51px",
            width: "260px",
            whiteSpace: "nowrap",
            margin: 0,
            padding: "14px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
          commodi ipsam nam eum eius deserunt odio iste rerum earum! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          voluptate.
        </p>
      </div>
      <StaticImage
        src="https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_960_720.jpg"
        alt="rugby"
        height={290}
        placeholder="blurred"
      />
    </div>
  );
};

export default LatestToursCard;
