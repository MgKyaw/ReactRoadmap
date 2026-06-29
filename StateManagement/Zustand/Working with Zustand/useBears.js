// ⬇️ not exported, so that no one can subscribe to the entire store
const useBearStore = create((set) => ({
  bears: 0,
  fish: 0,
  increasePopulation: (by) =>
    set((state) => ({ bears: state.bears + by })),
  eatFish: () => set((state) => ({ fish: state.fish - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

// 💡 exported - consumers don't need to write selectors
export const useBears = () => useBearStore((state) => state.bears)