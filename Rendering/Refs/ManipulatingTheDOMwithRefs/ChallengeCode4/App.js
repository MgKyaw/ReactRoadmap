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

// My Solution code

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const chemistsListItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const others = people.filter(person =>
    person.profession !== 'chemist'
  );
  const otherListItems = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <>
      <article>
        <h1>Chemists</h1>
        <ul>{chemistsListItems}</ul>
      </article>
      <article>
        <h1>Everyone Else</h1>
        <ul>{otherListItems}</ul>
      </article>
    </>
  );
}
