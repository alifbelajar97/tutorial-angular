import { Component, Input } from '@angular/core';
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
}
