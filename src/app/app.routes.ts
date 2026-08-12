import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then((m) => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/public/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'tratamentos',
        loadComponent: () =>
          import('./pages/public/tratamentos/tratamentos.component').then((m) => m.TratamentosComponent)
      },
      {
        path: 'antes-depois',
        loadComponent: () =>
          import('./pages/public/antes-depois/antes-depois.component').then((m) => m.AntesDepoisComponent)
      },
      {
        path: 'equipe',
        loadComponent: () => import('./pages/public/equipe/equipe.component').then((m) => m.EquipeComponent)
      },
      {
        path: 'depoimentos',
        loadComponent: () =>
          import('./pages/public/depoimentos/depoimentos.component').then((m) => m.DepoimentosComponent)
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/public/blog/blog.component').then((m) => m.BlogComponent)
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./pages/public/blog-detail/blog-detail.component').then((m) => m.BlogDetailComponent)
      },
      {
        path: 'contato',
        loadComponent: () => import('./pages/public/contato/contato.component').then((m) => m.ContatoComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/public/login/login.component').then((m) => m.LoginComponent)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [authGuard('admin')],
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then((m) => m.AdminDashboardComponent)
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/admin/clientes/clientes.component').then((m) => m.AdminClientesComponent)
      },
      {
        path: 'procedimentos',
        loadComponent: () =>
          import('./pages/admin/procedimentos/procedimentos.component').then(
            (m) => m.AdminProcedimentosComponent
          )
      },
      {
        path: 'profissionais',
        loadComponent: () =>
          import('./pages/admin/profissionais/profissionais.component').then(
            (m) => m.AdminProfissionaisComponent
          )
      },
      {
        path: 'agenda',
        loadComponent: () =>
          import('./pages/admin/agenda/agenda.component').then((m) => m.AdminAgendaComponent)
      },
      {
        path: 'depoimentos',
        loadComponent: () =>
          import('./pages/admin/depoimentos/depoimentos.component').then((m) => m.AdminDepoimentosComponent)
      },
      {
        path: 'antes-depois',
        loadComponent: () =>
          import('./pages/admin/antes-depois/antes-depois.component').then(
            (m) => m.AdminAntesDepoisComponent
          )
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('./pages/admin/categorias/categorias.component').then((m) => m.AdminCategoriasComponent)
      },
      {
        path: 'galeria',
        loadComponent: () =>
          import('./pages/admin/galeria/galeria.component').then((m) => m.AdminGaleriaComponent)
      },
      {
        path: 'leads',
        loadComponent: () => import('./pages/admin/leads/leads.component').then((m) => m.AdminLeadsComponent)
      }
    ]
  },
  {
    path: 'minha-area',
    canActivate: [authGuard('cliente')],
    loadComponent: () =>
      import('./layouts/client-layout/client-layout.component').then((m) => m.ClientLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/client/dashboard/dashboard.component').then((m) => m.ClientDashboardComponent)
      },
      {
        path: 'dados',
        loadComponent: () => import('./pages/client/dados/dados.component').then((m) => m.ClientDadosComponent)
      },
      {
        path: 'historico',
        loadComponent: () =>
          import('./pages/client/historico/historico.component').then((m) => m.ClientHistoricoComponent)
      },
      {
        path: 'agendamentos',
        loadComponent: () =>
          import('./pages/client/agendamentos/agendamentos.component').then(
            (m) => m.ClientAgendamentosComponent
          )
      },
      {
        path: 'evolucao',
        loadComponent: () =>
          import('./pages/client/evolucao/evolucao.component').then((m) => m.ClientEvolucaoComponent)
      },
      {
        path: 'recomendacoes',
        loadComponent: () =>
          import('./pages/client/recomendacoes/recomendacoes.component').then(
            (m) => m.ClientRecomendacoesComponent
          )
      },
      {
        path: 'documentos',
        loadComponent: () =>
          import('./pages/client/documentos/documentos.component').then((m) => m.ClientDocumentosComponent)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
