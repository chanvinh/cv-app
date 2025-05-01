import React from "react";
import styles from "./typography.module.css";

interface PropsTypography {
  type?: "level1" | "level2" | "level3" | "level4";
  decoration?: string;
  padding?: string;
  children?: React.ReactNode;
}

const Typography = ({ type = 'level1', children, padding, decoration }: Readonly<PropsTypography>) => {
  return <div className={styles[type]} style={{ padding: padding, textDecoration: decoration }}> {children} </div>;
};

export default Typography;
