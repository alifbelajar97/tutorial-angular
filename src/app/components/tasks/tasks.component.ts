import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task.model';
import { Task } from '../../interfaces/Task.interface';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges {
  @Input({ required: true }) name!: any;
  @Input({ required: true }) userId!: string;
  isNewTask: boolean = false;
  selectUserTask: any;
  private taskServices = Inject(TaskService);

  
  constructor(
    private taksService: TaskService
  ){ }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changeschanges', changes)
  }

  onComplete(id: string) {
    this.taksService.removeTask(id)
  }

  onStartAddTask() {
    this.isNewTask = true;
  }

  onCancelAddTask() {
    this.isNewTask = false;
  }

  add(e: NewTask) {
    this.taskServices.addTask(e, this.userId)
  }
}
