import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ImageComponentProps {
  imageUrl: string; // Expecting imageUrl to be passed as a prop
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the image byte array from the backend using Axios
    axios
      .get(imageUrl, {
        responseType: 'arraybuffer', // Ensure the response is in ArrayBuffer format
      })
      .then((response) => {
        // Create a Blob from the ArrayBuffer
        const blob = new Blob([response.data], { type: 'image/png' }); // Adjust MIME type as needed
        // Create an object URL from the Blob
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [imageUrl]); // Re-run when imageUrl changes

  // Clean up the object URL when the component unmounts
  useEffect(() => {
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc]);

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="Fetched from backend" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;
