import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-booksdetails',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booksdetails.component.html',
  styleUrl: './booksdetails.component.scss'
})
export class BooksdetailsComponent {

  @Input("book") book: Book = new Book(0, "");
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  bookService = inject(BookService);


  constructor(){
    let id = this.router.snapshot.params['id']
    if (id > 0 ) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.bookService.bookById(id).subscribe({
      next: retorno => {
        this.book = retorno;
      },
      error: erro => {
        alert("Não foi possível encontrar o livro");
      }
    });
  }

  save() {
    if(this.book.id > 0 ){
      this.bookService.updateBook(this.book, this.book.id).subscribe({
        next: message => {
          return message;
        },
        error: erro => {
          alert("Não foi possível atualizar os dados do livro");
        }
      });
      this.router2.navigate(['admin/books'],  {state: { bookNovo: this.book }});
    } else {
      this.bookService.createBook(this.book).subscribe({
        next: message => {
          return message;          
        this.router2.navigate(['admin/books'],  {state: { bookNovo: this.book }});
        },
        error: erro => {
          alert("Não foi possível criar um novo livro");
        }
     })
    }
  }
}

// this.router2.navigate(['admin/books'],  {state: { bookNovo: this.book }})
