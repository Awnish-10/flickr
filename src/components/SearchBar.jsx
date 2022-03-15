import React, { useState } from "react";

const SearchBar = ({ searchImages }) => {
    const [keyword, setKeyword] = useState("");
    const searchSubmitHandler = (e) => {
        console.log("submitted");
        e.preventDefault();
        searchImages(keyword);
    };
    return (
        <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
                data-testid="searchInput"
                type="text"
                placeholder="Search an Image ..."
                onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchBar;
