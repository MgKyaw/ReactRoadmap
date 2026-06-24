import { makeAutoObservable } from 'mobx';
type Item = {
  id: string;
  title: string;
};
export class TodoStore {
  items: Item[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addItem = (title: string) => {
    this.items = this.items.concat({ id: Date.now().toString(), title })
  };
  removeItem = (id: string) => {
    this.items = this.items.filter(item => item.id !== id);
  };
}