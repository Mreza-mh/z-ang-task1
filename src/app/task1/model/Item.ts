export interface Item {
  id: number;
  name: string;
  parent: number | null;
  children: Item[];
}