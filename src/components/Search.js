import React from "react";
import { MdSearch } from "react-icons/md";

export default function ({ handleSearch }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        className="search-bar"
        placeholder="Type to Search Note"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
