import { Button } from "@mui/material";
import "../Assets/Css/Admin.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import EmailIcon from "@mui/icons-material/Email";
import LineWeightIcon from "@mui/icons-material/LineWeight";

export function Admin() {
  return (
    <div id="admin">
      <div>
        <Button>
          <LineWeightIcon fontSize="large" />
        </Button>
        <Button>
          <AutoGraphIcon fontSize="large" />
        </Button>
        <Button>
          <EmailIcon fontSize="large" />
        </Button>
      </div>
      <div>
        <Button>
          <AccountCircleIcon fontSize="large" />
        </Button>

        <Button>
          <LockIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
}
