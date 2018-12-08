import { Todo } from './model/todo.model';
import { Acciones, AGREGAR_TODO, AgregarTodoAction, TOOGLE_TODO, EDIT_TODO, REMOVE_TODO, TOOGLE_ALL, CLEAR_ALL_COMPLETED } from './model/todo.actions';
const todo1 = new Todo('rendir las materias');
const todo2 = new Todo('Acomodar mis cuentas');
const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, acciones: Acciones): Todo[] {
    switch (acciones.type) {
        case AGREGAR_TODO:
        const todo = new Todo(acciones.texto);
        return [...state, todo];
        case TOOGLE_TODO:
        return state.map( todoEdit => {
            if (todoEdit.id === acciones.id ) {
                return{
                    ...todoEdit,
                    completado: !todoEdit.completado
                };
            } else {
                return todoEdit;
            }
        });
        case EDIT_TODO:
        return state.map(todoEdit => {
            if ( todoEdit.id === acciones.id) {
                return {
                    ...todoEdit,
                    texto: acciones.text
                };
            } else {
                return todoEdit;
            }
        });
        case REMOVE_TODO:
        return state.filter(todoEdit => todoEdit.id !== acciones.id );
        case TOOGLE_ALL:
        return state.map(todoEdit => {
            return{
            ...todoEdit,
            completado: acciones.completado
            };
        });
        case CLEAR_ALL_COMPLETED:
        return state.filter(todosEdit => !todosEdit.completado);
        default:
        return state;
    }

}