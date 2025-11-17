import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Buscar comandos..." }) => {
  return (
    <div style={{
      position: 'relative',
      marginBottom: '32px',
      maxWidth: '500px'
    }}>

      <Search style={{
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#7d8590',
        width: '20px',
        height: '20px'
      }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '16px 16px 16px 48px',
          backgroundColor: '#0d1117',
          border: '2px solid #21262d',
          borderRadius: '12px',
          color: '#c9d1d9',
          fontSize: '16px',
          fontFamily: 'inherit',
          transition: 'all 0.3s ease'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#58a6ff';
          e.target.style.boxShadow = '0 0 0 3px rgba(88, 166, 255, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#21262d';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
};

export default SearchBar;