import "../Assets/Css/Navbar.css";
import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import Input from "@mui/material/Input";

export function Navbar() {
  return (
    <nav id="nav">
      <div id="nav-menu">
        <Button>
          <ListIcon fontSize="large" />
        </Button>
        <p>Menu</p>
      </div>

      <div>
        <Input autoComplete="off" placeholder="Nima Izlayabsiz" />
      </div>
    </nav>
  );
}
