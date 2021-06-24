import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage()

  return (
    <>
      <p>feed</p>
      
    </>
  );
};

export default FeedPage;