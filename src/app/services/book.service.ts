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
}
