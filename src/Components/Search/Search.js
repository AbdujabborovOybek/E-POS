import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { acSearch } from "../../Reducer/Search";

export function Search() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(acSearch(e.target.search.value));
    e.target.search.value = "";

    setTimeout(() => {
      dispatch(acSearch(""));
    }, 5000);
  }

  return (
    <>
      <form id="serch-product" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
