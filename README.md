# React Native Project Documentation - Todo-List with Zustand

## Introduction
This is a React Native project for a task list (Todo-List) app that utilizes global state management with Zustand. In this documentation, you will find information on setting up the development environment for React Native, running the project, and understanding the main implemented features.

## Environment Setup
### Prerequisites
To begin development with React Native, you need to set up your development environment. Make sure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Project Configuration
Clone the project repository:

```bash
git clone https://seu-repositorio.git
```


Navigate to the project folder:

```bash
cd nome-do-projeto
```

Install project dependencies:

```bash
npm install
```

or

```bash
yarn
```

## Running the Project
Now that you have configured the environment and installed the dependencies, you can run the project on an emulator or physical device. Ensure that your emulator or device is configured correctly.

To run the application on an Android emulator, use the following command:

```bash
npm run android
```

or 

```bash
yarn android
```

To run the application on an iOS emulator, use the following command:

```bash
npm run ios
```
or
```bash
yarn ios
```

If you prefer, you can start the Metro Bundler separately:

```bash
npm start
```
or

```bash
yarn start
```

Now, the application should be displayed on your emulator or physical device.

## Features
#### Task Search
The search functionality allows users to search for existing tasks in the list.

#### Create Task
Users can create new tasks to add to the list. Create a task creation form that allows users to enter task details such as title and description.

#### Update Completed Task
Users should be able to mark a task as completed or unmark it.

####Delete Task
Users should be able to delete tasks from the list when they are no longer needed.

####Conclusion
This React Native project provides a task list with essential task management features. You can expand and enhance the application by adding more features such as due dates, task categories, or reminders. Explore the source code and customize it according to your needs.
