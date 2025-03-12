import { Component } from '@angular/core';
import { Item } from './model/Item';
import { list } from './data/child-parent';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component {
  tables: Item[][] =[];

  expandedItems: Map<number, { isExpanded: boolean; level: number }> =
    new Map();

  constructor() {
    this.tables.push(list.filter((item) => item.parent === null));
  }

  handleToggle(item: Item, level: number): void {
    if (item.children && item.children.length > 0) {
      const currentState = this.expandedItems.get(item.id);
      const isExpanded = currentState ? currentState.isExpanded : false;

      this.closeOtherExpandedItems(level);

      this.expandedItems.set(item.id, { isExpanded: !isExpanded, level });

      if (isExpanded) {// -> close
        this.tables = this.tables.slice(0, level + 1);
        this.clearExpandedState(item);
      } else {// -> open
        this.tables = this.tables.slice(0, level + 1);

        if (this.tables.length <= level + 1) {
          this.tables.push([]);
        }

        this.tables[level + 1] = item.children;
      }
    }
    console.log(this.tables);
  }

  isExpanded(itemId: number): boolean {
    return !!this.expandedItems.get(itemId)?.isExpanded;
  }

  getItemLevel(itemId: number): number | null {
    return this.expandedItems.get(itemId)?.level ?? null;
  }

  clearExpandedState(item: Item): void {
    this.expandedItems.delete(item.id);
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        this.clearExpandedState(child);
      }
    }
  }

  closeOtherExpandedItems(level: number): void {
    this.expandedItems.forEach((value, key) => {
      if (value.level >= level && value.isExpanded) {
        this.expandedItems.set(key, { ...value, isExpanded: false });
      }
    });
  }
}
