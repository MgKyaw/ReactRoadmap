import { useAtom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

// Create a new atom with an immer-based write function
const countAtom = atomWithImmer(0)

const Counter = () => {
  const [count] = useAtom(countAtom)
  return (
    <div>count: {count}</div>
  )
}

const Controls = () => {
  // setCount === update: (draft: Draft<Value>) => void
  const [, setCount] = useAtom(countAtom)
  const increment = () => setCount((c) => (c = c + 1))
  return (
    <button onClick={increment}>+1</button>
  )
}