import React from "react";
import PropTypes from "prop-types";
import Button from "./button/Button";

const Loader = ({ loading, showMore, currentPage }) => {
 return (
  <>
   {currentPage ? (
    loading ? (
     <p>Loading...</p>
    ) : (
     <Button showMore={showMore} />
    )
   ) : null}
  </>
 );
};

Loader.propTypes = {
 loading: PropTypes.bool.isRequired,
 showMore: PropTypes.func.isRequired,
 currentPage: PropTypes.number,
};

export default Loader;
