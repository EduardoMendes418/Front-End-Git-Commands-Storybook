import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import styles from './CommandCard.module.css';

const CommandCard = ({ command, description, example, usage }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(usage || command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  };

  return (
    <div className={`${styles.card} fadeIn`}>
      <div className={styles.cardGlow}></div>

      <div className={styles.header}>
        <code className={styles.command}>
          {command}
        </code>
        
        <button
          onClick={handleCopy}
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
        >
          {copied ? (
            <>
              <Check size={14} />
              Copiado!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copiar
            </>
          )}
        </button>
      </div>
      
      <p className={styles.description}>
        {description}
      </p>
      
      {usage && (
        <div className={styles.usage}>
          <strong>Uso:</strong>
          <code>{usage}</code>
        </div>
      )}
      
      {example && (
        <div className={styles.example}>
          <strong>Exemplo:</strong>
          <code>{example}</code>
        </div>
      )}
    </div>
  );
};

export default CommandCard;