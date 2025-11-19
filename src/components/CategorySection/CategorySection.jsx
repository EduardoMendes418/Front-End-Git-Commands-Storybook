import React from 'react';
import CommandCard from '../CommandCard/CommandCard';
import styles from './CategorySection.module.css';

const CategorySection = ({ category, commands, icon = "📁" }) => {
  return (
    <section className={`${styles.section} slideIn`}>
      <SectionHeader 
        category={category}
        icon={icon}
        commandCount={commands.length}
      />
      
      <div className={styles.grid}>
        {commands.map((cmd) => (
          <CommandCard
            key={cmd.id}
            command={cmd.command}
            description={cmd.description}
            usage={cmd.usage}
            example={cmd.example}
          />
        ))}
      </div>
    </section>
  );
};

const SectionHeader = ({ category, icon, commandCount }) => (
  <div className={styles.header}>
    <span className={styles.icon}>{icon}</span>
    <h2 className={styles.title}>{category}</h2>
    <span className={styles.badge}>
      {commandCount} {commandCount === 1 ? 'comando' : 'comandos'}
    </span>
  </div>
);

export default CategorySection;