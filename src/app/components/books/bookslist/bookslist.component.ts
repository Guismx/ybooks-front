import { Component, inject } from '@angular/core';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-bookslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss'
})
export class BookslistComponent {

  lista: Book[] = [];
  bookEdit: Book = new Book(0 , "");

  bookService = inject(BookService);

  constructor(){
    this.listAll();
  }

  listAll() {
    this.bookService.listAll().subscribe({
      next: lista => {
         this.lista = lista;
      },
      error: erro => {
        alert("Ocorreu um erro")
      }
    });
  

   


    let bookNovo = history.state.bookNovo;
    let bookEditado = history.state.bookEditado;

    if(bookEditado) {
      let indice = this.lista.findIndex(x => {return x.id == bookEditado.id})
      this.lista[indice] = bookEditado;
    }

    if(bookNovo) {
      bookNovo.id;
      this.lista.push(bookNovo);
    }
    
  }
  deletar(book: Book) {
    if (confirm("Tem certeza que deseja deletar este registro?")) {
      let indice = this.lista.findIndex(x => x.id === book.id); // ✅ Corrigido erro de fechamento de parênteses.
      if (indice !== -1) { // ✅ Adicionada verificação para evitar erro ao tentar remover item inexistente.
        this.lista.splice(indice, 1);
      }
    }
  }
}
