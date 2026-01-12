// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// Step 2: Read props inside the child component 
// function Avatar({ person, size = 100 }) {
function Avatar(props) {
  let person = props.person;
  let size = props.size;

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

// Step 1: Pass props to the child component

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
