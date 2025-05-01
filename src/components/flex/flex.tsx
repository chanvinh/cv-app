import React from 'react'
import styles from './flex.module.css'

interface PropsFlex {
    children?: React.ReactNode;
}

const Flex = ({ children }: Readonly<PropsFlex>) => {
    return (
        <div className={styles.flex} >{children}</div>
    )
}

export default Flex