import { Outlet, Link } from "react-router";
import { Button } from "@mui/material";

export default function Layout() {
  return (
    <div>
      <nav>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/localStorage">Local Storage</Link>
        </Button>
        <Button>
          <Link to="/portfolio">Portfolio</Link>
        </Button>
        <Button>
          <Link to="/aboutMe">About Me</Link>
        </Button>
      </nav>

      <Outlet />

    </div>
  );
}
