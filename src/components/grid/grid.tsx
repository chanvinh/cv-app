import React from 'react'
import styles from './grid.module.css'

interface PropsGrid {
    variant?: 'header';
    children?: React.ReactNode
}

const Grid = ({ children, variant }: Readonly<PropsGrid>) => {
    const className = variant === 'header'
        ? `${styles.grid} ${styles.header}`
        : styles.grid;

    return (
        <div className={className}>{children}</div>
    )
}

export default Grid
