# Master Síndico

Este documento descreve o produto na metodologia **Lean Inception**.
Trabalho da matéria Engenharia de Software da PUC Minas, sexto período

---

## Visão do Produto

**Para** administradores de condomínio pequeno, **cujo** a administração te tal é feito por um morador, tendo que controlar o financeiro e as notificações para moradores de entregas e manutenções, **o** Master Síndico é um SAAS de gerenciamento de condomínios **que** auxilia nos monitoramentos financeiros e notificações para moradores.

**Diferentemente do** processo manual operado sem apoio de tecnologias especializada, com alto risco de falhas e atrasos, **o nosso produto** oferece agilidade, segurança e acessibilidade.

---

## O Produto

| | |
|-|-|
| **É**<br> SAAS<br> Aplicativo Web<br> Facilitador de Finanças para condomínios pequenos | **Não É**<br> Gratuito<br> Substitui um síndico<br> Planilha |
| **Faz**<br> Relatórios Financeiros<br> Notificações de entregas de correspondências<br> Acompanhamento e chamada de manutenções | **Não Faz**<br> Cobranças<br> Invasão de Privacidade<br> . |

---

## Personas

### Carla Souza – Moradora Ativa

**Perfil:**  
Moradora participativa e engajada na rotina do condomínio, atenta aos serviços e comunicação interna.

**Comportamentos:**  
- Utiliza o aplicativo para reportar e acompanhar manutenções.  
- Valoriza agilidade e respostas rápidas.

**Necessidades:**  
- Facilidade para registrar problemas.  
- Transparência no status das manutenções.  
- Confirmação imediata das solicitações.

---

### João Mendes – Síndico Profissional

**Perfil:**  
Administrador com experiência, responsável por toda a organização do condomínio e uso eficiente dos recursos.

**Comportamentos:**  
- Acompanha tarefas diárias e reservas pelo app.  
- Gosta de manter registros digitais claros e atualizados.

**Necessidades:**  
- Visibilidade e controle sobre as reservas de áreas comuns.  
- Comunicação centralizada com moradores.  
- Automatização de processos operacionais.

---

### Roberto Lima – Porteiro e Funcionário do Condomínio

**Perfil:**  
Responsável por organizar correspondências e comunicar moradores sobre entregas e visitas.

**Comportamentos:**  
- Registra entregas no sistema ao longo do dia.  
- Interage com o aplicativo para informar moradores rapidamente.

**Necessidades:**  
- Sistema simples e rápido para envio de notificações.  
- Histórico acessível das entregas realizadas.  
- Integração fácil com o fluxo de trabalho diário.

---

## Brainstorm das Funcionalidades

### Relatórios Financeiros e de Gestão
- Visualização mensal e anual de receitas e despesas do condomínio
- Exportação em PDF e planilha (.csv)
- Filtro por categoria (água, luz, manutenção, etc.)
- Gráficos para facilitar a análise financeira

### Notificações de Entregas de Correspondência
- Registro rápido de correspondências recebidas pelo porteiro
- Notificação automática para o morador via aplicativo
- Histórico de entregas por apartamento
- Marcação de retirada pelo morador

### Acompanhamento de Chamadas de Manutenção
- Criação de chamados por moradores
- Descrição detalhada do problema com foto
- Atualizações de status (pendente, em andamento, concluído)
- Confirmação de resolução pelo morador

### Reserva de Áreas Comuns
- Visualização de disponibilidade em calendário
- Solicitação e aprovação de reservas
- Notificações com regras de uso
- Limite de reservas por morador para evitar abusos

### Notificações Gerais para Moradores
- Avisos importantes enviados pelo síndico
- Alertas de manutenção programada
- Mensagens emergenciais (ex: falta de água, interdição)

### Histórico de Interações
- Registro completo das solicitações e interações por usuário
- Acesso ao histórico de chamadas, notificações e reservas
- Transparência e rastreabilidade das ações no sistema

### Gestão de Usuários
- Cadastro e permissão por tipo de usuário (síndico, porteiro, morador)
- Controle de acesso a funcionalidades conforme o papel
- Possibilidade de alteração de dados pessoais e notificações

### Painel Administrativo para o Síndico
- Visão geral das atividades do condomínio
- Acesso a relatórios e dados dos moradores
- Gerenciamento de reservas, chamados e notificações


...

---

## Revisão Técnica de UX e de Negócio

| **Funcionalidades** | **Nível de Confiança** | **Tech** | **UX** | **Negócio** |
|-|-|-|-|-|
| Relatórios Financeiros e de Gestão | Vermelho | EEE | ♡♡ | $$ |
| Notificação de Entregas de Correspondencia | Amarelo | EE | ♡♡ | $$ |
| Acompanhamento de chamadas de manutenção | Vermelho | EE | ♡♡♡ | $$ |
| Reserva de Areas Comuns | Verde | E | ♡♡♡ | $$$ |

---

## Jornada x Funcionalidade

