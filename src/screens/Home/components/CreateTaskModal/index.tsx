import React, { useState } from 'react';
import { Input } from '../../../../components/Input';
import Button from '../../../../components/Button';
import { useTask } from '../../../../hooks/Task';
import { CreateTaskModalProps } from './interfaces';
import Toast from 'react-native-toast-message';
import { useNetInfo } from '@react-native-community/netinfo';

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ closeModal }) => {
  const { create } = useTask();
  const { isConnected } = useNetInfo();

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    category: '',
    check: false,
  });

  const createTask = async () => {
    try {
      if (!isConnected) {
        return Toast.show({
          type: 'error',
          text1:
            'O dispositivo se encontra offline e por isso não é possivel criar novas atividades',
        });
      }

      await create(formValues);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'There was a problem registering the Task',
      });
      throw error;
    } finally {
      closeModal();
    }
  };

  const handleChangeValue = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const filledFormValues = !Object.values(formValues).every(
    value => value !== '',
  );

  return (
    <>
      <Input
        label="Task Title"
        onChangeText={text => handleChangeValue('title', text)}
      />
      <Input
        label="Category"
        onChangeText={text => handleChangeValue('category', text)}
      />
      <Input
        label="Notes"
        multiline={true}
        numberOfLines={5}
        height="120"
        onChangeText={text => handleChangeValue('description', text)}
      />
      <Button
        title="Save Task"
        onPress={createTask}
        disabled={filledFormValues}
      />
    </>
  );
};

export default CreateTaskModal;
