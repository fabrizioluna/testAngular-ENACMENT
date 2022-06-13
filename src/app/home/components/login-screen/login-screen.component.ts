import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/firebase/auth.service';

interface Errors {
  description: string;
}

@Component({
  selector: 'login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  constructor(private authService: AuthService) {}

  errors: Errors[] = [];
  showMultiplesComponent: boolean = false;
  usernameToShow: string = '';
  userId: string = '';

  async authenticateUser(username: string, password: string) {
    // Reseteamos la variable para evitar multiples
    // mensajes de error.

    this.errors = [];

    // Verificamos que los inputs no esten vacios
    // o que no tenga el tamaño de +5 caracteres.

    if (username.trim().length < 5)
      this.errors = [...this.errors, { description: 'El nombre de usuario tiene que ser minimo 5 caracteres.' }];
    if (password.trim().length < 5)
      return (this.errors = [...this.errors, { description: 'La contraseña tiene que ser minimo 5 caracteres.' }]);

    const { user, error, idUser } = await this.authService.loginUser(username, password);
    if (error.length > 1) return (this.errors = [...this.errors, { description: error }]);

    // Si el auth está correcto... entonces
    // habilitamos el componente de multiples.

    return (this.showMultiplesComponent = true), (this.usernameToShow = user), (this.userId = idUser);
  }

  ngOnInit(): void {}
}
