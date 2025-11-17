import CommandCard from './CommandCard';

const CategorySection = ({ category, commands, icon = "📁" }) => {
  return (
    <section className="slide-in" style={{
      marginBottom: '40px',
      background: 'linear-gradient(145deg, #0d1117, #161b22)',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid #21262d',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #21262d'
      }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#58a6ff',
          margin: 0,
          background: 'linear-gradient(135deg, #58a6ff, #7ee787)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {category}
        </h2>
        <span style={{
          backgroundColor: '#21262d',
          color: '#7d8590',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {commands.length} comandos
        </span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
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

export default CategorySection;