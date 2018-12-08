import { AppState } from './app.reducer';
import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filter/filter.action';
import { todoReducer } from './todo/todo-reducer';
import { filtroReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
};

