import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/home">
        {({ isPending }) => (
          <>Home {isPending && <span className="spinner">⏳</span>}</>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isPending }) => (
          <>About {isPending && <span className="spinner">⏳</span>}</>
        )}
      </NavLink>
    </nav>
  );
}