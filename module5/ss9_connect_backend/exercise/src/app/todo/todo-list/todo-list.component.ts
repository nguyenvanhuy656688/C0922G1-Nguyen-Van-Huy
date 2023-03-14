import {Component, OnInit} from '@angular/core';
import {Todo} from "../model/todo";
import {TodoService} from "../service/todo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  deleteTodo: Todo = {};
  todo: Todo

  createForm = new FormGroup({
    id: new FormControl(),
    status: new FormControl()
  })
  editForm = new FormGroup({
    id: new FormControl(),
    status: new FormControl()
  });

  constructor(private todoService: TodoService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data =>{
      const id = data.get('id')
      if (id != null){
        this.getTodo(+id)
      }
    })
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(data => {
      this.todoList = data
    })
  }


  delete() {
    this.todoService.deleteTodo(this.deleteTodo.id).subscribe(data => {
      alert("đã xóa thành công")
      this.ngOnInit()
    })

  }

  create() {
    this.todo = this.createForm.value
    let temp = this.todoService.create(this.todo).subscribe(data => {
      if (temp != null) {
        alert('thêm mới thành công')
      } else alert('thêm mới không thành công')
    })
  }

  edit() {
    this.todo = this.editForm.value
    let temp = this.todoService.edit(this.todo.id , this.todo).subscribe(data => {
      if (temp != null) {
        alert('sửa thành công')
      } else alert(' không thành công')
    })


  }

  private getTodo(id: number) {
    return this.todoService.findById(id).subscribe(data =>{
      this.editForm.patchValue(data)
    })

  }
}
