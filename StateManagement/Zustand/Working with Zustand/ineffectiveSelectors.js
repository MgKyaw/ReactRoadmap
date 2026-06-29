// 🚨 selector returns a new Object in every invocation
const { bears, fish } = useBearStore((state) => ({
  bears: state.bears,
  fish: state.fish,
}))

// 😮 so these two are equivalent
const { bears, fish } = useBearStore()