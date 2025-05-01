import React from 'react'
import styles from './listbox.module.css'
import Typography from '../typography/typography';

interface PropsList {
    label?: string;
    children?: React.ReactNode;
    margin?: string;
}

const List = ({ children, label, margin }: Readonly<PropsList>) => {
    return (
        <div className={styles.listbox} style={{ margin: margin }}>
            <Typography type='level3'>{label}</Typography>
            {children}
        </div>
    )
}

export default List