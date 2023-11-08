import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
export interface PeriodicElement {
  position: number;
  taskName: string;
  assignee: string;
  priority: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    taskName: 'Elit est nibh cras phasellus scelerisque orci',
    assignee: 'Artur',
    priority: 'Medium',
  },
  {
    position: 2,
    taskName: 'Urna nibh eget facilisis egestas mi',
    assignee: 'Marta',
    priority: 'High',
  },
  {
    position: 3,
    taskName: 'Elit est nibh cras phasellus scelerisque orci',
    assignee: 'Artur',
    priority: 'Medium',
  },
  {
    position: 4,
    taskName: 'Urna nibh eget facilisis egestas mi',
    assignee: 'Marta',
    priority: 'High',
  },
];
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;

  displayedColumns: string[] = ['position', 'taskName', 'assignee', 'priority'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
