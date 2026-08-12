export type UserRole = 'admin' | 'cliente' | 'guest';

export interface User {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
  telefone?: string;
  avatar?: string;
}

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataNascimento: string;
  endereco?: string;
  observacoes?: string;
  criadoEm: string;
}

export interface Procedimento {
  id: string;
  nome: string;
  descricao: string;
  categoriaId: string;
  duracaoMinutos: number;
  preco: number;
  destaque: boolean;
  imagem?: string;
}

export interface Profissional {
  id: string;
  nome: string;
  cargo: string;
  bio: string;
  especialidades: string[];
  foto?: string;
  ativo: boolean;
}

export interface Agendamento {
  id: string;
  clienteId: string;
  clienteNome: string;
  procedimentoId: string;
  procedimentoNome: string;
  profissionalId: string;
  profissionalNome: string;
  dataHora: string;
  status: 'agendado' | 'confirmado' | 'concluido' | 'cancelado';
  observacoes?: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  texto: string;
  tratamento: string;
  nota: number;
  publicado: boolean;
  data: string;
}

export interface AntesDepois {
  id: string;
  titulo: string;
  procedimento: string;
  descricao: string;
  imagemAntes: string;
  imagemDepois: string;
  publicado: boolean;
}

export interface Categoria {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
}

export interface GaleriaItem {
  id: string;
  titulo: string;
  imagem: string;
  categoria: string;
  publicado: boolean;
}

export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
  status: 'novo' | 'contactado' | 'convertido' | 'arquivado';
  criadoEm: string;
}

export interface PostBlog {
  id: string;
  titulo: string;
  slug: string;
  resumo: string;
  conteudo: string;
  capa: string;
  autor: string;
  publicadoEm: string;
  tags: string[];
}

export interface Atendimento {
  id: string;
  data: string;
  procedimento: string;
  profissional: string;
  observacoes: string;
  valor: number;
}

export interface FotoEvolucao {
  id: string;
  data: string;
  titulo: string;
  imagem: string;
  procedimento: string;
}

export interface Recomendacao {
  id: string;
  titulo: string;
  descricao: string;
  profissional: string;
  data: string;
}

export interface Documento {
  id: string;
  titulo: string;
  tipo: string;
  data: string;
  url: string;
}
