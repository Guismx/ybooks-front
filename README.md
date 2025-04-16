# YBooks - Front-End  

📘 **Sobre o Projeto**  
Esta é a interface web do **YBooks**, um sistema de gerenciamento de livraria. O front-end foi desenvolvido em **Angular** e é responsável por proporcionar uma experiência interativa e intuitiva para os usuários, permitindo o cadastro, visualização, empréstimo e avaliação de livros.

Este projeto tem como objetivo exercitar e aprimorar conhecimentos em desenvolvimento front-end com Angular, aplicando boas práticas de arquitetura e componentes reutilizáveis.

---

🚀 **Funcionalidades Implementadas**  

✅ **Autenticação de Usuários**  
- Login com validação e redirecionamento de acordo com o perfil (Normal, Funcionário, Administrador).

✅ **Cadastro e Gerenciamento de Livros**  
- Listagem e visualização de detalhes dos livros.  
- Cadastro e edição de livros (acessível para Funcionários e Administradores).  

✅ **Empréstimo de Livros**  
- Solicitação de empréstimo com registro de datas.  
- Visualização dos empréstimos realizados.

✅ **Comentários e Avaliações**  
- Usuários podem avaliar e comentar sobre os livros diretamente pela interface.

✅ **Listagem de Usuários**  
- Consulta e detalhes de usuários (acesso restrito conforme perfil).

✅ **Layout Responsivo e Navegação Intuitiva**  
- Interface moderna, com navegação clara e organizada.

---

🛠️ **Tecnologias Utilizadas**  
- **Angular**  
- **TypeScript**  
- **SCSS**  
- **HTML5**  
- **PrimeNG** (componentes de UI)  
- **RxJS**  
- **Angular Router**  
- **HTTPClientModule**

---

🏗️ **Estrutura do Projeto**  

```
📁 .angular/         → Arquivos internos de configuração do Angular  
📁 .vscode/          → Configurações do VSCode (extensões, tasks, launch)  
📁 node_modules/     → Pacote de dependências npm  

📁 src/              → Diretório principal do projeto  
 ┣ 📁 app/  
 ┃ ┣ 📁 components/      → Componentes reutilizáveis da aplicação  
 ┃ ┃ ┣ 📁 books/         → Componentes relacionados aos livros  
 ┃ ┃ ┃ ┣ 📁 booksdetails/ → Visualização de detalhes  
 ┃ ┃ ┃ ┗ 📁 bookslist/    → Listagem de livros  
 ┃ ┣ 📁 layout/          → Layout geral da aplicação  
 ┃ ┣ 📁 login/           → Tela de login e autenticação  
 ┃ ┣ 📁 menu/            → Menu de navegação principal  
 ┃ ┣ 📁 principal/       → Página principal/dashboard  
 ┃ ┣ 📁 users/           → Gerenciamento de usuários  
 ┃ ┃ ┣ 📁 usersdetails/  → Detalhes de usuários  
 ┃ ┃ ┗ 📁 userslist/     → Lista de usuários  
 ┃ ┣ 📁 services/        → Serviços de comunicação com o back-end  
 ┃ ┗ 📁 models/          → Modelos TypeScript (ex: `book.ts`, `user.ts`)  
 ┣ 📄 app.component.html → Template do componente principal  
 ┣ 📄 app.routes.ts      → Definição das rotas  
 ┣ 📄 app.config.ts      → Arquivo de configuração geral  

📁 assets/           → Recursos estáticos como imagens e ícones  
 ┗ 📄 favicon.ico     → Ícone da aba do navegador  

📄 index.html         → HTML principal da aplicação  
📄 main.ts            → Ponto de entrada do Angular  
📄 styles.scss        → Estilos globais da aplicação  
📄 .editorconfig      → Regras de formatação do editor  
```

---

▶️ **Como Executar o Projeto**

1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/ybooks-frontend.git
```

2. Acesse a pasta do projeto:  
```bash
cd ybooks-frontend
```

3. Instale as dependências:  
```bash
npm install
```

4. Execute o projeto:  
```bash
ng serve
```

5. Acesse no navegador:  
[http://localhost:4200](http://localhost:4200)

---

🔗 **Back-End da Aplicação**  
O código back-end está disponível neste repositório:  
👉 [YBooks - Backend](https://github.com/Guismx/ybooks)

---

🤝 **Contribuições**  
Contribuições são muito bem-vindas!  
Sinta-se à vontade para abrir *issues*, propor melhorias ou enviar *pull requests*.

