function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
