import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { BookslistComponent } from './components/books/bookslist/bookslist.component';
import { BooksdetailsComponent } from './components/books/booksdetails/booksdetails.component';
import { UserslistComponent } from './components/users/userslist/userslist.component';
import { UsersdetailsComponent } from './components/users/usersdetails/usersdetails.component';

export const routes: Routes = [
    //redireciona para tela de login quando não acessado nenhuma rota
    {path: "", redirectTo: "login", pathMatch: 'full'},
    //redireciona para a rota de login
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children: [
        {path: "books", component: BookslistComponent},
        {path: "books/new", component: BooksdetailsComponent},
        {path: "books/edit/:id", component: BooksdetailsComponent},
        {path: "users", component: UserslistComponent},
        {path: "users/new", component: UsersdetailsComponent},
        {path: "users/edit/:id", component: UsersdetailsComponent}
    ]}
];
