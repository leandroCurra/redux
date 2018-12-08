import { AgregarTodoAction } from './../model/todo.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styles: []
})
export class TodosAddComponent implements OnInit {
txtInput: FormControl;
  constructor(private store:Store<AppState>) {
        this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  public agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    const accion = new AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(accion);
    console.log(this.txtInput.valid);
    console.log(this.txtInput.value);
  }

}
