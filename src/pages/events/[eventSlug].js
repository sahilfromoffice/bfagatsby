import React from "react";
import Helmet from "react-helmet";

const Event = (props) => {
  const eventSlug = props.params?.eventSlug;
  const eventName = props.params?.eventSlug;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{eventName} | Baroda Football Academy </title>
        <link
          rel="canonical"
          href={`http://www.barodafootballacademy.co.in/coaches/${eventSlug}`}
        />
      </Helmet>{" "}
      <h3>Event - {eventSlug}</h3>;
    </>
  );
};

export default Event;
