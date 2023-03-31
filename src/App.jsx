import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { CreateTaskContainer } from './components/CreateTaskContainer'
import { TasksContainer } from './components/TasksContainer'

import './global.css'
import styles from './app.module.css'

function App() {
  const [tasksList, setNewTask] = useState([])

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <CreateTaskContainer tasksList={tasksList} setNewTask={setNewTask}/>
        <TasksContainer tasksList={tasksList} setNewTask={setNewTask}/>
      </main>
    </div>
    
  )
}

export default App
