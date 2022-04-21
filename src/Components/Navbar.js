import "../Assets/Css/Navbar.css";
import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { acSearch } from "../Redux/Actions/acSearch";

export function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav id="nav">
      <div id="nav-menu">
        <Button>
          <ListIcon fontSize="large" />
        </Button>
        <p>UITC</p>
      </div>

      <div id="nav-search">
        <Input
          autoComplete="off"
          placeholder="Name or Code"
          onChange={(e) => dispatch(acSearch(e.target.value))}
        />
        <Button>
          <SearchIcon fontSize="large" />
        </Button>
      </div>
    </nav>
  );
}
