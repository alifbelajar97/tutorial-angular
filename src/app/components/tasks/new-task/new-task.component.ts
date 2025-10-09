import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task.model';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true}) userId!: string;
  
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taksService = inject(TaskService);

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
  }
}