| **Carla Souza, Moradora Ativa: Chamada e Acompanhamento de Manutenção** |
|-|
| Acorda cedo e toma café da manhã. |
| Percebe uma notificação de que o ar-condicionado do seu apartamento parou de funcionar. |
| Abre o aplicativo de gerenciamento do condomínio e seleciona a opção "Manutenção". |
| Inicia uma nova chamada de manutenção descrevendo o problema. |
| Envia a solicitação e recebe uma confirmação imediata do recebimento da solicitação. |
| À tarde, acompanha o andamento do chamado e vê que o técnico foi agendado para o mesmo dia à noite. |
| Recebe uma notificação de que o técnico chegou no condomínio e finalizou o serviço. |


| **João Mendes, Síndico Profissional: Reserva de Áreas Comuns** |
|-|
| Acorda cedo para revisar as tarefas do dia. |
| Chega ao escritório do condomínio às 8:00 e abre o aplicativo de gerenciamento. |
| Verifica as reservas de áreas comuns e confirma os horários das reservas já realizadas. |
| Recebe uma solicitação de um morador para reservar a churrasqueira para um evento de aniversário. |
| Acessa a funcionalidade de "Reserva de Áreas Comuns" no aplicativo. |
| Verifica a disponibilidade da churrasqueira e confirma a reserva para o morador na data solicitada. |
| Envia uma notificação para o morador confirmando a reserva e as condições de uso da área comum. |


| **Roberto Lima, Porteiro e Funcionário do Condomínio: Notificação de Entregas de Correspondência** |
|-|
| Chega ao trabalho às 7:00 e começa a organizar a recepção do condomínio. |
| Recebe uma notificação do aplicativo de que uma encomenda chegou para um morador específico. |
| Acessa o aplicativo e verifica os detalhes da encomenda, incluindo o nome e o número do apartamento. |
| Atualiza o status da entrega como "Recebido" e notifica o morador sobre a chegada da correspondência. |
| Aguarda o morador chegar para entregar a encomenda, mas também verifica se há mais entregas para outros moradores. |
| Durante o dia, envia outras notificações para os moradores sobre as correspondências que chegaram. |
| No final do expediente, verifica novamente o status de todas as entregas e fecha o processo de notificação. |

---

## Sequenciador

| Ondas | | | |
|-|-|-|-|
| **1** | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png)<br>E $$$ ♡♡♡<br>Visualização da disponibilidade de areas comuns | ![#ffde21](https://placehold.co/15x15/ffde21/ffde21.png)<br>E $$$ ♡♡<br> Reserva de Areas Comuns | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png)<br>EEE $$$ ♡♡<br> Gerenciamento de Reservas |
| **2** | ![#ffde21](https://placehold.co/15x15/ffde21/ffde21.png)<br>EE $$ ♡♡<br> Notificações de pacotes recebidos | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png)<br>E $$ ♡♡<br> Chamadas para manutenção | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png)<br>EE $$$ ♡♡<br> Acompanhamento de status de manutenção |
| **3** | | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png)<br>EE $$ ♡♡<br> Geração de Relatórios de Gestão | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png)<br>EEE $$ ♡♡<br> Geração de relatórios financeiros |

---

## Canvas MVP

| **Bloco**                         | **Descrição** |
|----------------------------------|----------------|
| **Proposta do MVP**              | Desenvolver um sistema web (SaaS) para gerenciamento de condomínios pequenos, com foco inicial em três funcionalidades principais: <br>1. Reserva de áreas comuns <br>2. Notificação de entregas de correspondências <br>3. Chamadas e acompanhamento de manutenção |
| **Personas Segmentadas**         | - Carla Souza (moradora ativa)<br>- João Mendes (síndico profissional)<br>- Roberto Lima (porteiro/funcionário do condomínio) |
| **Funcionalidades do MVP**       | - Visualização e reserva de áreas comuns<br>- Notificação de entregas (porteiro → morador)<br>- Criação e acompanhamento de chamados de manutenção |
| **Resultado Esperado**           | - Redução de ruídos na comunicação entre síndico, moradores e funcionários<br>- Agilidade na gestão de reservas e manutenções<br>- Aumento da organização e rastreabilidade das entregas |
| **Jornadas Contempladas**        | - Carla solicita e acompanha manutenção<br>- João realiza e gerencia reservas de áreas comuns<br>- Roberto registra entregas e notifica moradores |
| **Custo e Cronograma**           | - Duração estimada: 6 a 8 semanas<br>- Equipe mínima: 1 Dev Backend, 1 Dev Frontend, 1 UX Designer, 1 PO<br>- Custo estimado: R$ 30.000 a R$ 40.000 |
| **Métricas para Validar Hipóteses de Negócio** | - % de moradores que realizam reservas sem intervenção manual<br>- Tempo médio entre solicitação e solução de chamados<br>- % de notificações de entrega visualizadas em até 1 hora<br>- Feedback positivo (> 80%) na usabilidade do MVP |



---


# Imagens:

### Login:
![tela de login alta qualidade](/public/login.PNG)

### Inicio:
![tela de Inicio alta qualidade](/public/inicio.PNG)

### Area comuns:
![tela de areas comuns alta qualidade](/public/areas%20comuns.PNG)

### Gestão de Entregas:
![tela de Entregas alta qualidade](/public/gestaoEntregas.PNG)

### Manutenção:
![tela de Manutenção alta qualidade](/public/manutencao.PNG)
