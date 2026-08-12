# LUMI — Clínica de Estética

Aplicação Angular 19 com site público, área administrativa e área do cliente.

## Como rodar

```bash
npm install
npm start
```

Abra [http://localhost:4200](http://localhost:4200).

## Acessos de demonstração

| Perfil  | E-mail           | Senha      |
|---------|------------------|------------|
| Admin   | admin@lumi.com   | admin123   |
| Cliente | cliente@lumi.com | cliente123 |

## Estrutura

### Site público
- Home com hero da marca
- Tratamentos
- Antes e depois
- Equipe
- Depoimentos
- Blog
- Contato / agendamento (gera lead)

### Área administrativa (`/admin`)
- Cadastro de clientes, procedimentos, profissionais
- Agenda
- Depoimentos, fotos antes/depois, categorias, galeria
- Leads recebidos pelo site

### Área do cliente (`/minha-area`)
- Dados pessoais
- Histórico de atendimentos
- Próximos agendamentos
- Fotos de evolução
- Recomendações
- Documentos

## Observações

Os dados são mockados em memória (`DataService`) para prototipagem — sem backend ainda.
