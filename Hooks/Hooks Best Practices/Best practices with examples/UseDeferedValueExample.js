import { useDeferredValue } from 'react'

const App =()=>{
const [valueToDefer, setValueToDefer] = useState("")
const deferredValue = useDeferredValue(valueToDefer)

return (
  <p>{deferredValue}</p>
  )
}