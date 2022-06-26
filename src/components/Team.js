import React from "react";

const Team = (props) => (
  <h3 {...props}>
    <b>
      <Red>T</Red>ogether <Red>E</Red>veryone <Red>A</Red>chieves <Red>M</Red>
      ore
    </b>
  </h3>
);

export default Team;

const Red = ({ children }) => (
  <span style={{ color: "#c84b31" }}>{children}</span>
);
