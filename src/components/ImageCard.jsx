import React from "react";

const ImageCard = ({ src }) => {
    return (
        <div>
            <img className="imageCard" src={src} alt="" />
        </div>
    );
};

export default ImageCard;
