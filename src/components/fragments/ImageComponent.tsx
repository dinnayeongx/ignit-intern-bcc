import React, { useEffect, useState } from 'react';

const ImageComponent: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the image byte array from the backend
    fetch('https://be-intern.bccdev.id/alex/api/docs/images/2')
      .then(response => response.arrayBuffer()) // Convert the response to an ArrayBuffer
      .then(buffer => {
        // Create a Blob from the ArrayBuffer
        const blob = new Blob([buffer], { type: 'image/png' }); // Adjust the MIME type as needed
        // Create an object URL from the Blob
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  // Clean up the object URL when the component unmounts
  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched from backend" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;