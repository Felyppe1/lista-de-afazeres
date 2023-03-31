import { useState } from 'react'
import { Task } from './Task'
import styles from './TasksContainer.module.css'

export function TasksContainer({ tasksList, setNewTask }) {
    const tasksTotal = tasksList.length
    let tasksCompleted = 0
    for (let cont = 0; cont < tasksTotal; cont++) {
        if (tasksList[cont].done == true) {
            tasksCompleted++
        }
    }

    function deleteTask(taskKey) {
        const tasksListWithoutDeletedOne = tasksList.filter(task => {
            if (task.id != taskKey) {
                return task
            }
        })

        setNewTask(tasksListWithoutDeletedOne)
    }

    function changeTaskStatus(taskKey) {
        const tasksListModified = tasksList.filter(task => {
            if (task.id == taskKey) {
                if (task.done == false) {
                    task.done = true
                }
                else {
                    task.done = false
                }
                return task
            }
            else {
                return task
            }
        })
        
        setNewTask(tasksListModified)
    }

    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksQuantity}>
                <div>
                    <p>Tarefas criadas</p>
                    <div>{tasksTotal}</div>
                </div>
                <div>
                    <p>Concluídas</p>
                    <div>{tasksCompleted} de {tasksTotal}</div>
                </div>
            </div>
            <div className={styles.tasksList}>
                {tasksList.map(task => {
                    return (
                        <Task 
                            id={task.id}
                            done={task.done}
                            content={task.content}
                            onDeleteTask={deleteTask}
                            onChangeTaskStatus={changeTaskStatus}
                        />
                    )
                })}
            </div>
        </div>
    )
}