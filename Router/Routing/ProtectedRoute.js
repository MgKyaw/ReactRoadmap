function ProtectedRoute({ user, children }:{
  user: User;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return children;
}