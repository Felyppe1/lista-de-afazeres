import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Lista de <span>afazeres</span></h1>
        </header>
    )
}