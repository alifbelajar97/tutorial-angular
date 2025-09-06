import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../mocks/dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/images/' + this.avatar
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
