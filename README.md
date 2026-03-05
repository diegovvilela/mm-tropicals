# README - MM Tropicals Landing Pages

## Resumo do Projeto

O **MM Tropicals** é um conjunto de landing pages desenvolvido para a empresa Marques & Mariano Tropicals, especializada na exportação de frutos tropicais brasileiros para mercados internacionais.

### Estrutura do Projeto

```
projeto/
├── index.html              # Página principal da empresa
├── script.js               # JavaScript principal (704 linhas)
├── styles.css              # Estilos CSS globais
├── functions/api/          # Cloudflare Functions
│   └── lead.js            # Endpoint para captura de leads
├── imagens/               # Assets de imagem
│   ├── certificates/      # Certificações
│   ├── certifications/    # Documentos técnicos
│   ├── equipe/           # Fotos da equipe
│   ├── frutos/           # Imagens dos frutos
│   └── mapas/            # Mapas e localização
└── portfolio/            # Landing pages específicas por fruto
    ├── banana/           # Página específica da banana
    ├── coco/             # Página específica do coco
    ├── limao/            # Página específica do limão
    ├── mamao/            # Página específica do mamão
    ├── manga/            # Página específica da manga
    ├── melancia/         # Página específica da melancia
    ├── melao/            # Página específica do melão
    └── uva/              # Página específica da uva
```

### Funcionalidades Principais

1. **Landing Page Principal**: Apresentação da empresa, serviços e formulário de contato
2. **Páginas por Produto**: Landing pages específicas para cada fruto tropical
3. **Sistema Multilíngue**: Suporte a Português (PT-BR), Inglês (EN) e Espanhol (ES)
4. **Formulário de Lead**: Captura de interessados com integração N8N
5. **Design Responsivo**: Adaptação automática para desktop, tablet e mobile
6. **Navegação Fluida**: Menu responsivo com dropdown do portfólio

### Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Lucide Icons
- **Fonts**: Google Fonts (Montserrat)
- **Backend**: Cloudflare Functions
- **Automação**: N8N (webhook para processar leads)
- **Hospedagem**: Cloudflare Pages

## Variáveis de Ambiente N8N

O projeto utiliza integração com N8N para processamento de leads através do Cloudflare Functions. As seguintes variáveis de ambiente devem ser configuradas:

### No Cloudflare (Configuração de Functions)

```bash
# URL do webhook N8N para receber os leads
N8N_WEBHOOK_URL=https://zapsmart.host-zapsmart.com.br/webhook/c36316d0-9745-4fc9-ae15-1d47cb606d6f

# Token de autenticação Bearer para o N8N
N8N_BEARER_TOKEN=2b7e1f8c-4a9d-4e2b-9c3a-7f6d5e1b0c8a
```

### Configuração no N8N

1. Criar um workflow com trigger webhook
2. Configurar autenticação Bearer Token
3. Processar os dados do lead recebidos:
   - `name`: Nome do interessado
   - `email`: Email para contato
   - `company`: Empresa (opcional)
   - `country`: País de origem
   - `fruits`: Array com frutos de interesse
   - `message`: Mensagem adicional
   - `language`: Idioma da página (pt-BR, en, es)
   - `pageUrl`: URL da página de origem
   - `submittedAt`: Timestamp do envio

## Informações de Acesso

### Email Hostinger

**Servidor**: mail.hostinger.com  
**Usuário**: contact@m3mtropicals.com  
**Senha**: M&Mtropicals2026  

**Configurações de Email**:
- **IMAP**: mail.hostinger.com:993 (SSL)
- **SMTP**: mail.hostinger.com:465 (SSL)
- **POP3**: mail.hostinger.com:995 (SSL)

### Conta Cloudflare

**Email**: contact@m3mtropicals.com  
**Senha**: M&Mtropicals2026  

**Serviços Utilizados**:
- Cloudflare Pages (hospedagem do site)
- Cloudflare Functions (endpoint `/api/lead`)
- DNS Management
- SSL/TLS

## Estrutura de Desenvolvimento

### Arquivos Principais

1. **index.html**: Landing page principal com todas as seções da empresa
2. **script.js**: Contém toda a lógica JavaScript, incluindo:
   - Sistema de traduções
   - Validação e envio do formulário
   - Navegação responsiva
   - Animações e interações

3. **styles.css**: Estilos globais compartilhados entre todas as páginas

### Portfolio de Produtos

Cada fruto possui sua própria landing page com estrutura padrão:
- `index.html`: Página específica do produto
- `script.js`: JavaScript específico (tradução + interações)
- `style.css`: Estilos específicos do produto
- `imagens/`: Assets visuais do produto

## Fluxo de Leads

1. **Usuário preenche formulário** na página principal ou em alguma página de produto
2. **Dados são validados** no frontend (campos obrigatórios, formato de email)
3. **Requisição POST** é enviada para `/api/lead` (Cloudflare Function)
4. **Function processa** e encaminha para webhook N8N
5. **N8N processa** o lead conforme workflow configurado
6. **Usuário recebe confirmação** de envio bem-sucedido

## Manutenção e Atualizações

### Adicionar Nova Fruta

1. Criar nova pasta em `/portfolio/nova-fruta/`
2. Copiar estrutura de uma fruta existente
3. Personalizar conteúdo, imagens e traduções
4. Adicionar link no menu dropdown do `index.html`
5. Atualizar opções no formulário de contato

### Atualizar Traduções

As traduções estão no objeto `translations` no início do `script.js`:
```javascript
const translations = {
    'pt-BR': { /* traduções em português */ },
    'en': { /* traduções em inglês */ },
    'es': { /* traduções em espanhol */ }
};
```

### Deploy

O projeto é hospedado no Cloudflare Pages com deploy automático. Para atualizações:
1. Fazer commit das alterações
2. Push para repositório principal
3. Cloudflare Pages detecta alterações e faz deploy automático

### Monitoramento

- **Analytics**: Configurado via Cloudflare Web Analytics
- **Logs de Function**: Acessível via dashboard Cloudflare Functions
- **Leads N8N**: Monitorar workflow N8N para garantir processamento de leads

## Contatos da Equipe

**Pedro Marques** - Engenheiro Agrônomo  
Especialista em exportação de frutas tropicais e normas internacionais

**Leonardo Mariano** - Especialista em Exportação  
Responsável por operações internacionais e relacionamento com clientes

---

**Última atualização**: Março 2026  
**Versão**: 1.0  
**Desenvolvido para**: Marques & Mariano Tropicals