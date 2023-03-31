import { Trash, Check } from 'phosphor-react'

import styles from './Task.module.css'

export function Task({id, done, content, onDeleteTask, onChangeTaskStatus}) {
    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleTaskStatus() {
        onChangeTaskStatus(id)
    }

    let taskStyle 
    if (done) {
        taskStyle = <div><button className={styles.checkboxChecked} onClick={handleTaskStatus}><Check size={13}/></button><label htmlFor={id} className={styles.labelChecked}>{content}</label></div>
    }
    else {
        taskStyle = <div><button className={styles.checkboxUnchecked} onClick={handleTaskStatus}></button><label htmlFor={id}>{content}</label></div>
    }

    return (
        <div className={styles.taskDiv}>
            {taskStyle}
            <Trash onClick={handleDeleteTask} className={styles.trashIcon} />
        </div>
    )
}