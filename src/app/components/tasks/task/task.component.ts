import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../../../interfaces/Task.interface';
// import { type Task } from Artinya, kamu hanya mengimpor tipe data (Task) tanpa mengimpor nilai/objek/kelas/fungsi yang ada di runtime.

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() onComplete = new EventEmitter<string>();

  onCompleteTask() {
    this.onComplete.emit(this.task.id);
  }
}
