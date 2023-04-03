import { PlusCircle } from 'phosphor-react'
import {v4 as uuidv4} from 'uuid'

import styles from './CreateTaskContainer.module.css'
import { useState } from 'react'

export function CreateTaskContainer({ tasksList, setNewTask }) {
    const [newTaskText, setNewTaskText] = useState('')
    function handleNewTaskChanges() {
        setNewTaskText(event.target.value)
    }

    function handleCreateNewTask() {
        event.preventDefault()

        if (newTaskText != '') {
            setNewTask([...tasksList, {id: uuidv4(), done: false, content: newTaskText}]) 
            setNewTaskText('')
        }
    }
    console.log(tasksList)
 
    return (
        <form onSubmit={handleCreateNewTask} className={styles.searchForm}>
            <input value={newTaskText} onChange={handleNewTaskChanges} type="text" placeholder='Adicione uma nova tarefa' />
            <button type="submit">Criar {<PlusCircle />}</button>
        </form>
    )
}