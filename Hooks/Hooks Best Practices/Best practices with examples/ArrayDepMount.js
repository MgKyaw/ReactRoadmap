// const ArrayDepMount = () => {
//   const [randomNumber, setRandomNumber] = useState(0)
//   const [effectLogs, setEffectLogs] = useState([])

//   useEffect(
//     () => {
//       setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
//     },
//     []
//   )

//   return (
//     <div>
//       <h1>{randomNumber}</h1>
//       <button
//         onClick={() => {
//           setRandomNumber(Math.random())
//         }}
//       >
//         Generate random number!
//       </button>
//       <div>
//         {effectLogs.map((effect, index) => (
//           <div key={index}>{'🍔'.repeat(index) + effect}</div>
//         ))}
//       </div>
//     </div>
//   )
// }

// ArrayDepMount 2

const ArrayDepMount = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [effectLogs, setEffectLogs] = useState([])

  useEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },
    []
  )

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random())
        }}
      >
        Generate random number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'🍔'.repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  )
}