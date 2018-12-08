import { EditTodoAction, RemoveTodoAction } from './../model/todo.actions';
import { AppState } from './../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';
import { ChangeTodoAction } from '../model/todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
@Input() todo: Todo;
@ViewChild('txtInputFisico') txtInputFisico: ElementRef ;
chkField: FormControl;
txtInput: FormControl;
editando: boolean;

  constructor(private store: Store<AppState>) {
    console.log(this.todo);
   }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(data => {
      const accion = new ChangeTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }
  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();

    }, 1 );
  }
  endEdit(id: number) {
    const accion = new EditTodoAction(id, this.txtInput.value);
    this.store.dispatch(accion);
    this.editando = false;
  }
  delete() {
    const accion = new RemoveTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
