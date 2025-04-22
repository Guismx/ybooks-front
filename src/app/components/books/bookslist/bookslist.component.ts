import { Component, inject } from '@angular/core';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { asapScheduler } from 'rxjs';

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

  //Para cada método que esta no backend de books, implementar ele aqui
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
  deleteBook(book: Book): void {
    if (confirm("Tem certeza que deseja deletar este registro?")) {
      this.bookService.deleteBook(book.id).subscribe({
        next: (mensagem: string) => {
          alert(mensagem);
          this.listAll();
        },        
        error: (erro) => {
          console.error('Erro completo ao deletar livro:', erro);
          alert(erro.error || 'Erro ao deletar livro');
        }
        
      });
    }
  }
}
