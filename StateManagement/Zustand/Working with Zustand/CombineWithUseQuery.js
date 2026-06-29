const useFilterStore = create((set) => ({
  applied: [],
  actions: {
    addFilter: (filter) =>
      set((state) => ({ applied: [...state.applied, filter] })),
  },
}))

export const useAppliedFilters = () =>
  useFilterStore((state) => state.applied)

export const useFiltersActions = () =>
  useFilterStore((state) => state.actions)

// 🚀 combine the zustand store with a query
export const useFilteredTodos = () => {
  const filters = useAppliedFilters()
  return useQuery({
    queryKey: ['todos', filters],
    queryFn: () => getTodos(filters),
  })
}