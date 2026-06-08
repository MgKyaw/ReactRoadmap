const TextField =()=>{
  return(
      <>
        <label htmlFor="name" /> 
        <input type="text" id="name"/>
      </>
  )
}

const App=()=>{
  return (
    <div className="inputs">
      <TextField />
      <TextField />
    </div>
  )
}