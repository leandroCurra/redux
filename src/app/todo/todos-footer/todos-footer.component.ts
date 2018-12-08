import { AppState } from './../../app.reducer';
import { filtrosValidos, SetFiltroAction } from './../../filter/filter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { ClearCompleteTodoAction } from '../model/todo.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {
  pendientes: number;
  filtros: string[] = ['todos' , 'completados' , 'pendientes'] ;
  selectedFilter: 'todos' | 'completados' | 'pendientes' ;
  constructor(private store: Store<AppState>) {
    store.subscribe(data => {
    this.selectedFilter = data.filtro;
    this.cuntPendding(data.todos);
    });
  }

  ngOnInit() {
  }

  cambiarFiltro(newFilter: filtrosValidos) {
    const accion = new SetFiltroAction( newFilter );
    this.store.dispatch(accion);

  }

  cuntPendding(todos: Todo[]) {
  this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  clearCompleted() {
    const accion = new ClearCompleteTodoAction();
    this.store.dispatch(accion);

  }

}
