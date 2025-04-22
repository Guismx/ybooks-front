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

   listAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.API+"/listAll");
  }


  //Sempre que o retorno for String adicionar o responseType
  deleteBook(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }
}
