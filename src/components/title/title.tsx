import React from 'react'
import styles from './title.module.css'
import Typography from '../typography/typography';

interface PropsTitle {
    label?: string;
}

const Title = ({ label }: Readonly<PropsTitle>) => {
    return (
        <div className={styles.title}><Typography type='level2'>{label}</Typography></div>
    )
}

export default Title