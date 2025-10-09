import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../../../interfaces/Task.interface';
import { DatePipe } from '@angular/common';
import { CardsComponent } from '../../cards/cards.component';

@Component({
  selector: 'app-task',
  imports: [
    DatePipe,
    CardsComponent
  ],
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
