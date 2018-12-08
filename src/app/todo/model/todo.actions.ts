import { Action } from '@ngrx/store';
export const AGREGAR_TODO = '[TODO]  Agregar Todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const REMOVE_TODO = '[TODO] Remove todo';
export const TOOGLE_ALL = '[TODO] Toogle All';
export const CLEAR_ALL_COMPLETED = '[TODO] Clear All';
export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO ;
    constructor(public texto: string) {}
}
export class ChangeTodoAction implements Action {
    readonly type = TOOGLE_TODO ;
    constructor(public id: number) {}
}
export class ToogleAllTodoAction implements Action {
    readonly type = TOOGLE_ALL ;
    constructor(public completado: boolean) {}
}
export class EditTodoAction implements Action {
    readonly type = EDIT_TODO ;
    constructor(public id: number, public text: string) {}
}
export class RemoveTodoAction implements Action {
    readonly type = REMOVE_TODO ;
    constructor(public id: number) {}
}
export class ClearCompleteTodoAction implements Action {
    readonly type = CLEAR_ALL_COMPLETED ;
    constructor() {}
}
export type Acciones = AgregarTodoAction |
                    ChangeTodoAction |
                    EditTodoAction |
                    RemoveTodoAction |
                    ToogleAllTodoAction |
                    ClearCompleteTodoAction;
