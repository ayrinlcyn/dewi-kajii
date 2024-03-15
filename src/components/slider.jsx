import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    { url: "./images/empang1.jpg", description: "" },
    { url: "./images/fotbarrr.jpg", description: "" },
    { url: "./images/seoeda.jpg", description: "" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ganti angka 5000 dengan interval pergeseran gambar dalam milidetik

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="dashboard">
      <div className="image-container">
        <img src={images[currentIndex].url} alt={`Gambar ${currentIndex}`} />
      </div>
      <div className="description">{images[currentIndex].description}</div>
    </div>
  );
};

export default Slider;
