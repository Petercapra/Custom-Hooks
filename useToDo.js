
import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

 //el estado inicial del state
 const inicialState = [];

 //funcion que inicializa el useReducer
 const init = () => {
 return JSON.parse(localStorage.getItem('toDos')) || [];
 }

export const useToDo = () => {

    const [toDos, dispatch] = useReducer(todoReducer, inicialState, init)

    useEffect(() => {
      localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos])


    const handleNewToDo = (nuevotoDo) => {
        const action = {
            type: 'Agregar un nuevo toDo',
            payload: nuevotoDo,
        }

        dispatch(action);
    }

    const eliminarToDo = (id) => {
        const action = {
            type: 'Eliminar un toDo',
            payload: id,
        }

        dispatch(action);
    }

    const modificarDone = (id) => {
        console.log(id)
        const action = {
            type: 'El done cambia de valor',
            payload: id,
        }
        dispatch(action);
    }

   

    return {
        toDos,
        handleNewToDo,
        eliminarToDo,
        modificarDone,
        cantToDos: toDos.length,
    }


}
