// app/routes/dashboard.tsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}