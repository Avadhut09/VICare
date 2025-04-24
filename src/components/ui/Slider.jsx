import React from "react";
import "./Slider.css";

const Slider = ({ images, width, height, quantity, reverse }) => {
  return (
    <div
      className="slider"
      style={{ "--width": width, "--height": height, "--quantity": quantity }}
      reverse={reverse ? "true" : undefined}
    >
      <div className="list">
        {images.map((image, index) => (
          <div
            className="item items-center justify-items-center"
            key={index}
            style={{ "--position": index + 1 }}
          >
            <img src={image} alt={`slider_${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
