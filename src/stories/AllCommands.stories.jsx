import React, { useState, useMemo } from 'react';
import CategorySection from '../components/CategorySection';
import SearchBar from '../components/SearchBar';
import { gitCommands } from '../data/gitCommands';

export default {
  title: 'Git Commands/All Commands',
  parameters: {
    layout: 'fullscreen',
  },
};

const AllCommands = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) return gitCommands;

    const searchLower = searchTerm.toLowerCase();
    
    return gitCommands.map(category => ({
      ...category,
      commands: category.commands.filter(cmd => 
        cmd.command.toLowerCase().includes(searchLower) ||
        cmd.description.toLowerCase().includes(searchLower) ||
        (cmd.usage && cmd.usage.toLowerCase().includes(searchLower)) ||
        (cmd.example && cmd.example.toLowerCase().includes(searchLower))
      )
    })).filter(category => category.commands.length > 0);
  }, [searchTerm]);

  const totalCommands = filteredCommands.reduce((acc, category) => acc + category.commands.length, 0);
  const totalCategories = filteredCommands.length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '60px',
          padding: '40px 20px',
          background: 'linear-gradient(145deg, #161b22, #1c2128)',
          borderRadius: '20px',
          border: '1px solid #30363d',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #58a6ff, #7ee787, #ff7b72)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            🚀 Git Commands Reference
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#8b949e',
            marginBottom: '32px',
            maxWidth: '900px',
            margin: '0 auto 32px auto'
          }}>
            Todos os comandos Git que você precisa, organizados por categoria e com exemplos práticos
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '32px'
          }}>
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Buscar por comandos..."
            />
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(88, 166, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(88, 166, 255, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#58a6ff' }}>
                {totalCommands}
              </div>
              <div style={{ color: '#8b949e', fontSize: '14px' }}>Comandos</div>
            </div>
            
            <div style={{
              background: 'rgba(126, 231, 135, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(126, 231, 135, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#7ee787' }}>
                {totalCategories}
              </div>
              <div style={{ color: '#8b949e', fontSize: '14px' }}>Categorias</div>
            </div>
            
            <div style={{
              background: 'rgba(255, 123, 114, 0.1)',
              padding: '12px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 123, 114, 0.3)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ff7b72' }}>
                {gitCommands.length}
              </div>
              <div style={{ color: '#8b949e', fontSize: '14px' }}>Total Categorias</div>
            </div>
          </div>
        </header>

        {/* Commands Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {filteredCommands.map((category) => (
            <CategorySection
              key={category.id}
              category={category.category}
              commands={category.commands}
              icon={category.icon}
            />
          ))}
          
          {filteredCommands.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 40px',
              background: 'linear-gradient(145deg, #161b22, #1c2128)',
              borderRadius: '20px',
              border: '2px dashed #30363d'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#ff7b72',
                marginBottom: '12px'
              }}>
                Nenhum comando encontrado
              </h3>
              <p style={{ color: '#8b949e' }}>
                Não encontramos resultados para "<strong>{searchTerm}</strong>"
              </p>
              <p style={{ color: '#7d8590', fontSize: '14px', marginTop: '8px' }}>
                Tente buscar por termos diferentes ou verifique a ortografia
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '40px',
          color: '#7d8590',
          borderTop: '1px solid #21262d'
        }}>
          <p style={{ marginBottom: '8px' }}>
            ✨ Referência completa de comandos Git • Desenvolvido com React + Storybook
          </p>
          <p style={{ fontSize: '14px', color: '#6e7681' }}>
            Total de {gitCommands.reduce((acc, cat) => acc + cat.commands.length, 0)} comandos disponíveis
          </p>
        </footer>
      </div>
    </div>
  );
};

export { AllCommands };


export const BasicCommandsStory = () => (
  <div style={{ padding: '40px', background: '#0d1117', minHeight: '100vh' }}>
    <CategorySection 
      category={gitCommands[0].category}
      commands={gitCommands[0].commands}
      icon={gitCommands[0].icon}
    />
  </div>
);

export const SyncCommandsStory = () => (
  <div style={{ padding: '40px', background: '#0d1117', minHeight: '100vh' }}>
    <CategorySection 
      category={gitCommands[1].category}
      commands={gitCommands[1].commands}
      icon={gitCommands[1].icon}
    />
  </div>
);