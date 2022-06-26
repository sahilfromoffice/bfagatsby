import React from "react";
// import "../assets/css/wp.css";

const Post = (props) => {
  console.log("post props", props);
  const {
    pageContext: {
      data: { content },
    },
  } = props;
  return <div dangerouslySetInnerHTML={createMarkup(content)} />;
};

export default Post;
function createMarkup(html) {
  return { __html: html };
}
