# Clínica Vesper

Landing page de uma clínica fictícia com atendimento integrado em **Fisioterapia, Nutrição, Saúde Mental e Clínica Geral**.

O projeto explora uma identidade visual dark medical/editorial: fundos em grafite e preto azulado, tons de marfim, prata e verde-sálvia, tipografia com inspiração editorial e composição com espaços generosos.

> Projeto acadêmico. A Clínica Vesper e os profissionais apresentados são fictícios. O site não oferece atendimento médico nem realiza agendamentos.

## Objetivo acadêmico

Desenvolvido para o **Projeto 01 — Landing Page Estática**, com o objetivo de aplicar fundamentos de desenvolvimento front-end:

- Estruturação de conteúdo com HTML semântico.
- Estilização e adaptação de layouts com CSS.
- Interações com JavaScript.
- Organização de arquivos e preparação para publicação no GitHub Pages.
- Cuidados básicos de acessibilidade e navegação por teclado.

### Requisitos contemplados

- Título na aba do navegador.
- Espaços para imagens relacionadas aos serviços.
- Descrição das especialidades.
- Equipe fictícia com três membros, fotografias ilustrativas e cargos.
- Hierarquia de cabeçalhos HTML.
- Formulário com Nome, E-mail, Cidade e Estado.
- Funcionamento estático, sem backend.

A conclusão dos requisitos visuais depende da inclusão e conferência das imagens na pasta `img/`.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
| --- | --- |
| HTML5 | Estrutura semântica, conteúdo e formulário |
| CSS3 | Identidade visual, layouts responsivos e transições |
| JavaScript | Menu mobile, animações e validação demonstrativa |
| GitHub Pages | Hospedagem estática prevista |

O projeto não utiliza frameworks, bibliotecas externas, banco de dados ou ferramentas de compilação.

## Especialidades e equipe

A proposta da clínica reúne:

- **Fisioterapia:** movimento, mobilidade e reabilitação.
- **Nutrição:** orientação alimentar e planejamento individualizado.
- **Saúde Mental:** avaliação e acompanhamento em psiquiatria.
- **Clínica Geral:** avaliação clínica e apoio à integração do cuidado.

| Profissional fictício | Área |
| --- | --- |
| Dra. Ingrid Bellini | Clínica Geral |
| Dr. Lucas Lachowski | Fisioterapia |
| Dra. Marina Beaumont | Psiquiatria |

A profissional de Nutrição será definida em uma etapa posterior.

## Funcionalidades

- Navegação entre seções por âncoras.
- Layout com adaptações para computador, tablet e celular.
- Menu mobile com indicação de abertura, fechamento pela tecla Escape e gerenciamento de foco.
- Rolagem suave e animações discretas.
- Respeito à preferência do sistema por movimento reduzido.
- Link para pular diretamente ao conteúdo principal.
- Indicadores visuais de foco para navegação por teclado.
- Carregamento adiado das imagens fora da abertura.
- Formulário demonstrativo com validação nativa e rejeição de campos preenchidos apenas com espaços.
- Mensagem de resultado anunciada por uma região acessível.

### Comportamento do formulário

O formulário serve exclusivamente para demonstração acadêmica.

Com o JavaScript carregado, o botão **Testar formulário** verifica o preenchimento e apresenta uma mensagem de confirmação da validação.

**Nenhuma informação é enviada a um servidor ou armazenada pelo código do projeto.** Não há cadastro, envio de e-mail ou agendamento. Utilize dados fictícios nos testes.

Sem JavaScript, o conteúdo e os links de navegação permanecem disponíveis, e o botão do formulário continua desabilitado.

## Estrutura do projeto

```text
clinica-vesper/
├── index.html
├── style.css
├── script.js
├── README.md
└── img/
    ├── consulta.jpg
    ├── exames.jpg
    ├── nutricao.jpg
    ├── medico1.jpg
    ├── medico2.jpg
    └── nutricionista.jpg
```

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo, seções, equipe e formulário |
| `style.css` | Identidade visual, responsividade e estados de interação |
| `script.js` | Menu mobile, animações e comportamento do formulário |
| `img/` | Imagens dos serviços e fotografias ilustrativas da equipe |
| `README.md` | Apresentação e instruções do projeto |

### Imagens provisórias

Os nomes das imagens seguem a estrutura inicial e poderão ser atualizados.

Na versão inicial do HTML, `nutricionista.jpg` é utilizado provisoriamente no perfil da **Dra. Marina Beaumont, psiquiatra**. Esse arquivo deverá ser substituído pela fotografia escolhida para o perfil.

Ao trocar imagens:

1. Salve o arquivo na pasta `img/`.
2. Atualize o atributo `src` correspondente no HTML, caso o nome ou a extensão mude.
3. Revise o texto alternativo (`alt`) conforme o conteúdo da imagem.
4. Confira o enquadramento em telas grandes e pequenas.
5. Registre a origem e os créditos quando exigidos pela licença da imagem.

Os caminhos devem respeitar exatamente os nomes dos arquivos, incluindo letras maiúsculas, minúsculas e extensões.

## Como executar

### Abrindo diretamente no navegador

1. Baixe ou clone o repositório.
2. Mantenha os arquivos e a pasta `img/` na estrutura indicada.
3. Abra o arquivo `index.html` em um navegador atualizado.

Não é necessário instalar dependências ou executar comandos de compilação.

### Usando o VS Code

1. Abra a pasta `clinica-vesper` no VS Code.
2. Salve as alterações nos arquivos.
3. Abra o `index.html` no navegador e atualize a página após cada alteração.

Opcionalmente, utilize a extensão **Live Server** para visualizar o site em um servidor local com atualização automática. Essa extensão é uma ferramenta de desenvolvimento e não é uma dependência do projeto.

## Publicação

O site utiliza arquivos estáticos e caminhos relativos, com estrutura preparada para hospedagem no GitHub Pages.

**Link público:** a adicionar após a publicação.

<!-- Substitua a linha acima pelo endereço real do GitHub Pages. -->

## Verificação antes da entrega

- [ ] Confirmar que todas as imagens carregam.
- [ ] Revisar as fotos, os textos alternativos e os créditos.
- [ ] Testar os links de navegação e o menu mobile.
- [ ] Conferir o layout em computador e celular.
- [ ] Verificar se existe rolagem horizontal indevida.
- [ ] Testar a navegação com Tab e o fechamento do menu com Escape.
- [ ] Testar campos vazios, e-mail inválido e preenchimento válido.
- [ ] Conferir o console do navegador.
- [ ] Publicar o projeto e inserir o link nesta documentação.

## Autoria

Desenvolvido por **Isac**, como projeto acadêmico de desenvolvimento front-end.