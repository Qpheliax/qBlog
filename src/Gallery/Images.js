import React, { useState, useEffect } from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import GearPlaceholder from "../Sections/gear";

const ImagesGallery = () => {
  
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = () => {
    const url = "https://google-photos-album-demo2.glitch.me/DaLZrV2sK9uxTqM47";
    axios.get(url).then((res) => {
      setImages([...images, ...res.data]);
      setLoading(false);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (!loading) {
    return (
      <div>
        <SRLWrapper>
          <div className="container">
            {images.map((image, i) => (
              <div key={i}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    );
  }
  return <GearPlaceholder />;
};
export default ImagesGallery;
