import React from "react";
import { v4 as uuidv4 } from "uuid";

const ImageGalleryItem = ({ images }) => {
 return (
  <>
   {images.map((image) => (
    <li className="ImageGalleryItem" key={uuidv4()}>
     <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
      id={image.id}
     />
    </li>
   ))}
  </>
 );
};

export default ImageGalleryItem;
