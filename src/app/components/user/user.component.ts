import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../mocks/dummy-user';
import { User } from '../../interfaces/user.interface';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User; 
  @Output() select = new EventEmitter<User>();
  // select = output<string>();

  get imagePath() {
    return 'assets/images/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}
