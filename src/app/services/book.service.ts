import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../components/models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  http = inject(HttpClient);

  API = "http://localhost:8080/ybook/book";

  constructor() {
  }
  //Sempre que o retorno for String adicionar o responseType
  createBook(book: Book): Observable<string>{
    return this.http.post<string>(this.API+"/create", Book, {responseType: 'text' as 'json'})
  }

  updateBook(book: Book, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update"+id, book, {responseType: 'text' as 'json'});
  }

  deleteBook(id: number): Observable<string>{
      return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }
  
  listAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.API+"/listAll");
  }

  bookById(id: number): Observable<Book>{
    return this.http.get<Book>(this.API+"findbook"+id);
  }

  findByCategory(category: string): Observable<Book>{
    return this.http.get<Book>(this.API+"/findbycategory"+category);
  }

}
