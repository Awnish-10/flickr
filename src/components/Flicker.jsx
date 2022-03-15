import React, { useState } from "react";
import fetchJsonp from "fetch-jsonp";
import "./styles.css";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";

const Flicker = () => {
    const [imageList, setImageList] = useState([]);
    const getImages = async (keyword) => {
        //getting list of images from flickr and storing in state imageList
        fetchJsonp(
            `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${keyword}`,
            { jsonpCallback: "jsoncallback" }
        )
            .then((res) => res.json())
            .then(({ items }) => setImageList(items))
            .catch((err) => console.log(err));
    };

    const searchImages = (keyword) => {
        getImages(keyword);
    };

    return (
        <>
            <SearchBar searchImages={searchImages} />
            <div className="imagesContainer">
                {imageList.length > 0 &&
                    imageList.map((image, i) => {
                        return <ImageCard key={i} src={image.media.m} />;
                    })}
            </div>
        </>
    );
};

export default Flicker;
