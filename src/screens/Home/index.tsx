import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import { TodoList, Container, ContainerButton } from './styles';
import Button from '../../components/Button';
import { Modal } from '../../components/Modal';
import CreateTaskModal from './components/CreateTaskModal';
import { useTask } from '../../hooks/Task';
import ListTaskModal from './components/ListTaskModal';
import ListSkeleton from '../../components/List/skeleton';
import { MMKV } from 'react-native-mmkv';

const PAGE = 1;
const storage = new MMKV();

const Home: React.FC = () => {
  const { fetchTask, tasks, meta } = useTask();
  const modalCreateTaskRef = useRef<Modal>(null);
  const modaListTaskRef = useRef<Modal>(null);

  const openModalCreateTask = () => modalCreateTaskRef.current?.open();
  const closeModalCreateTask = () => modalCreateTaskRef.current?.close();

  const openModalListTask = () => modaListTaskRef.current?.open();
  const closeModalListTask = () => modaListTaskRef.current?.close();

  const x = () => {
    const value = storage.getString('app-store-persist');
    return value ?? null;
  };
  useEffect(() => {
    fetchTask(meta?.currentPage || 1);
  }, []);

  const renderTodoList = ({ item }: any) => {
    const props = {
      ...item,
      openModalListTask,
    };
    return <List {...props} />;
  };

  const handleEndReached = () => {
    if (meta && meta.currentPage <= meta.totalPages)
      fetchTask(meta.currentPage + PAGE);
  };

  return (
    <Container>
      <TodoList
        ListHeaderComponent={Header}
        data={tasks}
        renderItem={renderTodoList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListSkeleton}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.3}
      />
      <ContainerButton>
        <Button title="Add New Task" onPress={openModalCreateTask} />
      </ContainerButton>
      <Modal ref={modalCreateTaskRef}>
        <CreateTaskModal closeModal={closeModalCreateTask} />
      </Modal>
      <Modal ref={modaListTaskRef}>
        <ListTaskModal closeModalListTask={closeModalListTask} />
      </Modal>
    </Container>
  );
};

export default Home;
