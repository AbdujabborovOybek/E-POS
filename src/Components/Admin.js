import { Button } from "@mui/material";
import "../Assets/Css/Admin.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

export function Admin() {
  return (
    <div id="admin">
      <Button>
        <AccountCircleIcon fontSize="large" />
      </Button>

      <Button>
        <LockIcon fontSize="large" />
      </Button>
    </div>
  );
}
