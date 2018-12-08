import { filtrosValidos } from './filter.action';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'pipeTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    console.log(todos);
    console.log(filtro);
    switch (filtro) {
      case 'todos':
      return todos;
      case 'completados':
      return todos.filter( todo => todo.completado );
      case 'pendientes':
      return todos.filter( todo => !todo.completado );
      default:
      return todos;
    }

  }

}
