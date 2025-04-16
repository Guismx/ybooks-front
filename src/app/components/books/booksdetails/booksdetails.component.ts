import { Component, inject } from '@angular/core';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booksdetails',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booksdetails.component.html',
  styleUrl: './booksdetails.component.scss'
})
export class BooksdetailsComponent {

  book: Book = new Book(0, "");
  router = inject(ActivatedRoute);
  router2 = inject(Router);


  constructor(){
    let id = this.router.snapshot.params['id']
    if (id > 0 ) {
      this.findById(id);
    }
  }

  findById(id: number) {
    let bookRetornado: Book = new Book(id, "Senhor dos anéis");
    this.book = bookRetornado;
  }

  save () {
    if(this.book.id > 0 ){
      alert("Livro editado com sucesso!");
      this.router2.navigate(['admin/books'], {state: { bookEditado: this.book }})

    } else {
      alert("Livro salvo com sucesso!");
      this.router2.navigate(['admin/books'],  {state: { bookNovo: this.book }})
    }

  }

}
