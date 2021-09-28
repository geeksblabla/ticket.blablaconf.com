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
      <footer className={styles.footer}>Powered by @geeksblabla</footer>
    </div>
  );
};
