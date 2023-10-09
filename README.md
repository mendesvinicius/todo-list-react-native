# Documentação do Projeto React Native - Todo-List com Zustand

## Introdução
Este é um projeto React Native de um aplicativo de lista de tarefas (Todo-List) que utiliza o estado global gerenciado pelo Zustand. Nesta documentação, você encontrará informações sobre como configurar o ambiente de desenvolvimento para o React Native, executar o projeto e entender as principais funcionalidades implementadas.

## Configuração do Ambiente
### Pré-requisitos
Para começar a desenvolver com React Native, você precisa configurar seu ambiente de desenvolvimento. Certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/en)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Configuração do Projeto
Clone o repositório do projeto:

```bash
git clone https://seu-repositorio.git
```


Navegue até a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências do projeto:

```bash
npm install
```

or

```bash
yarn
```

##Executando o Projeto

Agora que você configurou o ambiente e instalou as dependências, pode executar o projeto em um emulador ou dispositivo físico. Certifique-se de que seu emulador ou dispositivo esteja configurado corretamente.

Para executar o aplicativo em um emulador Android, use o seguinte comando:

```bash
npm run android
```

or 

```bash
yarn android
```

Para executar o aplicativo em um emulador iOS, use o seguinte comando:

```bash
npm run ios
```
or
```bash
yarn ios
```

Se preferir, você pode iniciar o Metro Bundler separadamente:

```bash
npm start
```
or

```bash
yarn start
```

Agora, o aplicativo deve ser exibido em seu emulador ou dispositivo físico.

##Funcionalidades
####Buscar Tarefas
A funcionalidade de busca permite ao usuário pesquisar tarefas existentes na lista. Implemente esta funcionalidade usando filtros ou pesquisa em tempo real.

####Criar Tarefa
Os usuários podem criar novas tarefas para adicionar à lista. Crie um formulário de criação de tarefa que permita aos usuários inserir detalhes da tarefa, como título e descrição.

####Atualizar Tarefa Concluída
Os usuários devem ser capazes de marcar uma tarefa como concluída ou desmarcá-la. Implemente um sistema de marcação de tarefas como concluídas, mantendo um estado atualizado em Zustand.

####Deletar Tarefa
Permita que os usuários excluam tarefas da lista quando não forem mais necessárias. Implemente um mecanismo de exclusão que remova a tarefa do estado global.

####Conclusão
Este projeto React Native oferece uma lista de tarefas com funcionalidades essenciais para gerenciamento de tarefas. Você pode expandir e aprimorar o aplicativo adicionando mais recursos, como datas de vencimento, categorias de tarefas ou lembretes. Explore o código-fonte e personalize-o de acordo com suas necessidades. Divirta-se desenvolvendo seu aplicativo Todo-List com Zustand!