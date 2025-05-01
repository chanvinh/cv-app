import React from "react";
import styles from "./container.module.css";

type PropsContainer = {
  children?: React.ReactNode,
};

const Container = ({ children }: Readonly<PropsContainer>) => {
  return <div className={styles.container}>{children}</div>;
};

export default React.memo(Container);
