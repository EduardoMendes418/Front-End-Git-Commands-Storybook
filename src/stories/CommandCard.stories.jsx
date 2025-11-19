import CommandCard from '../components/CommandCard/CommandCard';

export default {
  title: 'Git Commands/CommandCard',
  component: CommandCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    command: 'git init',
    description: 'Criar um novo repositório.',
    usage: 'git init',
    example: 'git init'
  },
};

export const WithExample = {
  args: {
    command: 'git commit -m',
    description: 'Salvar suas alterações com segurança.',
    usage: 'git commit -m "mensagem"',
    example: 'git commit -m "Adiciona nova funcionalidade"'
  },
};

export const ComplexCommand = {
  args: {
    command: 'git log --oneline --graph --all',
    description: 'Ver histórico de commits resumido e visual.',
    usage: 'git log --oneline --graph --all',
    example: 'git log --oneline --graph --all'
  },
};

export const CloneCommand = {
  args: {
    command: 'git clone',
    description: 'Copiar um repositório existente.',
    usage: 'git clone <url>',
    example: 'git clone https://github.com/user/repo.git'
  },
};