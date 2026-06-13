interface User {
  username: string;
}

function Stats({ user }: { user: User | null }) {
  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });


  return (
    <div style={{ padding: 20 }}>
      <h2>Stats View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Login({
  onLogin,
}: {
  onLogin: React.Dispatch<React.SetStateAction<User | null>>;
}) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  function handleLogin() {
    // For demonstration purposes only. Never use these checks in production!
    // Use a proper authentication implementation
    if (creds.username === "admin" && creds.password === "123") {
      onLogin({ username: creds.username });
      navigate("/stats");
    }
  }
  return (
    <div style={{ padding: 10 }}>
      <br />
      <span>Username:</span>
      <br />
      <input
        type='text'
        onChange={(e) =>
          setCreds({ ...creds, username: e.target.value })
        }
      />
      <br />
      <span>Password:</span>
      <br />
      <input
        type='password'
        onChange={(e) =>
          setCreds({ ...creds, password: e.target.value })
        }
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function AppLayout() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  function logOut() {
    setUser(null);
    navigate("/");
  }
  return (
    <>
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
        <span> | </span>
        {user && (
          <NavLink to='/stats' style={{ padding: 5 }}>
            Stats
          </NavLink>
        )}
        {!user && (
          <NavLink to='/login' style={{ padding: 5 }}>
            Login
          </NavLink>
        )}
        {user && (
          <span
            onClick={logOut}
            style={{ padding: 5, cursor: "pointer" }}
          >
            Logout
          </span>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=':slug' element={<Post />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login onLogin={setUser} />} />
        <Route path='/stats' element={<Stats user={user} />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;