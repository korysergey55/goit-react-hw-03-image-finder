import React from "react";
import ImageGalleryItem  from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
 return (
  <>
   <ul className="ImageGallery">
    <ImageGalleryItem images={images} />
   </ul>
  </>
 );
};

export default ImageGallery;
