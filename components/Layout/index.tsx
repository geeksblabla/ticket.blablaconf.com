import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <footer className={styles.footer}>
        Made with ❤️ By DevC Team. Copyright © 2021 Blabla Conf. All rights
        reserved.
      </footer>
    </div>
  );
};
