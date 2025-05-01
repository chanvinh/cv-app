import React from 'react'
import styles from './listbox.module.css'
import Typography from '../typography/typography';

interface PropsListBox {
    label?: string;
    children?: React.ReactNode;
    margin?: string;
}

const ListBox = ({ children, label, margin }: Readonly<PropsListBox>) => {
    return (
        <div className={styles.listbox} style={{ margin: margin }}>
            <Typography type='level3'>{label}</Typography>
            {children}
        </div>
    )
}

export default ListBox