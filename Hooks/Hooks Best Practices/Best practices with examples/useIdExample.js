import { useId } from 'react'

const App =()=>{
const id = useId()

return (
  <input type="text" id={id} />
  )
}