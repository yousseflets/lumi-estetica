import { Injectable, signal } from '@angular/core';
import {
  Agendamento,
  AntesDepois,
  Atendimento,
  Categoria,
  Cliente,
  Depoimento,
  Documento,
  FotoEvolucao,
  GaleriaItem,
  Lead,
  PostBlog,
  Procedimento,
  Profissional,
  Recomendacao
} from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly clientes = signal<Cliente[]>([
    {
      id: 'c1',
      nome: 'Ana Beatriz Costa',
      email: 'cliente@lumi.com',
      telefone: '(11) 98888-1111',
      cpf: '123.456.789-00',
      dataNascimento: '1992-04-12',
      endereco: 'Rua das Flores, 120  São Paulo, SP',
      observacoes: 'Pele sensível',
      criadoEm: '2025-11-02'
    },
    {
      id: 'c2',
      nome: 'Mariana Lopes',
      email: 'mariana@email.com',
      telefone: '(11) 97777-2222',
      cpf: '987.654.321-00',
      dataNascimento: '1988-09-20',
      criadoEm: '2026-01-15'
    },
    {
      id: 'c3',
      nome: 'Camila Ferreira',
      email: 'camila@email.com',
      telefone: '(11) 96666-3333',
      cpf: '456.789.123-00',
      dataNascimento: '1995-01-08',
      criadoEm: '2026-03-01'
    }
  ]);

  readonly categorias = signal<Categoria[]>([
    { id: 'cat1', nome: 'Facial', slug: 'facial', descricao: 'Tratamentos para rejuvenescimento e cuidado da pele do rosto.' },
    { id: 'cat2', nome: 'Corporal', slug: 'corporal', descricao: 'Protocolos para modelagem, firmeza e bem-estar corporal.' },
    { id: 'cat3', nome: 'Harmonização', slug: 'harmonizacao', descricao: 'Procedimentos estéticos avançados com naturalidade.' }
  ]);

  readonly procedimentos = signal<Procedimento[]>([
    {
      id: 'p1',
      nome: 'Limpeza de Pele Profunda',
      descricao: 'Protocolo completo de higienização, esfoliação e extração com máscara calmante.',
      categoriaId: 'cat1',
      duracaoMinutos: 75,
      preco: 280,
      destaque: true,
      imagem: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=1100&fit=crop'
    },
    {
      id: 'p2',
      nome: 'Peeling Químico Suave',
      descricao: 'Renovação celular para uniformizar tom, textura e luminosidade.',
      categoriaId: 'cat1',
      duracaoMinutos: 60,
      preco: 350,
      destaque: true,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx0yfgENrxfKWY11XJtGXp_FQ_zDs0Rt344MtxY9_sdDsXqkcNAGV2Vsr&s=10'
    },
    {
      id: 'p3',
      nome: 'Drenagem Linfática',
      descricao: 'Massagem terapêutica que reduz retenção e favorece o bem-estar.',
      categoriaId: 'cat2',
      duracaoMinutos: 60,
      preco: 220,
      destaque: false,
      imagem: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=1100&fit=crop'
    },
    {
      id: 'p4',
      nome: 'Radiofrequência Facial',
      descricao: 'Estímulo de colágeno para firmeza e contorno mais definido.',
      categoriaId: 'cat1',
      duracaoMinutos: 50,
      preco: 420,
      destaque: true,
      imagem: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&h=1100&fit=crop'
    },
    {
      id: 'p5',
      nome: 'Massagem Modeladora',
      descricao: 'Técnica corporal para estimular circulação e melhorar a silhueta.',
      categoriaId: 'cat2',
      duracaoMinutos: 60,
      preco: 250,
      destaque: false,
      imagem: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&h=1100&fit=crop'
    },
    {
      id: 'p6',
      nome: 'Skinbooster',
      descricao: 'Hidratação profunda injetável para pele luminosa e viçosa.',
      categoriaId: 'cat3',
      duracaoMinutos: 45,
      preco: 890,
      destaque: true,
      imagem: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&h=1100&fit=crop'
    }
  ]);

  readonly profissionais = signal<Profissional[]>([
    {
      id: 'pr1',
      nome: 'Dra. Helena Duarte',
      cargo: 'Dermatologista estética',
      bio: 'Especialista em rejuvenescimento facial com abordagem natural e personalizada.',
      especialidades: ['Peeling', 'Skinbooster', 'Radiofrequência'],
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop',
      ativo: true
    },
    {
      id: 'pr2',
      nome: 'Juliana Mendes',
      cargo: 'Esteticista sênior',
      bio: 'Mais de 10 anos cuidando de peles sensíveis com protocolos suaves e eficazes.',
      especialidades: ['Limpeza de pele', 'Drenagem', 'Massagem'],
      foto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=750&fit=crop',
      ativo: true
    },
    {
      id: 'pr3',
      nome: 'Sofia Albuquerque',
      cargo: 'Especialista corporal',
      bio: 'Foco em bem-estar, modelagem e resultados sustentáveis.',
      especialidades: ['Modeladora', 'Drenagem', 'Corporal'],
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop',
      ativo: true
    }
  ]);

  readonly agendamentos = signal<Agendamento[]>([
    {
      id: 'a1',
      clienteId: 'c1',
      clienteNome: 'Ana Beatriz Costa',
      procedimentoId: 'p1',
      procedimentoNome: 'Limpeza de Pele Profunda',
      profissionalId: 'pr2',
      profissionalNome: 'Juliana Mendes',
      dataHora: '2026-08-15T10:00:00',
      status: 'confirmado'
    },
    {
      id: 'a2',
      clienteId: 'c2',
      clienteNome: 'Mariana Lopes',
      procedimentoId: 'p4',
      procedimentoNome: 'Radiofrequência Facial',
      profissionalId: 'pr1',
      profissionalNome: 'Dra. Helena Duarte',
      dataHora: '2026-08-16T14:30:00',
      status: 'agendado'
    },
    {
      id: 'a3',
      clienteId: 'c1',
      clienteNome: 'Ana Beatriz Costa',
      procedimentoId: 'p2',
      procedimentoNome: 'Peeling Químico Suave',
      profissionalId: 'pr1',
      profissionalNome: 'Dra. Helena Duarte',
      dataHora: '2026-08-28T11:00:00',
      status: 'agendado'
    },
    {
      id: 'a4',
      clienteId: 'c3',
      clienteNome: 'Camila Ferreira',
      procedimentoId: 'p3',
      procedimentoNome: 'Drenagem Linfática',
      profissionalId: 'pr3',
      profissionalNome: 'Sofia Albuquerque',
      dataHora: '2026-07-20T09:00:00',
      status: 'concluido'
    }
  ]);

  readonly depoimentos = signal<Depoimento[]>([
    {
      id: 'd1',
      nome: 'Ana Beatriz',
      texto: 'Saí da Lumi com a pele luminosa e uma sensação de cuidado real. O atendimento é delicado e profissional.',
      tratamento: 'Limpeza de Pele',
      nota: 5,
      publicado: true,
      data: '2026-06-10'
    },
    {
      id: 'd2',
      nome: 'Mariana L.',
      texto: 'Resultados naturais e acompanhamento próximo. Me sinto segura em cada sessão.',
      tratamento: 'Radiofrequência',
      nota: 5,
      publicado: true,
      data: '2026-05-22'
    },
    {
      id: 'd3',
      nome: 'Camila F.',
      texto: 'Ambiente acolhedor e equipe atenta aos detalhes. Recomendo de olhos fechados.',
      tratamento: 'Drenagem',
      nota: 5,
      publicado: true,
      data: '2026-04-18'
    }
  ]);

  readonly antesDepois = signal<AntesDepois[]>([
    {
      id: 'ad1',
      titulo: 'Uniformização e glow',
      procedimento: 'Peeling Químico Suave',
      descricao: 'Após 3 sessões, melhora na textura e luminosidade.',
      imagemAntes: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=900&fit=crop&sat=-40',
      imagemDepois: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=900&fit=crop',
      publicado: true
    },
    {
      id: 'ad2',
      titulo: 'Firmeza e contorno',
      procedimento: 'Radiofrequência Facial',
      descricao: 'Protocolo personalizado com foco em sustentação.',
      imagemAntes: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&h=900&fit=crop&sat=-50',
      imagemDepois: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&h=900&fit=crop',
      publicado: true
    },
    {
      id: 'ad3',
      titulo: 'Pele renovada',
      procedimento: 'Limpeza + Skinbooster',
      descricao: 'Combinação para hidratação profunda e viço.',
      imagemAntes: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&h=900&fit=crop&sat=-45',
      imagemDepois: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&h=900&fit=crop',
      publicado: true
    }
  ]);

  readonly galeria = signal<GaleriaItem[]>([
    {
      id: 'g1',
      titulo: 'Ambiente de cuidado',
      imagem: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1000&h=800&fit=crop',
      categoria: 'Clínica',
      publicado: true
    },
    {
      id: 'g2',
      titulo: 'Protocolo facial',
      imagem: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=800&fit=crop',
      categoria: 'Tratamentos',
      publicado: true
    },
    {
      id: 'g3',
      titulo: 'Detalhe do cuidado',
      imagem: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1000&h=800&fit=crop',
      categoria: 'Tratamentos',
      publicado: true
    },
    {
      id: 'g4',
      titulo: 'Espaço Lumi',
      imagem: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&h=800&fit=crop',
      categoria: 'Clínica',
      publicado: true
    }
  ]);

  readonly leads = signal<Lead[]>([
    {
      id: 'l1',
      nome: 'Patrícia Nunes',
      email: 'patricia@email.com',
      telefone: '(11) 95555-4444',
      interesse: 'Peeling Químico',
      mensagem: 'Gostaria de saber disponibilidade para avaliação.',
      status: 'novo',
      criadoEm: '2026-08-10T14:20:00'
    },
    {
      id: 'l2',
      nome: 'Renata Silva',
      email: 'renata@email.com',
      telefone: '(11) 94444-5555',
      interesse: 'Skinbooster',
      mensagem: 'Quero agendar uma consulta de harmonização.',
      status: 'contactado',
      criadoEm: '2026-08-08T09:10:00'
    }
  ]);

  readonly posts = signal<PostBlog[]>([
    {
      id: 'b1',
      titulo: 'Como manter o glow depois do tratamento',
      slug: 'manter-glow-depois-tratamento',
      resumo: 'Cuidados simples que prolongam o resultado dos protocolos faciais.',
      conteudo:
        'A luminosidade da pele começa no consultório, mas se mantém em casa. Hidratação diária, proteção solar e consistência fazem diferença. Na Lumi, cada protocolo vem acompanhado de orientações personalizadas para o seu tipo de pele.',
      capa: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop',
      autor: 'Dra. Helena Duarte',
      publicadoEm: '2026-07-28',
      tags: ['Cuidados', 'Facial']
    },
    {
      id: 'b2',
      titulo: 'Peeling: quando vale a pena começar',
      slug: 'peeling-quando-comecar',
      resumo: 'Entenda indicações, expectativas e o que observar antes da primeira sessão.',
      conteudo:
        'O peeling suave é indicado para quem busca renovação sem agressividade. Avaliamos histórico, sensibilidade e objetivos para definir concentração e intervalo entre sessões.',
      capa: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
      autor: 'Juliana Mendes',
      publicadoEm: '2026-07-12',
      tags: ['Peeling', 'Facial']
    },
    {
      id: 'b3',
      titulo: 'Rotina corporal com intenção',
      slug: 'rotina-corporal-intencao',
      resumo: 'Como combinar drenagem e modeladora sem exageros.',
      conteudo:
        'Resultados corporais sustentáveis nascem de frequência adequada, hábitos e protocolos alinhados ao seu momento. Menos intensidade, mais consistência.',
      capa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop',
      autor: 'Sofia Albuquerque',
      publicadoEm: '2026-06-30',
      tags: ['Corporal', 'Bem-estar']
    }
  ]);

  readonly atendimentosCliente = signal<Atendimento[]>([
    {
      id: 'at1',
      data: '2026-07-05',
      procedimento: 'Limpeza de Pele Profunda',
      profissional: 'Juliana Mendes',
      observacoes: 'Pele respondeu bem. Manter hidratação e FPS.',
      valor: 280
    },
    {
      id: 'at2',
      data: '2026-05-18',
      procedimento: 'Peeling Químico Suave',
      profissional: 'Dra. Helena Duarte',
      observacoes: 'Leve descamação esperada por 3 dias.',
      valor: 350
    }
  ]);

  readonly fotosEvolucao = signal<FotoEvolucao[]>([
    {
      id: 'fe1',
      data: '2026-05-18',
      titulo: 'Início do protocolo',
      imagem: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop&sat=-40',
      procedimento: 'Peeling'
    },
    {
      id: 'fe2',
      data: '2026-07-05',
      titulo: 'Após 2 sessões',
      imagem: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop',
      procedimento: 'Peeling + Limpeza'
    }
  ]);

  readonly recomendacoes = signal<Recomendacao[]>([
    {
      id: 'r1',
      titulo: 'Protetor solar diário',
      descricao: 'Aplicar FPS 50 todas as manhãs, mesmo em dias nublados.',
      profissional: 'Dra. Helena Duarte',
      data: '2026-07-05'
    },
    {
      id: 'r2',
      titulo: 'Hidratante reparador',
      descricao: 'Usar à noite por 7 dias após peeling para conforto cutâneo.',
      profissional: 'Juliana Mendes',
      data: '2026-07-05'
    }
  ]);

  readonly documentos = signal<Documento[]>([
    {
      id: 'doc1',
      titulo: 'Termo de consentimento  Peeling',
      tipo: 'PDF',
      data: '2026-05-18',
      url: '#'
    },
    {
      id: 'doc2',
      titulo: 'Orientações pós-procedimento',
      tipo: 'PDF',
      data: '2026-07-05',
      url: '#'
    }
  ]);

  addLead(lead: Omit<Lead, 'id' | 'status' | 'criadoEm'>): void {
    const novo: Lead = {
      ...lead,
      id: `l${Date.now()}`,
      status: 'novo',
      criadoEm: new Date().toISOString()
    };
    this.leads.update((list) => [novo, ...list]);
  }

  updateLeadStatus(id: string, status: Lead['status']): void {
    this.leads.update((list) => list.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  addCliente(cliente: Omit<Cliente, 'id' | 'criadoEm'>): void {
    this.clientes.update((list) => [
      { ...cliente, id: `c${Date.now()}`, criadoEm: new Date().toISOString().slice(0, 10) },
      ...list
    ]);
  }

  addProcedimento(item: Omit<Procedimento, 'id'>): void {
    this.procedimentos.update((list) => [{ ...item, id: `p${Date.now()}` }, ...list]);
  }

  addProfissional(item: Omit<Profissional, 'id'>): void {
    this.profissionais.update((list) => [{ ...item, id: `pr${Date.now()}` }, ...list]);
  }

  addAgendamento(item: Omit<Agendamento, 'id'>): void {
    this.agendamentos.update((list) => [{ ...item, id: `a${Date.now()}` }, ...list]);
  }

  addDepoimento(item: Omit<Depoimento, 'id'>): void {
    this.depoimentos.update((list) => [{ ...item, id: `d${Date.now()}` }, ...list]);
  }

  addAntesDepois(item: Omit<AntesDepois, 'id'>): void {
    this.antesDepois.update((list) => [{ ...item, id: `ad${Date.now()}` }, ...list]);
  }

  addCategoria(item: Omit<Categoria, 'id'>): void {
    this.categorias.update((list) => [{ ...item, id: `cat${Date.now()}` }, ...list]);
  }

  addGaleria(item: Omit<GaleriaItem, 'id'>): void {
    this.galeria.update((list) => [{ ...item, id: `g${Date.now()}` }, ...list]);
  }

  categoriaNome(id: string): string {
    return this.categorias().find((c) => c.id === id)?.nome ?? '';
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('pt-BR');
  }

  formatDateTime(value: string): string {
    return new Date(value).toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
