import React, { useEffect, useState } from 'react';
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
    const token = Cookies.get('token');
    if (!token) {
      console.error("No auth token found");
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    axiosInstance
      .get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        const contentType = response.headers['content-type'];
        const blob = new Blob([response.data], { type: contentType });
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching image:', error.response ? error.response.data : error);
        
        if (error.response?.status === 401) {
          console.warn("Token expired, redirecting to login...");
          Cookies.remove('token');
          window.location.href = '/login';
        }

        setError(true);
        setLoading(false);
      });

    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageUrl]);

  return (
    <div>
      {loading && <p>Loading image...</p>}
      {error ? (
        <div></div>
      ) : (
        imageSrc && <img src={imageSrc} className='w-full h-[300px] rounded-t-md relative' alt="Fetched from backend" />
      )}
    </div>
  );
};

export default ImageComponent;
