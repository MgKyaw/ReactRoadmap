import shallow from 'zustand/shallow'

// ⬇️ much better, because optimized
const { bears, fish } = useBearStore(
  (state) => ({ bears: state.bears, fish: state.fish }),
  shallow,
)