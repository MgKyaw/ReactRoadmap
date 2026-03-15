// import SearchButton from './SearchButton.js';
// import SearchInput from './SearchInput.js';

// export default function Page() {
//   return (
//     <>
//       <nav>
//         <SearchButton />
//       </nav>
//       <SearchInput />
//     </>
//   );
// }

// Add Solution Code
import { useRef } from 'react';
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function Page() {
  const inputRef = useRef(null);
  return (
    <>
      <nav>
        <SearchButton onClick={() => {
          inputRef.current.focus();
        }} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}


// // Wrong my Solution code for the other challenge code

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const chemistsListItems = chemists.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   const others = people.filter(person =>
//     person.profession !== 'chemist'
//   );
//   const otherListItems = others.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <>
//       <article>
//         <h1>Chemists</h1>
//         <ul>{chemistsListItems}</ul>
//       </article>
//       <article>
//         <h1>Everyone Else</h1>
//         <ul>{otherListItems}</ul>
//       </article>
//     </>
//   );
// }

// Solution code
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <h2>Chemists</h2>
//       <ul>
//         {chemists.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//       <h2>Everyone Else</h2>
//       <ul>
//         {everyoneElse.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </article>
//   );
// }

// Better solution with ListSection component function
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// function ListSection({ title, people }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>
//         {people.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </>
//   );
// }

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListSection
//         title="Chemists"
//         people={chemists}
//       />
//       <ListSection
//         title="Everyone Else"
//         people={everyoneElse}
//       />
//     </article>
//   );
// }

// Solution Code 3
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// let chemists = [];
// let everyoneElse = [];
// people.forEach(person => {
//   if (person.profession === 'chemist') {
//     chemists.push(person);
//   } else {
//     everyoneElse.push(person);
//   }
// });

// function ListSection({ title, people }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>
//         {people.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </>
//   );
// }

// export default function List() {
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListSection
//         title="Chemists"
//         people={chemists}
//       />
//       <ListSection
//         title="Everyone Else"
//         people={everyoneElse}
//       />
//     </article>
//   );
// }
