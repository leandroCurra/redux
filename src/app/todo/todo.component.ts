import { AppState } from './../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToogleAllTodoAction } from './model/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
completado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAll() {
    this.completado = !this.completado;
    const accion = new ToogleAllTodoAction(this.completado);
    this.store.dispatch(accion);

  }

}
