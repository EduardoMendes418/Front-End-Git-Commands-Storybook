import React from 'react';
import styles from './Layout.module.css';

const Footer = ({ totalCommands }) => {
  return (
    <footer className={styles.footer}>
      <p>
        ✨ Referência completa de comandos Git • Desenvolvido com React + Storybook
      </p>
      <p className={styles.footerSub}>
        Total de {totalCommands} comandos disponíveis
      </p>
    </footer>
  );
};

export default Footer;