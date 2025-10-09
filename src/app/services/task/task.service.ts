import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { NewTask } from '../../components/tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
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
  constructor() { }

  getUserTask(userId: string){
    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(taskData: NewTask, userId: string){
      this.tasks.unshift({ 
      id: new Date().getTime().toString(),
      title: taskData.title,
      dueDate: taskData.date,
      summary: taskData.summary,
      userId: userId
    });
  }

  removeTask(id: any){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
