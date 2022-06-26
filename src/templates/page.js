import React from "react";
// import "../assets/css/wp.css";
import { parse } from "@wordpress/block-serialization-default-parser";

const Page = (props) => {
  const {
    pageContext: {
      data: { content },
    },
  } = props;
  console.log("parsed Content", parse(content));

  return <div dangerouslySetInnerHTML={createMarkup(content)} />;
};

export default Page;
function createMarkup(html) {
  return { __html: html };
}
