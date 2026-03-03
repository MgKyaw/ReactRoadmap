import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   let imageSize = size < 90 ? 's' : 'b';
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, imageSize)}
//       alt={person.name}      
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={90}
//       person={{ 
//         name: 'Gregorio Y. Zara', 
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }

//// Add solution code for challenge code 2

// import { getImageUrl } from './utils.js';

// const ratio = window.devicePixelRatio;

// function Avatar({ person, size }) {
//   let thumbnailSize = 's';
//   if (size * ratio > 90) {
//     thumbnailSize = 'b';
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, thumbnailSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//       <Avatar
//         size={70}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//     </>
//   );
// }
