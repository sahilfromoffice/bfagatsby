import React from "react";

import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { BiRun } from "@react-icons/all-files/bi/BiRun";

const TrainingCenter = ({ center, handleShowDetails, idx }) => {
  return (
    <li
      className="pointer "
      style={{
        color: "var(--primary-5)",
        width: "320px",
        height: "150px",
        margin: "5px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <button
        className="m-0 p-0 flex flex-col items-start hover:bg-slate-200 active:shadow-none hover:translate-y-0 focus:translate-y-0 h-full w-full rounded-none "
        onClick={(e) => handleShowDetails(center, idx, e)}
      >
        <h3 className="w-full text-xl font-bold bg-slate-700 uppercase text-white py-2 mb-1">
          {center.name}
        </h3>
        <ViewFront center={center} />
      </button>
    </li>
  );
};

export default TrainingCenter;

const ViewFront = ({ center }) => {
  return (
    <>
      <div className="flex items-center m-1 pl-2">
        <div style={{ width: "30px" }}>
          <ImLocation size="30px" color="red" />
        </div>
        <p className="text-sm text-left">{center?.address?.address}</p>
      </div>
      <div className=" pl-2">
        {center?.sports && (
          <span className="flex items-center ">
            <div style={{ width: "1.5rem", marginRight: "5px" }}>
              <BiRun color="darkblue" size="1.5rem" />
            </div>
            <p className="flex flex-wrap text-xs">
              {(center?.sports).map((s, idx) => (
                <span
                  style={{ fontSize: "0.75rem", color: "gray" }}
                  key={s?.id}
                >
                  {idx !== center?.sports.length - 1 ? (
                    <>{s?.name},&nbsp;</>
                  ) : (
                    s?.name
                  )}
                </span>
              ))}
            </p>
          </span>
        )}
      </div>
    </>
  );
};
