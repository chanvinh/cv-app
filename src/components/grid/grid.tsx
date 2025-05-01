import React from 'react'
import styles from './grid.module.css'

interface PropsGrid {
    padding?: string;
    children?: React.ReactNode
}

const Grid = ({ children, padding }: Readonly<PropsGrid>) => {
    return (
        <div className={styles.grid} style={{ padding: padding }}>{children}</div>
    )
}

export default Grid