import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

const LatestEventCard = ({ date, headerImg, name, status, description }) => {
  return (
    <div
      className="relative mx-3 my-1 bg-slate-100 rounded-3xl overflow-hidden text-black cursor-pointer shadow-md snap-start shadown-lg transition-transform hover:-translate-y-1 "
      style={{
        width: "280px",
        minWidth: "260px",
        height: "260px",
      }}
    >
      <div
        className="transition-opacity"
        css={css`
          &:hover {
            opacity: 1;
          }
          opacity: 0;
          position: absolute;
          color: white;
          height: 100%;
          width: 100%;
          bottom: 0;
          left: 0;
          z-index: 22;
          background: rgba(0, 0, 0, 0.8);
        `}
      >
        <h4 className="font-bold text-lg text-center bg-sky-900 py-4 ">
          {name}
        </h4>
        <div className="flex mt-2 ">
          <span className="text-xs font-bold mx-2 p-1 text-slate-300">
            Date : {date}
          </span>
          <span className="text-xs font-bold mx-2 p-1 text-slate-300">
            Status : {status}
          </span>
        </div>
        <p className="p-3">{description}</p>
      </div>
      <div
        css={css`
          position: absolute;
          color: white;
          height: 28%;
          width: 100%;
          bottom: 0;
          left: 0;
          z-index: 20;
          background: rgba(0, 0, 0, 0.5);
        `}
      >
        <h4 className="font-bold text-lg text-center bg-sky-900 py-1">
          {name}
        </h4>
        <div className="flex   ">
          <span className="text-xs font-bold mx-2 p-1 text-slate-300">
            Date : {date}
          </span>
          <span className="text-xs font-bold mx-2 p-1 text-slate-300">
            Status : {status}
          </span>
        </div>
      </div>

      {headerImg ? (
        <GatsbyImage
          image={headerImg}
          alt={name}
          style={{
            height: "100%",
            width: "auto",
          }}
          layout="constrained"
          placeholder="blurred"
        />
      ) : (
        <h1>Fallback Image</h1>
      )}
    </div>
  );
};

export default LatestEventCard;
