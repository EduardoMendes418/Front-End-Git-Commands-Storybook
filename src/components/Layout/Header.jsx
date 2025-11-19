import React from 'react';
import SearchBar from '../SearchBar';
import styles from './Layout.module.css';

const Header = ({ searchTerm, onSearchChange, totalCommands, totalCategories }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        🚀 Git Commands Reference
      </h1>
      <p className={styles.subtitle}>
        Todos os comandos Git que você precisa, organizados por categoria e com exemplos práticos
      </p>
      
      <div className={styles.searchContainer}>
        <SearchBar 
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Buscar por comandos..."
        />
      </div>
      
      <div className={styles.stats}>
        <StatCard value={totalCommands} label="Comandos" color="blue" />
        <StatCard value={totalCategories} label="Categorias" color="green" />
      </div>
    </header>
  );
};

const StatCard = ({ value, label, color }) => (
  <div className={`${styles.statCard} ${styles[color]}`}>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
);

export default Header;