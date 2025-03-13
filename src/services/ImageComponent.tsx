import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ImageComponentProps {
  imageUrl: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(imageUrl, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [imageUrl]);

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
