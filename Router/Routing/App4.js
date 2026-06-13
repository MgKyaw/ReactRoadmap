function Routes() {
  const element = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/posts",
      element: <Posts/>,
      children: [
        { index: true, element: <PostLists/> },
        { path: ":slug", element: <Post/> }
      ],
    },
    { path: "/about", element: <About/> },
    { path: "*", element: <NoMatch/>}
  ]);
  return element;
}

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <NavLink
          to='/'
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Home
        </NavLink>
        <NavLink
          to='/posts'
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Posts
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          About
        </NavLink>
      </nav>
      <Routes/>
    </Router>
  );
}