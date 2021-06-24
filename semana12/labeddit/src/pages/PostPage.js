import React from "react";
import useProtectedPage from "../hooks/useProtectedPage"

const PostPage = () => {
  useProtectedPage()

  return (
    <>
      <p>Post</p>
      
    </>
  );
};

export default PostPage;