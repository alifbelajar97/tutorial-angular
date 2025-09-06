import { Component, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../../mocks/dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return  'assets/images/' + this.avatar();
  })
  // get imagePath() {
  //   return 'assets/images/' + this.avatar
  // }

  onSelectUser() { }
}
