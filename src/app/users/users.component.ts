import { Component } from '@angular/core';
import { UsersService } from '@app/firebase/users.service';

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private usersService: UsersService) {}

  usersList: any = [];

  // Obtenemos la Lista de Usuarios Registrados.
  ngOnInit(): void {
    this.usersService.getListUsers().subscribe((users) => (this.usersList = users));
  }
}
