import { getImageUrl } from './utils.js';

function Profile({name, imageId, profession, awards, discovered}) {
  const count = awards.length;
  
  return (
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {count} </b> 
            ({awards.join(',')})
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
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name='Maria Skłodowska-Curie' 
        imageId='szV5sdG' 
        profession='physicist and chemist'
        awards = {["Nobel Prize in Physics", "Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"]}
        discovered='polonium (chemical element)'
        >
      </Profile>
      <Profile 
        name='Katsuko Saruhashi' 
        imageId='YfeOqp2' 
        profession='geochemist'
        awards = {["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered='a method for measuring carbon dioxide in seawater'
        >
      </Profile>
    </div>
  );
}
