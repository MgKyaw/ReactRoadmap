// const TextField =()=>{
//   return(
//       <>
//         <label htmlFor="name" /> 
//         <input type="text" id="name"/>
//       </>
//   )
// }

const App=()=>{
  return (
    <div className="inputs">
      <TextField />
      <TextField />
    </div>
  )
}

const TextField =()=>{
const id = useId();
  return(
      <>
        <label htmlFor={id} /> 
        <input type="text" id={id}/>
      </>
  )
}