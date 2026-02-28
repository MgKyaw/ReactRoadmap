// function Avatar(props) {
//   let person = props.person;
//   let size = props.size;

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

// export default function Profile() {
//   return (
//     <Avatar />
//   );
// }

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}