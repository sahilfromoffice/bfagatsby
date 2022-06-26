import React from "react";
import CurvedPageHeading from "../components/CurvedPageHeading";

const EventTemplate = ({ pageContext: { data } }) => {
  console.log("EventTEmplate Data", data);
  return (
    <>
      <CurvedPageHeading
        titleClass="text-3xl md:text-4xl mt-2 p-2"
        title={data.name}
        breadCrumbs={[
          {
            title: "Home",
            path: "/",
          },
          {
            title: "Events",
            path: "/events",
          },
          {
            title: data.name,
            isCurrent: true,
            path: `/events/${data.slug}`,
          },
        ]}
      />
      Event Template
    </>
  );
};

export default EventTemplate;
