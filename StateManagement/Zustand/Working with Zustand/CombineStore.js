const currentUser = useCredentialsStore((state) => state.currentUser)
const user = useUsersStore((state) => state.users[currentUser])