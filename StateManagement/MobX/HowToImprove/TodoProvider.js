import React, { 
  createContext,
  FC,
  useCallback,
  useContext,
  useState
} from 'react';
type Item = {
  id: string;
  title: string;
};
type TodoContextValue = {
  items: Item[];
  addItem: (title: string) => void;
  removeItem: (id: string) => void;
};
export const TodoContext = createContext<TodoContextValue>(null!);
export const TodoProvider: FC<{}> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = useCallback(
    (title: string) => {
      setItems(items.concat({ id: Date.now().toString(), title }));
    },
    [items],
  );
  const removeItem = useCallback(
    (id: string) => {
      setItems(items.filter(item => item.id !== id));
    },
    [items],
  );
  const value = { items, addItem, removeItem };
  return 
    <TodoContext.Provider value={value} >
      {children}
    </TodoContext.Provider>;
};
export const useTodo = () => useContext(TodoContext);
