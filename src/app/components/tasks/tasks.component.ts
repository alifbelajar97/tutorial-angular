import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges{
  @Input({ required: true }) name!: any;
  @Input({ required: true }) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master ANgular',
      summary: 'Lorem Ipsum set dolor amet',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master ANgular',
      summary: 'Lorem Ipsum set dolor amet',
      dueDate: '2025-12-31'
    },
     {
      id: 't3',
      userId: 'u3',
      title: 'Master ANgular',
      summary: 'Lorem Ipsum set dolor amet',
      dueDate: '2025-12-31'
    },
  ]

  get selectUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changeschanges', changes)
  }
}
