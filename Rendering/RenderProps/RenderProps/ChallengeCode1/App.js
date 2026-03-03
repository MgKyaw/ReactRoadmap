// import { getImageUrl } from './utils.js';

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

import { getImageUrl } from './utils.js';

function Profile({title, src, width, height, profession, awards, discovered})
{
  const awardsCount = awards.length;
  const awardsString = '(' + awards.join(',') + ')';
  
  return (
    <section className="profile">
        <h2>{title}</h2>
        <img
          className="avatar"
          src={getImageUrl(src)}
          alt={title}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awardsCount} </b> 
            {awardsString}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  const profile1Awards = ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']
  const profile2Awards = ['Miyake Prize for geochemistry', 'Tanaka Prize'];
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile title='Maria Skłodowska-Curie' src='szV5sdG' width='70' height='70' profession='physicist and chemist' awards={profile1Awards} discovered = 'polonium (chemical element)' ></Profile>
      <Profile title='Katsuko Saruhashi' src='YfeOqp2' width='70' height='70' profession='geochemist' awards={profile2Awards} discovered = 'a method for measuring carbon dioxide in seawater' ></Profile>
    </div>
  );
}

// Add solution code

// import { getImageUrl } from './utils.js';

// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 70
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li><b>Profession:</b> {profession}</li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal'
//         ]}
//       />
//       <Profile
//         imageId='YfeOqp2'
//         name='Katsuko Saruhashi'
//         profession='geochemist'
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]}
//       />
//     </div>
//   );
// }

// // Solution Code 2
// import { getImageUrl } from './utils.js';

// function Profile({ person, imageSize = 70 }) {
//   const imageSrc = getImageUrl(person)

//   return (
//     <section className="profile">
//       <h2>{person.name}</h2>
//       <img
//         className="avatar"
//         src={imageSrc}
//         alt={person.name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li>
//           <b>Profession:</b> {person.profession}
//         </li>
//         <li>
//           <b>Awards: {person.awards.length} </b>
//           ({person.awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {person.discovery}
//         </li>
//       </ul>
//     </section>
//   )
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile person={{
//         imageId: 'szV5sdG',
//         name: 'Maria Skłodowska-Curie',
//         profession: 'physicist and chemist',
//         discovery: 'polonium (chemical element)',
//         awards: [
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal'
//         ],
//       }} />
//       <Profile person={{
//         imageId: 'YfeOqp2',
//         name: 'Katsuko Saruhashi',
//         profession: 'geochemist',
//         discovery: 'a method for measuring carbon dioxide in seawater',
//         awards: [
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ],
//       }} />
//     </div>
//   );
// }

// //utils.js
// export function getImageUrl(imageId, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     size +
//     '.jpg'
//   );
// }
