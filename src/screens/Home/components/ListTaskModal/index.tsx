import React from 'react';
import { useTask } from '../../../../hooks/Task';
import {
  ButtonDelete,
  Container,
  ContainerDescription,
  ContainerInfo,
  ContainerStatus,
  ContainerTitle,
  Description,
  Status,
  StatusText,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListTaskModalProps } from './interfaces';
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components';
import { useNetInfo } from '@react-native-community/netinfo';

const ListTaskModal: React.FC<ListTaskModalProps> = ({
  closeModalListTask,
}) => {
  const { task, taskDelete } = useTask();
  const { colors } = useTheme();
  const { isConnected } = useNetInfo();

  const deleteTaskInModal = async () => {
    try {
      if (!isConnected) {
        return Toast.show({
          type: 'error',
          text1:
            'The device is offline, and therefore, its not possible to create new tasks',
        });
      }
      if (task && task.id) await taskDelete(task.id);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'There was a problem deleting the Task',
      });
    } finally {
      closeModalListTask();
    }
  };

  return (
    <Container>
      {task && (
        <ContainerInfo>
          <ContainerTitle>
            <Title>{task.title}</Title>
          </ContainerTitle>
          {task.description && (
            <ContainerDescription>
              <Description>{task.description}</Description>
            </ContainerDescription>
          )}
          <ContainerStatus>
            <Status background={colors.gray['300']}>
              <StatusText>
                {task.check ? 'Completed' : 'In Progress'}
              </StatusText>
            </Status>
            {task.category && (
              <Status background={colors.yellow}>
                <StatusText>{task.category}</StatusText>
              </Status>
            )}
          </ContainerStatus>
        </ContainerInfo>
      )}
      <ButtonDelete onPress={deleteTaskInModal}>
        <Icon size={25} name="delete" color={colors.gray['500']} />
      </ButtonDelete>
    </Container>
  );
};

export default ListTaskModal;
