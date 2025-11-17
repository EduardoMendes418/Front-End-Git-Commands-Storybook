import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

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
    <div className="fade-in" style={{
      background: 'linear-gradient(145deg, #161b22, #1c2128)',
      border: '1px solid #30363d',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
      color: '#c9d1d9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #58a6ff, transparent)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }} className="card-glow"></div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
        gap: '12px'
      }}>
        <code style={{
          backgroundColor: '#0d1117',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#58a6ff',
          fontSize: '14px',
          fontFamily: 'Monaco, "JetBrains Mono", monospace',
          fontWeight: '600',
          flex: 1,
          border: '1px solid #30363d',
          lineHeight: '1.4',
          wordBreak: 'break-all'
        }}>
          {command}
        </code>
        
        <button
          onClick={handleCopy}
          style={{
            backgroundColor: copied ? '#238636' : '#21262d',
            color: 'white',
            border: '1px solid #30363d',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            minWidth: '80px',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            if (!copied) {
              e.target.style.backgroundColor = '#30363d';
              e.target.style.borderColor = '#58a6ff';
            }
          }}
          onMouseOut={(e) => {
            if (!copied) {
              e.target.style.backgroundColor = '#21262d';
              e.target.style.borderColor = '#30363d';
            }
          }}
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
      
      <p style={{
        margin: '12px 0',
        lineHeight: '1.5',
        color: '#8b949e',
        fontSize: '14px'
      }}>
        {description}
      </p>
      
      {usage && (
        <div style={{ marginTop: '12px' }}>
          <strong style={{
            color: '#7d8590',
            fontSize: '13px',
            display: 'block',
            marginBottom: '4px'
          }}>
            Uso:
          </strong>
          <code style={{
            backgroundColor: '#0d1117',
            padding: '6px 10px',
            borderRadius: '4px',
            color: '#7ee787',
            fontSize: '13px',
            fontFamily: 'Monaco, "JetBrains Mono", monospace',
            border: '1px solid #30363d',
            display: 'block',
            lineHeight: '1.4'
          }}>
            {usage}
          </code>
        </div>
      )}
      
      {example && (
        <div style={{ marginTop: '8px' }}>
          <strong style={{
            color: '#7d8590',
            fontSize: '13px',
            display: 'block',
            marginBottom: '4px'
          }}>
            Exemplo:
          </strong>
          <code style={{
            backgroundColor: '#0d1117',
            padding: '6px 10px',
            borderRadius: '4px',
            color: '#ff7b72',
            fontSize: '13px',
            fontFamily: 'Monaco, "JetBrains Mono", monospace',
            border: '1px solid #30363d',
            display: 'block',
            lineHeight: '1.4'
          }}>
            {example}
          </code>
        </div>
      )}

      <style jsx>{`
        .fade-in:hover .card-glow {
          opacity: 1;
        }
        
        .fade-in:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          border-color: #58a6ff;
        }
      `}</style>
    </div>
  );
};

export default CommandCard;