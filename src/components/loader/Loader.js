import React from 'react';
import PropTypes from "prop-types";

const Loader = ({ loading, showMore, currentPage }) => {
 return (
  <>
   {!currentPage ? (
    loading ? (
     <p>Loading...</p>
    ) : (
     <button className="Button" onClick={() => showMore()}>
      Show More
     </button>
    )
   ) : null}
  </>
 );
};

 Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  showMore: PropTypes.func.isRequired,
  currentPage:PropTypes.number,
 };

export default Loader;