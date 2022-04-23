import { Button } from "@mui/material";
import "../Assets/Css/Admin.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import { NavLink } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

export function Admin() {
  return (
    <div id="admin">
      <div>
        <Button>
          <NavLink to="/">
            <LineWeightIcon fontSize="large" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/history">
            <AssignmentIcon fontSize="large" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/message">
            <EmailIcon fontSize="large" />
          </NavLink>
        </Button>
      </div>
      <div>
        <Button>
          <AccountCircleIcon fontSize="large" />
        </Button>

        <Button
          onClick={() => {
            window.location.href = "/";
            delete localStorage.auth;
          }}
        >
          <LockIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
}
