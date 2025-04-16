import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario!: string;
  senha!: string;

  router = inject(Router);

  logar() {
    console.log("Usuário:", this.usuario, "Senha:", this.senha); // Depuração
    if(this.usuario == "admin" && this.senha == "admin") {
      this.router.navigate(['admin/books'])
    } else
    alert("Usuario ou senha inválidos.")
  }

}
