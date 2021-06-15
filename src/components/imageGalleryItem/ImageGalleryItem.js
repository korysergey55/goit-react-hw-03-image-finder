import React from "react";

const ImageGalleryItem = ({ images }) => {
 return (
     <>
   {images.map((image) => (

  <li className="ImageGalleryItem">
    <img
    src={image.webformatURL}
    alt=""
    className="ImageGalleryItem-image"
    id={image.id}
   />
  </li>
     ))}
     </>
 );
};

export default ImageGalleryItem;
