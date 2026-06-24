// import { makeAutoObservable } from 'mobx';
// import React, { createContext, FC, useContext, useState } from 'react';
// type Item = {
//   id: string;
//   title: string;
// };
// export class TodoStore {
//   items: Item[] = [];
//   constructor() {
//     makeAutoObservable(this);
//   }
//   addItem = (title: string) => {
//     this.items = this.items.concat({ id: Date.now().toString(), title })
//   };
//   removeItem = (id: string) => {
//     this.items = this.items.filter(item => item.id !== id);
//   };
// }
// export const TodoContext = createContext<TodoStore>(null!);
// export const TodoProvider: FC<{}> = ({ children }) => {
//   const [store] = useState(new TodoStore());
//   return <TodoContext.Provider value={store}>{children}</TodoContext.Provider>;
// };
// export const useTodo = () => useContext(TodoContext);