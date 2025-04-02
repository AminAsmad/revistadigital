    
// src/components/YouTubeVideo.jsx
import React, { useState, useEffect } from "react";

const YouTubeVideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = "TU_API_KEY"; // Reemplaza con tu clave de API

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Error al cargar los datos del video");
        }

        const data = await response.json();

        if (data.items.length > 0) {
          setVideoData(data.items[0].snippet);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el video.</p>;

  return (
    <div className="youtube-video">
      <img
        src={videoData.thumbnails.high.url}
        alt={`Miniatura de ${videoData.title}`}
        className="thumbnail"
      />
      <h2 className="title">{videoData.title}</h2>
      <p className="description">{videoData.description}</p>
    </div>
  );
};

export default YouTubeVideo;