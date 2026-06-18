import { useNavigation, Outlet } from "react-router";

export default function Root() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.state !== "idle");

  return (
    <div>
      {isNavigating && <div className="spinner">Loading...</div>}
      <Outlet />
    </div>
  );
}