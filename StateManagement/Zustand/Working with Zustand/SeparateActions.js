const useBearStore = create((set) => ({
  bears: 0,
  fish: 0,
  // ⬇️ separate "namespace" for actions
  actions: {
    increasePopulation: (by) =>
      set((state) => ({ bears: state.bears + by })),
    eatFish: () => set((state) => ({ fish: state.fish - 1 })),
    removeAllBears: () => set({ bears: 0 }),
  },
}))

export const useBears = () => useBearStore((state) => state.bears)
export const useFish = () => useBearStore((state) => state.fish)

// 🎉 one selector for all our actions
export const useBearActions = () =>
  useBearStore((state) => state.actions)