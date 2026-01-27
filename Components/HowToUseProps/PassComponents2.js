const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => (
  <p className="fat">{user.biography}</p>
);


// Often this approach is used when having a surrounding layout component 
// which takes multiple components as content with props. 
// Now you can exchange the Avatar or Biography components dynamically 
// with other components such as:
const AvatarSquare = ({ user }) => (
  <img className="square" alt="avatar" src={user.avatarUrl} />
);

const BiographyItalic = ({ user }) => (
  <p className="italic">{user.biography}</p>
);
