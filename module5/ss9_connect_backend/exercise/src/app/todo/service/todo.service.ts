import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  deleteTodo(id: number) {
    return this.httpClient.delete<Todo>('http://localhost:3000/todo/' + id)
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todo')
  }

  create(todo: Todo) {
    return this.httpClient.post<Todo>('http://localhost:3000/todo', todo)
  }

  findById(id: number) {
    return this.httpClient.get<Todo>('http://localhost:3000/todo/' + id)
  }

  edit(id: number, todo: Todo) {
    return this.httpClient.patch<Todo>('http://localhost:3000/todo/' + id, todo)
  }
}
