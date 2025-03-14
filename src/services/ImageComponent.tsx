import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';

interface ImageComponentProps {
  imageUrl: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(imageUrl, {
        responseType: 'arraybuffer'
      })
      .then((response) => {
        const contentType = response.headers['content-type'];
        const blob = new Blob([response.data], { type: contentType });
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
        setError(true);
        setLoading(false);
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
      {loading && <p>Loading image...</p>}
      {error ? (
        <div>
          <p>Failed to load image.</p>
          <img src="/path/to/fallback-image.png" alt="Fallback" />
        </div>
      ) : (
        imageSrc && <img src={imageSrc} className='w-full h-[300px] rounded-t-md relative' alt="Fetched from backend" />
      )}
    </div>
  );
};

export default ImageComponent;
