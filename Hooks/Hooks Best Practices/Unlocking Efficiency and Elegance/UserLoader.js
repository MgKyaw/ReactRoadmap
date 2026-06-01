// Optimize useEffect with Dependency Arrays:

function UserLoader({ userId }) {
  useEffect(() => {
    // Fetch user data based on userId
    fetchUser(userId);
  }, [userId]);

  // ...
}
