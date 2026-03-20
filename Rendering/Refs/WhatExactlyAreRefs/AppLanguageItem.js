const languages = ['Scala', 'Java', 'Ruby', 'Perl', 'C#', 'Swift'];

function LanguageItem({children}) {
   return (
      <li>{children}</li>
   );
}

function App() {
   const [list, setList] = useState([]);

   function onClick() {
      const index = Math.floor(Math.random() * languages.length);
      setList([...list, languages[index]]);
   }

   return (
      <>
         <ol>
            {list.map(item => (
               <LanguageItem>{item}</LanguageItem>
            ))}
         </ol>
         <button onClick={onClick}>Add new language randomly</button>
      </>
   );
}
