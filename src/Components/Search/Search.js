import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

export function Search() {
  return (
    <>
      <form id="serch-product">
        <input type="text" placeholder="Search" />
        <button>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
