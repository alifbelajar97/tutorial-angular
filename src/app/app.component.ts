import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './mocks/dummy-user';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find(user => user.id == this.selectedUserId)!;
  }

  onSelect(id: any){
    this.selectedUserId = id;
  }
}
