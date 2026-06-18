import { useNavigate } from "react-router";

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    performLogout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}