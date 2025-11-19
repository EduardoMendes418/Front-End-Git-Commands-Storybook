import CategorySection from '../components/CategorySection/CategorySection';

const sampleCommands = [
  {
    id: '1',
    command: 'git init',
    description: 'Criar um novo repositório.',
    usage: 'git init',
    example: 'git init'
  },
  {
    id: '2',
    command: 'git clone',
    description: 'Copiar um repositório existente.',
    usage: 'git clone <url>',
    example: 'git clone https://github.com/user/repo.git'
  },
  {
    id: '3',
    command: 'git status',
    description: 'Ver alterações pendentes.',
    usage: 'git status',
    example: 'git status'
  }
];

export default {
  title: 'Git Commands/CategorySection',
  component: CategorySection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const BasicCategory = {
  args: {
    category: 'Básicos',
    commands: sampleCommands,
    icon: '⚡'
  },
};