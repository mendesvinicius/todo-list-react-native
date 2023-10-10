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
git clone https://github.com/mendesvinicius/todo-list-react-native.git
```

Navigate to the project folder:

```bash
cd todo-list-react-native
```

Install project dependencies:

```bash
npm install
```

or

```bash
yarn
```

## Running TODO LIST API
The application contains an integration with a [Node server](https://github.com/mendesvinicius/todo-list-api), so in order to be successful in the application's operations, it is necessary to configure this server to run first.

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


in the IOS folder:

```bash 
pod install
```

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

#### List Task
The user can view their tasks on the main screen, which is a paginated screen. If the user has more than 7 tasks to view, they need to scroll down the screen to see the others.

#### Create Task
The user can create new tasks from the task modal. In this modal, there are three mandatory fields: title, category, and description.

#### Update Completed Task
The user can mark a task as completed by simply tapping on the screen.

#### Delete Task
The user can delete a task by pressing on the task itself, which will open a modal window. In this modal window, there will be the task description, and next to it, there will be a trash can icon that they can click to initiate the task deletion.

### Offline Task
Even offline, you will still be able to view the tasks, but initially, you won't be able to perform the operations of creating, marking as completed, or deleting tasks.

#### Conclusion
This React Native project provides a task list with essential task management features. You can expand and enhance the application by adding more features such as due dates, task categories, or reminders. Explore the source code and customize it according to your needs.
